"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

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

  // Dropdown states
  const [isProductsOpen, setIsProductsOpen] = useState(false); // desktop root dropdown
  const [isOurProductsOpen, setIsOurProductsOpen] = useState(false); // desktop nested under "Our Products"
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false); // mobile root products
  const [isMobileOurProductsOpen, setIsMobileOurProductsOpen] = useState(false); // mobile nested under "Our Products"

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close nested mobile dropdown when closing main mobile menu
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileProductsOpen(false);
      setIsMobileOurProductsOpen(false);
    }
  }, [isMenuOpen]);

  // Close nested desktop submenu when closing main desktop dropdown
  useEffect(() => {
    if (!isProductsOpen) setIsOurProductsOpen(false);
  }, [isProductsOpen]);

  // Close all menus when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileOurProductsOpen(false);
    setIsProductsOpen(false);
    setIsOurProductsOpen(false);
  }, [pathname]);

  if (!hasMounted) return null;

  // Active state: treat Products active on any /products path
  const productsIsActive =
    pathname === "/products" ||
    pathname === "/products/products" ||
    pathname === "/products/industrial-chemicals" ||
    pathname.startsWith("/products/");

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
              const isActive =
                link.href === "/products" ? productsIsActive : pathname === link.href;

              const colorClasses = isScrolled
                ? isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                : isActive
                ? "text-blue-300"
                : "text-white hover:text-blue-300";

              // Products with dropdown
              if (link.href === "/products") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`relative font-medium transition ${colorClasses}
                        after:content-[''] after:block after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                        hover:after:w-full after:rounded flex items-center gap-1`}
                      aria-haspopup="true"
                      aria-expanded={isProductsOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Root dropdown */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-64 bg-white/95 border border-gray-200 rounded-lg shadow-xl py-2 transition-all duration-200 z-50 ${
                        isProductsOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Our Products (has nested submenu) */}
                      <div
                        className="relative"
                        onMouseEnter={() => setIsOurProductsOpen(true)}
                        onMouseLeave={() => setIsOurProductsOpen(false)}
                      >
                        <Link
                          href="/products/products"
                          className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                          onClick={() => setIsProductsOpen(false)}
                          aria-haspopup="true"
                          aria-expanded={isOurProductsOpen}
                        >
                          <span>Our Products</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform ${
                              isOurProductsOpen ? "translate-x-0.5" : ""
                            }`}
                          />
                        </Link>

                        {/* Nested submenu */}
                        <div
                          className={`absolute top-0 left-full ml-0 w-56 bg-white/95 border border-gray-200 rounded-lg shadow-xl py-2 transition-all duration-200 ${
                            isOurProductsOpen
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                        >
                          <Link
                            href="/products/products/cosmetics"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                            onClick={() => {
                              setIsOurProductsOpen(false);
                              setIsProductsOpen(false);
                            }}
                          >
                            Cosmetics
                          </Link>
                          <Link
                            href="/products/products/cleaning-essentials"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                            onClick={() => {
                              setIsOurProductsOpen(false);
                              setIsProductsOpen(false);
                            }}
                          >
                            Cleaning Essentials
                          </Link>
                        </div>
                      </div>

                      {/* Our Industrial Chemicals (no nested submenu) */}
                      <Link
                        href="/products/industrial-chemicals"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        Our Industrial Chemicals
                      </Link>
                    </div>
                  </div>
                );
              }

              // Default links
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
              if (link.href === "/products") {
                const isActive =
                  pathname === "/products" ||
                  pathname === "/products/products" ||
                  pathname === "/products/industrial-chemicals" ||
                  pathname.startsWith("/products/");

                return (
                  <div key={link.href} className="rounded">
                    {/* Root products toggle */}
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between px-3 py-2 rounded font-medium transition ${
                        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                      aria-expanded={isMobileProductsOpen}
                      aria-controls="mobile-products-submenu"
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          isMobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Level 1 submenu (Products) */}
                    <div
                      id="mobile-products-submenu"
                      className={`pl-4 overflow-hidden transition-all ${
                        isMobileProductsOpen ? "max-h-[400px]" : "max-h-0"
                      }`}
                    >
                      {/* Our Products row (link + toggle) */}
                      <div className="flex items-center justify-between">
                        <Link
                          href="/products/products"
                          className="block px-3 py-2 rounded text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Our Products
                        </Link>
                        <button
                          type="button"
                          className="px-2 py-2"
                          onClick={() =>
                            setIsMobileOurProductsOpen((prev) => !prev)
                          }
                          aria-expanded={isMobileOurProductsOpen}
                          aria-controls="mobile-our-products-submenu"
                          aria-label="Toggle Our Products sub menu"
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              isMobileOurProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Level 2 submenu (Our Products subcats) */}
                      <div
                        id="mobile-our-products-submenu"
                        className={`pl-6 overflow-hidden transition-all ${
                          isMobileOurProductsOpen ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <Link
                          href="/products/products#cosmetics"
                          className="block px-3 py-2 rounded text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Cosmetics
                        </Link>
                        <Link
                          href="/products/products#cleaning-essentials"
                          className="block px-3 py-2 rounded text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Cleaning Essentials
                        </Link>
                      </div>

                      {/* Industrial Chemicals */}
                      <Link
                        href="/products/industrial-chemicals"
                        className="block px-3 py-2 rounded text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Our Industrial Chemicals
                      </Link>
                    </div>
                  </div>
                );
              }

              // Default link items
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