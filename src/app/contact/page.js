"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/contactus.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/50 backdrop-blur-sm" />
        <div className="relative z-10 px-6 py-24 md:py-32 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-medium">
            Have a question or need more info? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Phone</h3>
              <p className="text-gray-600">+94 77 344 1501</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Email</h3>
              <p className="text-gray-600">info@heamachemicals.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-700 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Location</h3>
              <p className="text-gray-600">
                No. 55/3A1/1, Balapokuna Road, Kirulapona, Colombo-06.
              </p>
            </div>
          </div>
          
      {/* Social Media Links */}
      <div className="text-left mt-16 mb-20">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Follow Us on Social Media
        </h3>
        <div className="flex justify-start items-center gap-6 text-2xl text-blue-700">
          <a
            href="https://www.facebook.com/heamachemicals"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/heamachemicals"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/heamachemicals"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/heamachemicals"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
