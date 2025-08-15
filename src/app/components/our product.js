"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFlask,
  FaSoap,
  FaPrint,
  FaHardHat,
  FaMicroscope,
  FaWater,
} from "react-icons/fa";

const productCategories = [
  {
    title: "Personal Care Essentials",
    icon: <FaFlask />,
    image:
      "https://t3.ftcdn.net/jpg/02/72/37/20/360_F_272372012_2aOGqAOdrJaFmaqlkGCHSvlcL2wrLUDD.jpg",
    products: [
      {
        name: "Face Wash",
        img: "images/face wash.png",
        description: "Natural skin-soothing extract rich in vitamins.",
      },
       {
        name: "Shampoo",
        img: "images/shampoo.png",
        description: "Natural hair-cleansing formula with essential nutrients.",
      },
        {
        name: "Shampoo",
        img: "images/shampoo2.png",
        description: "Natural hair-cleansing formula with essential nutrients.",
      },
        {
        name: "Powder",
        img: "images/powder.png",
        description: "Natural skin-soothing extract rich in vitamins.",
      },
        {
        name: "Nail Polish Remover",
        img: "images/nailpolish.png",
        description: "Gentle formula for effective nail polish removal.",
      },
      {
        name: "Whitening Leg Serum",
        img: "images/leg.png",
        description: "Gentle formula for effective leg whitening.",
      },
      {
        name: "Hair Oil",
        img: "images/hire oil.png",
        description: "Gentle formula for effective hair nourishment.",
      },
    ],
  },
  {
    title: "Body Wash",
    icon: <FaSoap />,
    image:
      "https://247wallst.com/wp-content/uploads/2024/03/shutterstock-1850208661-huge-licensed-scaled.jpg",
    products: [
      {
        name: "Body Wash",
        img: "images/body wash 01.png",
        description: "Deeply moisturizing body wash for skin and hair.",
      },
      {
        name: "Body Wash",
        img: "images/body wash 02.png",
        description: "Deeply moisturizing body wash for skin and hair.",
      },
      {
        name: "Body Wash",
        img: "images/body wash 03.png",
        description: "Deeply moisturizing body wash for skin and hair.",
      },
    ],
  },
  {
    title: "Cleaning Essentials",
    icon: <FaPrint />,
    image:
      "https://confessionsofacleaninglady.com/wp-content/uploads/2023/05/cleaning-products-on-kitchen-counter.webp",
    products: [
      {
        name: "Dish Wash",
        img: "images/dashwash.png",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },
      {
        name: "Car Wash",
        img: "images/carwash.png",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },
       {
        name: "Air Freshener",
        img: "images/air.png",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },
       {
        name: "Dish Wash",
        img: "images/lemon.png",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },
       {
        name: "Toilet Cleaner",
        img: "images/Toilet.png",
        description: "Vibrant and long-lasting fabric coloring solution.",
      },

    ],
  },
  {
    title: "Water Treatment Chemicals",
    icon: <FaWater />,
    image:
      "https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=1170&auto=format&fit=crop",
    products: [
      {
        name: "Hydrogen Peroxide 50%",
        img: "images/pro1.jpg",
        description: "Effective disinfectant for water purification.",
      },
      {
        name: "Trichloroisocyanuric Acid",
        img: "images/mobile-heri01.png",
        description: "Removes impurities and contaminants from water.",
      },
    ],
  },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 160, easing: "ease-out-cubic" });
    // Refresh on route changes/images loaded if needed
    const t = setTimeout(() => AOS.refresh(), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="products"
      className="relative py-24 px-4 bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 text-white"
    >
     
    

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-teal-200">
              Our Products
            </span>
          </h2>
          <p className="text-white/80 mt-3 max-w-2xl mx-auto">
            Premium ingredients and chemicals across industries. Scroll to explore ✨
          </p>
        </div>

        {/* Category blocks */}
        {productCategories.map((cat, i) => (
          <div key={i} className="mb-24" data-aos="fade-up" data-aos-delay={i * 120}>
            {/* Category hero card */}
            <div
              className="group relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-8"
              style={{
                backgroundImage: `url(${cat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay + subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/70" />
              {/* Shine sweep on hover (no extra CSS needed) */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <div className="text-3xl md:text-4xl mb-4 bg-white text-emerald-600 p-3 rounded-full shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold drop-shadow">{cat.title}</h3>
                <p className="text-white/85 text-sm md:text-base mt-2">
                  Curated quality for reliable performance.
                </p>
              </div>
            </div>

            {/* Products grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-aos="fade-up"
              data-aos-delay={80}
            >
              {cat.products.map((p, j) => (
                <div
                  key={j}
                  data-aos="zoom-in-up"
                  data-aos-delay={j * 120}
                  className="group relative rounded-xl p-[1px] bg-gradient-to-br from-emerald-300/40 via-teal-300/40 to-cyan-300/40 hover:from-emerald-300/80 hover:via-teal-300/80 hover:to-cyan-300/80 transition-all duration-300 shadow-xl"
                >
                  <div className="rounded-xl overflow-hidden bg-white/90 text-slate-900 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md dark:bg-slate-900/70 dark:text-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover description overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="p-4 text-sm text-white/95">{p.description}</p>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div className="font-semibold">{p.name}</div>
                      <button
                        className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200 text-sm font-medium transition-colors"
                        aria-label={`Enquire about ${p.name}`}
                      >
                        Enquire
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Soft glow on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-emerald-400/20 blur-md" />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        ))}

        {/* Back to top */}
        <div className="mt-10 flex justify-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur text-white transition-colors"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}