"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    title: "R&D Head, BioLabs",
    text: "Heama Chemicals consistently delivers high-purity chemicals that meet our strict research standards. Their support team is knowledgeable and responsive.",
    image: "/customer1.jpg",
    rating: 5,
  },
  {
    name: "Mr. John Lee",
    title: "Procurement Manager, InduChem",
    text: "We rely on Heama for timely deliveries and quality products. Their eco-friendly approach is a big plus for our sustainability goals.",
    image: "/customer2.jpg",
    rating: 5,
  },
  {
    name: "Ms. Aisha Patel",
    title: "Production Supervisor, PharmaPlus",
    text: "The technical guidance from Heama’s experts has helped us optimize our processes. Highly recommended for any industry.",
    image: "/customer3.jpg",
    rating: 4,
  },
  {
    name: "Dr. Michael Chen",
    title: "Lead Scientist, GreenTech Labs",
    text: "We appreciate Heama’s commitment to sustainability and their willingness to customize solutions for our unique needs.",
    image: "/customer4.jpg",
    rating: 5,
  },
  {
    name: "Mrs. Fatima Al-Farsi",
    title: "Quality Manager, Medix Solutions",
    text: "Heama’s products have improved our production efficiency and quality. Their team is always ready to assist.",
    image: "/customer5.jpg",
    rating: 5,
  },
  {
    name: "Mr. David Kim",
    title: "Operations Director, ChemWorks",
    text: "Reliable, innovative, and customer-focused. Heama Chemicals is our trusted partner for all our chemical requirements.",
    image: "/customer6.jpg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">What our customers say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re proud to support leading companies and researchers. Here’s what they say about working with Heama Chemicals.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-l-4 border-cyan-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Large quote icon as background accent */}
              <FaQuoteLeft className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-100 text-7xl opacity-20 pointer-events-none" />
              {/* Foreground quote icon */}
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-4 relative z-10" />
              <p className="text-gray-700 mb-6 italic relative z-10">&ldquo;{t.text}&rdquo;</p>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-cyan-200 mb-3 relative z-10 shadow"
                loading="lazy"
              />
              <div className="relative z-10">
                <div className="font-bold text-blue-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
                {/* Star rating */}
                <div className="flex justify-center mt-2" aria-label={`Rated ${t.rating} out of 5`}>
                  {[...Array(5)].map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`text-yellow-400 ${idx < t.rating ? "" : "opacity-30"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
