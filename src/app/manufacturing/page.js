"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaRecycle,
  FaLightbulb,
  FaPhoneAlt,
  FaHandshake,
  FaShieldAlt,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const manufacturingHighlights = [
  {
    title: "Advanced Facilities",
    description:
      "State-of-the-art equipment ensures precision and consistency in every batch.",
    icon: <FaIndustry className="text-2xl text-blue-700" />,
  },
  {
    title: "Sustainable Practices",
    description:
      "Eco-conscious operations with minimized waste and energy-efficient systems.",
    icon: <FaRecycle className="text-2xl text-green-600" />,
  },
  {
    title: "Innovation Driven",
    description:
      "Continuous R&D drives innovation in formulation and process improvements.",
    icon: <FaLightbulb className="text-2xl text-yellow-500" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Strict QC protocols at every stage ensure safety, reliability, and compliance.",
    icon: <FaCheckCircle className="text-2xl text-cyan-600" />,
  },
];

const productLines = [
  {
    title: "Industrial Chemicals",
    image: "/images/pro1.jpg",
    description:
      "Bulk chemicals for manufacturing, cleaning, and industrial applications.",
  },
  {
    title: "Personal Care Ingredients",
    image: "/images/WhatsApp Image 2025-07-15 at 14.13.13_90787025.jpg",
    description:
      "Safe, high-grade ingredients used in skincare and hygiene products.",
  },
  {
    title: "Water Treatment Solutions",
    image: "/images/pro3.jpg",
    description:
      "Reliable chemicals for purifying and maintaining water quality in various sectors.",
  },
];

const whyChooseUs = [
  {
    icon: <FaHandshake className="text-xl text-blue-700" />,
    title: "Trusted Partnerships",
    desc: "Long-term relationships with global clients and suppliers.",
  },
  {
    icon: <FaShieldAlt className="text-xl text-green-600" />,
    title: "Certified Quality",
    desc: "Compliant with international standards and certifications.",
  },
  {
    icon: <FaUserTie className="text-xl text-cyan-700" />,
    title: "Expert Team",
    desc: "Experienced chemists and engineers at your service.",
  },
];

export default function ManufacturingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-gradient-to-br from-white to-blue-50 text-gray-800 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg4.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow">
            Heama Chemicals Manufacturing
          </h1>
        
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-medium text-gray-200">
            Where innovation meets precision — delivering excellence in every molecule we produce.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">
          Our Manufacturing Strengths
        </h2>
        <p className="text-blue-700 text-lg mb-12 text-center">
          Excellence in every process, from sourcing to delivery.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {manufacturingHighlights.map((item, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
<section
  className="relative max-w-full mx-auto px-6 py-10"
  style={{
    backgroundImage: "url('https://equirepsa.com/wp-content/themes/yootheme/cache/c6/equirepsa-home-slider-bg-3-c6bc6186.jpeg')", // Change to your image
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none " />

  <div className="relative z-10 max-w-5xl mx-auto text-center py-10">
    <h2 className="text-2xl font-bold text-blue-800 mb-2 text-center">
      Why Choose Heama Chemicals?
    </h2>
    <p className="text-blue-700 text-base mb-8 text-center">
      We go beyond manufacturing — we build trust, deliver quality, and support your growth.
    </p>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {whyChooseUs.map((item, i) => (
        <div
          key={i}
          className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full md:w-1/3"
          data-aos="fade-up"
          data-aos-delay={i * 120}
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
        >
          <div className="mb-3">{item.icon}</div>
          <h4 className="font-semibold text-blue-700 mb-1">{item.title}</h4>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Product Lines */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">
          Our Product Lines
        </h2>
        <p className="text-blue-700 text-lg mb-12 text-center">
          Explore our diverse range of chemical solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {productLines.map((product, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{product.title}</h3>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-cyan-100 to-blue-100 py-20 px-6 text-center">
        <h2
          className="text-3xl font-bold text-blue-800 mb-4 flex justify-center items-center gap-2"
          data-aos="zoom-in-up"
        >
          <FaPhoneAlt className="text-cyan-600" />
          Let’s Work Together
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg text-gray-700 mb-8"
          data-aos="zoom-in-up"
        >
          Contact our team to discuss your custom chemical requirements or explore our full manufacturing capabilities.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </main>
  );
}