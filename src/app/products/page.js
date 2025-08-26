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
  
  FaInfoCircle,

  FaAtom,
  FaMicroscope,
  
  FaPaperPlane,
  
  FaExclamationTriangle,
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
           Our Products
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
            Reliable performance and luxurious quality in every product we offer.
          </p>
        <div className="mt-8 flex items-center justify-center gap-3">
  <button
    onClick={() => {
      const el = document.getElementById("cleaning");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-blue-800 font-semibold shadow hover:bg-white"
  >
    Explore Cleaning
  </button>

  <button
    onClick={() => {
      const el = document.getElementById("chemicals");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-blue-800 font-semibold shadow hover:bg-white"
  >
    Explore Chemicals
  </button>
</div>
        </div>
        {/* Decorative dots */}
        <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      </section>



      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-20">
        {/* Cosmetics */}
         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
    Our Cosmetics
  </h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              image: "/images/face wash.png",
              title: "Jonis Face Wash",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaTint className="text-blue-600" />
                  <span className="text-gray-800">Purity, redefined</span>
                </div>
              ),
              description:
                "A gentle daily cleanser suited to warm, humid climates. Removes excess oil and impurities while maintaining balance for a fresh, radiant look.",
              icon: FaTint,
              accent: "text-blue-600",
              badge: "Best Seller",
            },
            {
              image: "/images/powder.png",
              title: "Jonis Powder",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaPumpSoap className="text-rose-500" />
                  <span className="text-gray-800">Hydration, held close</span>
                </div>
              ),
              description:
                "Silky, fast-absorbing moisture for dry or sun-exposed skin. Soft, smooth, and lightly scented — perfect for the tropics.",
              icon: FaPumpSoap,
              accent: "text-rose-500",
              badge: "New",
            },
            {
              image: "/images/shampoo.png",
              title: "Jonis Shampoo",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <GiWaterBottle className="text-cyan-600" />
                  <span className="text-gray-800">Clean. Strong. Luminous</span>
                </div>
              ),
              description:
                "Gently lifts buildup while nourishing roots. Hair feels lighter and looks shinier — from city humidity to hill country cool.",
              icon: GiWaterBottle,
              accent: "text-cyan-600",
            },
            {
              image: "/images/hire oil.png",
              title: "Jonis Hair Oil",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaOilCan className="text-amber-600" />
                  <span className="text-gray-800">A tradition reimagined</span>
                </div>
              ),
              description:
                "Lightweight oil that strengthens hair, revitalizes the scalp, and supports natural growth — honoring heritage with every drop.",
              icon: FaOilCan,
              accent: "text-amber-600",
            },
            {
              image: "/images/nailpolish.png",
              title: "Jonis Nail Polish Remover",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaPaintBrush className="text-fuchsia-600" />
                  <span className="text-gray-800">Clean removal. Soft finish</span>
                </div>
              ),
              description:
                "Erases color swiftly without excessive dryness. No residue — just clean nails ready for their next look.",
              icon: FaPaintBrush,
              accent: "text-fuchsia-600",
            },
            {
              image: "/images/body wash 01.png",
              title: "Jonis Body Wash",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaBath className="text-violet-600" />
                  <span className="text-gray-800">Pure cleanse. Silky touch</span>
                </div>
              ),
              description:
                "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
              icon: FaBath,
              accent: "text-violet-600",
            },
            {
              image: "/images/body wash 02.png",
              title: "Jonis Body Wash",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaBath className="text-violet-600" />
                  <span className="text-gray-800">Pure cleanse. Silky touch</span>
                </div>
              ),
              description:
                "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
              icon: FaBath,
              accent: "text-violet-600",
            },
            {
              image: "/images/body wash 03.png",
              title: "Jonis Body Wash",
              subtitle: (
                <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                  <FaBath className="text-violet-600" />
                  <span className="text-gray-800">Pure cleanse. Silky touch</span>
                </div>
              ),
              description:
                "Refreshing and indulgent — cleanses while keeping skin hydrated and soft. No tightness, no dullness — just glow.",
              icon: FaBath,
              accent: "text-violet-600",
            },
          ].map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
