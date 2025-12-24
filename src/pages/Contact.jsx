import Snowfall from "react-snowfall";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#898989] text-white py-16 px-6">
         <Snowfall
        color="#82c3d9"
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />
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
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 bg-white text-black hover:bg-[#7a7a7a] transition-all rounded-lg px-6 py-4 flex-1 min-w-[140px] border border-gray-600"
                  >
                    <Phone className="w-6 h-6 text-yellow-500" />
                    <span>Phone</span>
                  </a>
                  <a
                    href="mailto:info@gym.com"
                    className="flex items-center gap-3 bg-white text-black hover:bg-[#7a7a7a] transition-all rounded-lg px-6 py-4 flex-1 min-w-[140px] border border-gray-600"
                  >
                    <Mail className="w-6 h-6 text-yellow-500" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://wa.me/00000002222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white text-black hover:bg-[#7a7a7a] transition-all rounded-lg px-6 py-4 flex-1 min-w-[140px] border border-gray-600"
                  >
                    <MessageCircle className="w-6 h-6 text-yellow-500" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm  mb-2 text-white font-semibold">
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
                      className="w-full px-4 py-3 bg-white text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white text-black  border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 placeholder-gray-400 resize-none"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1841872571663!2d80.67686019731812!3d7.278664776439835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367be19d02d7d%3A0xfa67bb9a7082d197!2sEVER%20EFFICIENT%20Business%20Management!5e0!3m2!1sen!2slk!4v1765258026244!5m2!1sen!2slk"
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
                  <div className="flex justify-between font-semibold">
                    <span>Monday - Friday</span>
                    <span className="font-medium">6:00 AM - 11:00 PM</span>
                  </div>

                  <div className="flex justify-between font-semibold">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Sunday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
