"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (!hasMounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-lg border-b border-gray-200"
          : "bg-white/10 backdrop-blur-md"
      }`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src={isScrolled ? "/images/logo.png" : "/logo W.png"}
              alt="Heama Logo"
              className="h-10 w-auto object-contain drop-shadow transition duration-300"
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              const colorClasses = isScrolled
                ? isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                : isActive
                ? "text-blue-300"
                : "text-white hover:text-blue-300";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition ${colorClasses}
                    after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                    hover:after:w-full after:rounded`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-lg shadow font-semibold transition ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white border border-white hover:bg-white/50"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/70 hover:bg-blue-100 transition border border-gray-200 ml-auto"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-blue-700" />
            ) : (
              <Menu className="h-7 w-7 text-blue-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 border-t border-gray-200 rounded-b-xl shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded font-medium transition ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="block bg-blue-600 text-white text-center px-3 py-2 rounded-lg hover:bg-blue-700 transition mt-4 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
