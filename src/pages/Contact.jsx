import { useState, useRef } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import {
  CONTACT_DIRECT_METHODS,
  OPENING_HOURS,
  MAP_EMBED_URL,
} from "../data/contact";
import {
  validateContactForm,
  SubmissionRateLimiter,
} from "../utils/security";

const getContactIcon = (type) => {
  switch (type) {
    case "phone":
      return <Phone className="w-6 h-6 text-yellow-500" />;
    case "email":
      return <Mail className="w-6 h-6 text-yellow-500" />;
    case "whatsapp":
      return <MessageCircle className="w-6 h-6 text-yellow-500" />;
    default:
      return null;
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);
  const rateLimiterRef = useRef(new SubmissionRateLimiter(5000));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rateLimiterRef.current.canSubmit()) {
      const waitSec = rateLimiterRef.current.getRemainingCooldownSeconds();
      setStatusMessage({
        type: "error",
        text: `Please wait ${waitSec} second(s) before sending another message.`,
      });
      return;
    }

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatusMessage({
        type: "error",
        text: "Please correct the highlighted fields before submitting.",
      });
      return;
    }

    // Record submission for rate limiting
    rateLimiterRef.current.recordSubmission();
    setErrors({});
    setStatusMessage({
      type: "success",
      text: "Thank you! Your message has been sent securely.",
    });

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#898989] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl opacity-90 font-semibold">
            We're here to help you start your fitness journey. Reach out with
            any questions!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Direct Contact</h3>
              <div className="flex flex-wrap gap-4">
                {CONTACT_DIRECT_METHODS.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.type === "whatsapp" ? "_blank" : undefined}
                    rel={
                      method.type === "whatsapp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 bg-white text-black hover:bg-[#7a7a7a] transition-all rounded-lg px-6 py-4 flex-1 min-w-[140px] border border-gray-600"
                  >
                    {getContactIcon(method.type)}
                    <span>{method.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Send us a Message
              </h3>

              {statusMessage && (
                <div
                  className={`p-4 rounded-lg mb-6 text-sm font-semibold ${
                    statusMessage.type === "success"
                      ? "bg-green-700 text-white border border-green-500"
                      : "bg-red-700 text-white border border-red-500"
                  }`}
                  role="alert"
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm mb-2 text-white font-semibold">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={80}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                    placeholder="Your Full Name"
                  />
                  {errors.name && (
                    <p className="text-red-300 text-xs mt-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold mb-2 text-white">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-300 text-xs mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold mb-2 text-white">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={120}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="text-red-300 text-xs mt-1 font-semibold">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-2 text-white">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-300 text-xs mt-1 font-semibold">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-lg transition duration-200 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Location</h3>
              <div className="overflow-hidden rounded-lg shadow-2xl border border-gray-700">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[450px] rounded-lg"
                  title="TGCPM Fitness Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white text-black rounded-lg p-8 border border-gray-600">
              <h3 className="text-xl font-semibold mb-6">Opening Hours</h3>
              <div className="space-y-4">
                {OPENING_HOURS.map((slot) => (
                  <div
                    key={slot.days}
                    className="flex justify-between font-semibold"
                  >
                    <span>{slot.days}</span>
                    <span className="font-medium">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
