"use client";
import Link from "next/link";


import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaFlask,
  FaSoap,
  FaLeaf,
  FaSprayCan,
  FaBath,
  FaTint,
  FaPumpSoap,
  FaCar,
  FaToilet,
  FaOilCan,
  FaPaintBrush,
  FaArrowUp,
  FaPaperPlane,
  FaInfoCircle,
} from "react-icons/fa";
import { GiPerfumeBottle, GiWaterBottle } from "react-icons/gi";

/* Fade-up on scroll */
function useScrollFadeIn() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, isVisible];
}

/* Subtle 3D tilt on hover */
function useTilt(max = 7) {
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
  });

  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (0.5 - py) * 2 * max; // -max..max
    const ry = (px - 0.5) * 2 * max;
    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`,
    });
  };
  const onMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
    });
  };
  return { style, onMouseMove, onMouseLeave };
}

function ProductCard({
  image,
  title,
  subtitle,
  description,
  icon: Icon,
  accent = "text-emerald-500",
  badge,
}) {
  const [ref, isVisible] = useScrollFadeIn();
  const tilt = useTilt();

  return (
    <article
      ref={ref}
      className={`group relative transform-gpu ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-500`}
      aria-label={title}
    >
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/30 via-emerald-400/20 to-cyan-500/30 shadow-[0_10px_40px_-10px_rgba(30,64,175,0.25)] group-hover:shadow-[0_20px_60px_-12px_rgba(30,64,175,0.35)] transition-all duration-500">
        {/* Inner card with tilt */}
        <div
          {...tilt}
          className="rounded-2xl bg-white/90 backdrop-blur-md ring-1 ring-white/60 overflow-hidden"
          style={tilt.style}
        >
          {/* Image */}
          <div className="relative h-60 card-media">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority={false}
            />
            {/* Shine sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/25 to-transparent transition-colors duration-300 group-hover:from-black/30 group-hover:via-black/10" />
            {/* Icon bubble */}
            <div className="absolute top-4 left-4 flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-white grid place-items-center shadow-lg ring-1 ring-white/50">
                <div className="absolute -inset-2 -z-10 rounded-full bg-blue-500/20 blur-xl" />
                {Icon ? (
                  <Icon className={`${accent} text-xl`} />
                ) : (
                  <FaFlask className="text-emerald-600 text-xl" />
                )}
              </div>
            </div>
            {/* Badge */}
            {badge && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-white/90 text-blue-700 text-xs font-semibold px-2.5 py-1 shadow ring-1 ring-white/50">
                  {badge}
                </span>
              </div>
            )}
            {/* Title */}
            <div className="absolute inset-x-0 bottom-4 px-4">
              <h4 className="text-white text-lg font-semibold drop-shadow">{title}</h4>
            </div>
          </div>

          {/* Subtitle */}
          {subtitle && <h5 className="mt-4 px-4 text-center">{subtitle}</h5>}

          {/* Description + CTAs */}
          <div className="p-4">
            <p
              className="text-gray-600 text-sm"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
            <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow hover:from-blue-700 hover:to-indigo-700"
              >
                <FaPaperPlane className="text-white/90" />
                Request Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ring-1 ring-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <FaInfoCircle className="text-blue-600/80" />
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function BackToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default function ConsumerProductsPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <style jsx global>{`
        .glow-flash {
          text-shadow: 0 0 0 transparent;
          animation: glow 2.6s ease-in-out infinite;
        }
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 0 rgba(37, 99, 235, 0);
          }
          50% {
            text-shadow: 0 4px 24px rgba(37, 99, 235, 0.35);
          }
        }
        .bg-dots {
          background-image: radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          background-size: 18px 18px;
        }
        .grain {
          pointer-events: none;
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'%3E%3C/feColorMatrix%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
          opacity: 0.5;
        }
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(36px);
          opacity: 0.6;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.75;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-120%) translateY(0) rotate(12deg);
          }
          100% {
            transform: translateX(220%) translateY(0) rotate(12deg);
          }
        }
        .animate-shine {
          animation: shine 1.25s ease-in-out forwards;
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/about.png')" }}
          aria-hidden="true"
        />
        {/* Gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70 backdrop-blur-[2px]" />
        {/* Floating blobs */}
        <div className="hero-blob -top-16 -left-16 h-72 w-72 bg-blue-500/40 animate-pulse-slow" />
        <div className="hero-blob -bottom-24 -right-24 h-96 w-96 bg-cyan-400/40 animate-pulse-slow" />
        <div className="grain" />
        {/* Content */}
        <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow glow-flash">
            Our Cleaning Essentials
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
           Reliable performance and premium quality in every cleaning essential we offer.
          </p>
           <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/products/products/cosmetics"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-blue-800 font-semibold shadow hover:bg-white"
            >
              Explore Cosmetics
            </Link>
          
            <Link
              href="/products/industrial-chemicals"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:from-blue-700 hover:to-indigo-700"
            >
              Explore Chemicals
            </Link>
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      </section>



      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-20">
        
        
        {/* Cleaning Essentials */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: "/images/lemon.png",
              title: "Jonis Dishwash",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaTint className="text-blue-600" />
                  <span className="text-gray-800">Sparkling clean. Gentle on hands</span>
                </div>
              ),
              description:
                "Dissolves grease and residue, leaving dishes spotless. Enriched to protect hands from dryness — pure cleanliness, pure comfort.",
              icon: FaSoap,
              accent: "text-blue-600",
              badge: "Family Favorite",
            },
            {
              image: "/images/carwash.png",
              title: "Jonis Car Shampoo",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaCar className="text-indigo-600" />
                  <span className="text-gray-800">Shine that speaks luxury</span>
                </div>
              ),
              description:
                "Gently but powerfully removes dirt without stripping gloss. Leaves a radiant, showroom finish with every wash.",
              icon: FaCar,
              accent: "text-indigo-600",
            },
            {
              image: "/images/air.png",
              title: "Jonis Air Freshener",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaLeaf className="text-emerald-600" />
                  <span className="text-gray-800">Refresh. Revive. Relax</span>
                </div>
              ),
              description:
                "Transforms any space with crisp, long-lasting fragrance. Balanced scents for a calm, inviting atmosphere.",
              icon: FaLeaf,
              accent: "text-emerald-600",
            },
            {
              image: "/images/Toilet.png",
              title: "Jonis Toilet Bowl Cleaner",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaToilet className="text-rose-600" />
                  <span className="text-gray-800">Deep clean. Pure hygiene</span>
                </div>
              ),
              description:
                "Eliminates stains, limescale, and bacteria fast — for a sparkling bowl and fresh, hygienic environment.",
              icon: FaToilet,
              accent: "text-rose-600",
            },
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      <BackToTopButton />
    </main>
  );
}