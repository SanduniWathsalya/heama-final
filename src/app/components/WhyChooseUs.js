"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaCheckCircle,
  FaFlask,
  FaLeaf,
  FaGlobe,
  FaUserTie,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";

export default function ProductFeatureSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Define features array here:
  const features = [
    {
      icon: <FaFlask className="text-cyan-600 text-3xl" />,
      title: "Advanced Purity",
      text:
        "Our chemicals are manufactured with the highest standards, ensuring exceptional purity for your critical applications.",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Eco-Friendly Process",
      text:
        "We use sustainable and environmentally responsible production methods, minimizing our ecological footprint.",
    },
    {
      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
      title: "Certified Quality",
      text:
        "All our products are rigorously tested and certified to meet international quality and safety standards.",
    },
    {
      icon: <FaGlobe className="text-cyan-700 text-3xl" />,
      title: "Global Distribution",
      text:
        "We serve clients worldwide with a robust logistics network, ensuring timely and safe delivery of our products.",
    },
    {
      icon: <FaUserTie className="text-blue-800 text-3xl" />,
      title: "Expert Support",
      text:
        "Our experienced team provides technical support and guidance to help you achieve the best results with our products.",
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
      title: "Safe & Reliable",
      text:
        "Our products are designed with safety in mind, ensuring reliable performance and peace of mind for your operations.",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
      title: "Consistent Performance",
      text:
        "Experience consistent results batch after batch, thanks to our strict process controls and quality assurance.",
    },
    {
      icon: <FaHandshake className="text-cyan-800 text-3xl" />,
      title: "Trusted Partnerships",
      text:
        "We build long-term relationships with our clients, offering flexibility, transparency, and dedicated service.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
            Why Choose Our Product?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the unique features and benefits that set our chemical solutions apart in the industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Sticky Screenshot */}
          <div className="md:sticky md:top-24" data-aos="fade-right">
            <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-transparent bg-white bg-clip-padding bg-gradient-to-br from-cyan-100 via-white to-blue-100 p-2">
              <img
                src="/about.jpg"
                alt="Product Screenshot"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-5"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              </div>
            ))}
            {/* CTA Button */}
            <div className="pt-6" data-aos="zoom-in" data-aos-delay={features.length * 100 + 200}>
              <a
                href="#contact"
                className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:bg-cyan-700 transition-colors duration-300 font-semibold text-lg"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