</section>


 <section id="cleaning" className="py-12 px-4 sm:px-6 lg:px-20">
   <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
    Our Cleaning Essentials
  </h2>
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


 <section id="chemicals" className="py-12 px-4 sm:px-6 lg:px-20">
   <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
    Our Industrial Chemicals
  </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
           {[
             {
               image: "/images/pro1.jpg",
               title: "Hydrogen Peroxide 50%",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Purity. Power. Protection.</span>
                 </div>
               ),
               description:
                 "Versatile oxidizer and disinfectant for high-performance cleaning and bleaching in industrial and lab use.",
               icon: FaFlask,
               accent: "text-cyan-600",
               badge: "50%",
             },
             {
               image: "/images/pro2.jpg",
               title: "Soda Ash Light",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Brighten. Balance. Boost.</span>
                 </div>
               ),
               description:
                 "Premium alkaline compound for pH control, water treatment, and glass production with consistent quality.",
               icon: FaFlask,
               accent: "text-blue-600",
               badge: "Light",
             },
             {
               image: "/images/pro3.jpg",
               title: "Sodium Sulfate",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Stable. Strong. Safe.</span>
                 </div>
               ),
               description:
                 "Reliable for detergents, glass, and textiles. Uniform granules and purity ensure optimal performance.",
               icon: FaAtom,
               accent: "text-emerald-600",
               badge: "Tech Grade",
             },
             {
               image: "/images/pro4.jpg",
               title: "Tonsil Optimum 230 FF",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Absorb. Enhance. Protect.</span>
                 </div>
               ),
               description:
                 "High-quality absorbent clay for filtration, purification, and decolorization. Consistent and efficient.",
               icon: FaFlask,
               accent: "text-indigo-600",
             },
             {
               image: "/images/pro5.jpg",
               title: "Calcium Hypochlorite, Hydrated",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Clean. Clear. Confident.</span>
                 </div>
               ),
               description:
                 "Potent disinfectant for water treatment. Hydrated form improves safety and long-lasting effectiveness.",
               icon: FaFlask,
               accent: "text-amber-600",
               badge: "Hydrated",
             },
             {
               image: "/images/pro6.jpg",
               title: "Trichloroisocyanuric Acid",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Purify. Protect. Perform.</span>
                 </div>
               ),
               description:
                 "Reliable sanitation for pools and industrial systems with high chlorine content for cleanliness.",
               icon: FaAtom,
               accent: "text-rose-600",
             },
             {
               image: "/images/pro7.jpg",
               title: "Trichloroisocyanuric Acid 90%",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Concentrated. Controlled. Clean.</span>
                 </div>
               ),
               description:
                 "Concentrated grade for maximum efficiency in disinfection and bleaching across industrial use.",
               icon: FaFlask,
               accent: "text-sky-600",
               badge: "90%",
             },
             {
               image: "/images/pro8.jpg",
               title: "Aluminium Sulphate",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Clarify. Coagulate. Care.</span>
                 </div>
               ),
               description:
                 "Essential for water purification and paper manufacturing — highly soluble and consistent.",
               icon: FaFlask,
               accent: "text-fuchsia-600",
             },
             {
               image: "/images/pro11.jpg",
               title: "Nitric Acid",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Powerful. Precise. Pure.</span>
                 </div>
               ),
               description:
                 "Reactive acid for fertilizers, explosives, and metal processing with premium purity.",
               icon: FaAtom,
               accent: "text-red-600",
               badge: "Concentrated",
             },
             {
               image: "/images/pro9.jpg",
               title: "Magnesium Sulfate Heptahydrate",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Nourish. Balance. Strengthen.</span>
                 </div>
               ),
               description:
                 "Epsom salt for agriculture, healthcare, and industry — high purity for effective application.",
               icon: FaFlask,
               accent: "text-emerald-600",
               badge: "Heptahydrate",
             },
             {
               image: "/images/1000152735.jpg",
               title: "Hydrated Lime",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Neutralize. Strengthen. Protect.</span>
                 </div>
               ),
               description:
                 "Industrial alkaline for water treatment, soil stabilization, and chemical manufacturing.",
               icon: FaFlask,
               accent: "text-lime-600",
               badge: "Alkaline",
             },
             {
               image: "/images/pro12.jpg",
               title: "Caustic Soda Flakes",
               subtitle: (
                 <div className="flex items-center justify-center gap-2 font-bold font-serif text-yellow-500">
                   <FaMicroscope />
                   <span className="text-gray-800">Refine. React. Resolve.</span>
                 </div>
               ),
               description:
                 "Powerful alkaline for processing, soap making, and water treatment — high purity and solubility.",
               icon: FaAtom,
               accent: "text-blue-700",
               badge: "High Purity",
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