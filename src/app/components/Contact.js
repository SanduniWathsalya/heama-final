import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white"
    >
        
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form Card */}
        <div className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-blue-900">Contact Us</h2>
          <p className="mb-8 text-gray-600">
            Reach out to our team for inquiries or quotes.
          </p>
          <form className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-8 py-3 rounded-lg shadow hover:from-blue-800 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg tracking-wide"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info */}
          <div className="mt-8 space-y-3 text-left text-blue-900/90">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>No. 55/3A1/1, Balapokuna Road, Kirulapona, Colombo-06.</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+94 77 344 1501</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>info@heamachemicals.com</span>
            </div>
          </div>
        </div>

        {/* Map Card */}
        <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-xl border border-blue-100">
          <iframe
            title="Heama Chemicals Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.41941518468123!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0b0b0b%3A0x0!2sYour%20Company%20Location!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Overlay label */}
          <div className="absolute top-4 left-4 bg-white/80 text-blue-900 px-4 py-2 rounded-lg shadow text-sm font-semibold">
            Our Location
          </div>
        </div>
      </div>
    </section>
  );
}