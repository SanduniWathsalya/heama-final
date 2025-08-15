import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
        {/* Logo / About */}
        <div>
          <div className="flex justify-center md:justify-start items-center gap-3 mb-2">
            <img src="/logo.png" alt="Heama Logo" className="h-8 sm:h-10" />
            <h2 className="text-xl sm:text-2xl font-bold">Heama Chemicals</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">
            Supplying high-quality chemicals for industrial, medical, and scientific excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300 flex flex-col items-center md:items-start">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-300 p-2 rounded-full transition-colors"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-300 p-2 rounded-full transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-300 p-2 rounded-full transition-colors"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-blue-300 p-2 rounded-full transition-colors"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-xs sm:text-sm text-center text-gray-400 space-y-2">
        <p>&copy; {new Date().getFullYear()} Heama Chemicals. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-300">
          <span>Designed & Developed by</span>
          <img src="/singale logo.png" alt="Frithcode Logo" className="h-5" />
          <span className="text-white font-semibold ml-1">FrithCode Technologies</span>
        </div>
      </div>
    </footer>
  );
}