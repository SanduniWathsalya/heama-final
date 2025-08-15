"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaVial, FaFlask, FaAtom } from "react-icons/fa";

const products = [
  {
    icon: <FaFlask />,
    title: "Hydrogen Peroxide 50%",
    description: "Strong oxidizer used in bleaching and disinfection.",
    image: "/images/pro1.jpg",
  },
  {
    icon: <FaVial />,
    title: "Soda Ash Light",
    description: "Used in glass manufacturing, detergents, and paper.",
    image: "/images/pro2.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Sulfate",
    description: "Commonly used in detergents and textile production.",
    image: "/images/pro3.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Tonsil Optimum 230 FF",
    description: "Activated bleaching earth for edible oil purification.",
    image: "/images/pro4.jpg",
  },
  {
    icon: <FaVial />,
    title: "Calcium Hypochlorite, Hydrated",
    description: "Disinfectant widely used in water treatment and sanitation.",
    image: "/images/pro5.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Sodium Nitrate",
    description: "Used in fertilizers, and food preservation.",
    image: "/images/pro6.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Trichloroisocyanuric Acid",
    description: "Powerful disinfectant for pools and industrial applications.",
    image: "/images/pro7.jpg",
  },
  {
    icon: <FaVial />,
    title: "Aluminium Sulphate 17%",
    description: "Coagulant used in water purification and paper manufacturing.",
    image: "/images/pro8.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Magnesium Sulfate Heptahydrate",
    description: "Used in agriculture and medical applications (Epsom salt).",
    image: "/images/pro9.jpg",
  },
  {
    icon: <FaFlask />,
    title: "Hydrated Lime Malaysia",
    description: "Used in water treatment, construction, and agriculture.",
    image: "/images/1000152735.jpg",
  },
  {
    icon: <FaVial />,
    title: "Nitric Acid 68%",
    description: "Strong acid for fertilizers, and chemical synthesis.",
    image: "/images/pro11.jpg",
  },
  {
    icon: <FaAtom />,
    title: "Caustic Soda Flakes",
    description: "Essential in soap making, paper, and textile industries.",
    image: "/images/pro12.jpg",
  },
];

export default function Chemicals() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-quad" });
  }, []);

  return (
    <section id="chemicals" className="relative overflow-hidden py-24 px-4">
      {/* Gradient background + soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] -z-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
            Our Chemicals
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-emerald-50/90">
          High‑quality industrial chemicals, thoughtfully curated.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 90}
              role="button"
              aria-label={p.title}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 ease-out hover:scale-[1.02] hover:ring-white/20 hover:shadow-2xl hover:shadow-emerald-900/20"
              style={{
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Soft gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black/90 transition-colors duration-500 group-hover:from-black/0 group-hover:via-black/50 group-hover:to-black/80" />

              {/* Subtle shine sweep on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-[-60%] h-full w-2/3 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
                <div className="text-3xl sm:text-4xl mb-4 rounded-full bg-white/90 p-3 text-emerald-700 shadow-lg shadow-emerald-900/10 ring-1 ring-emerald-600/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/90">
                  {p.description}
                </p>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}