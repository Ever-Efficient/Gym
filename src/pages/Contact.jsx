import { Phone, Mail, MessageCircle } from "lucide-react";
import {
  CONTACT_DIRECT_METHODS,
  OPENING_HOURS,
  MAP_EMBED_URL,
} from "../data/contact";

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
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-white font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white text-black border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-lg transition duration-200"
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
