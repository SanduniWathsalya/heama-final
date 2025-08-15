"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const slidesDesktop = [
  { image: "/images/heri01.png", alt: "Modern lab with chemical containers" },
  { image: "/images/heri02.png", alt: "Blue liquid and lab equipment" },
  { image: "/images/hero03.png", alt: "Industrial containers and storage" },
];

const slidesMobile = [
  { image: "/images/heri01.png", alt: "Modern lab with chemical containers" },
  { image: "/images/mobile02.png", alt: "Blue liquid and lab equipment" },
  { image: "/images/hero03.png", alt: "Industrial containers and storage" },
];

// Background image visible behind mobile slider
const mobileBgImage = "/images/hero-bg.jpg";

const AUTO_DELAY = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef(null);
  const mobileSliderRef = useRef(null);
  const pointerStartX = useRef(null);
  const prmRef = useRef(false); // keep a ref so we don't need to add PRM to every deps array

  const slides = isMobile ? slidesMobile : slidesDesktop;
  const total = isMobile ? slidesMobile.length : slidesDesktop.length;

  // Detect mobile and reduced motion
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPRM = (m) => {
      setPrefersReducedMotion(m.matches);
      prmRef.current = m.matches;
    };
    applyPRM(mq);
    const onMQ = (e) => applyPRM(e);
    if (mq.addEventListener) mq.addEventListener("change", onMQ);
    else mq.addListener(onMQ);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mq.removeEventListener) mq.removeEventListener("change", onMQ);
      else mq.removeListener(onMQ);
    };
  }, []);

  // Slide controls
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with visibility + pause handling
  useEffect(() => {
    if (prefersReducedMotion) return;

    let timer;
    const start = () => {
      clearInterval(timer);
      if (!isPaused) timer = setInterval(nextSlide, AUTO_DELAY);
    };
    const stop = () => clearInterval(timer);

    start();

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isPaused, nextSlide, prefersReducedMotion]); // constant length

  // Scroll mobile slider to current (no page jump)
  useEffect(() => {
    if (!isMobile || !mobileSliderRef.current) return;

    const container = mobileSliderRef.current;
    const slideEl = container.querySelector(`[data-idx="${current}"]`);
    if (!slideEl) return;

    const targetLeft =
      slideEl.getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      container.scrollLeft;

    container.scrollTo({
      left: targetLeft,
      behavior: prmRef.current ? "auto" : "smooth",
    });
  }, [current, isMobile]); // constant length

  // Preload next image
  useEffect(() => {
    const arr = isMobile ? slidesMobile : slidesDesktop;
    const nextIdx = (current + 1) % arr.length;
    const img = new Image();
    img.src = arr[nextIdx].image;
  }, [current, isMobile]); // constant length

  // Swipe gestures (desktop + mobile)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      pointerStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? null;
    };
    const onPointerUp = (e) => {
      const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? null;
      if (pointerStartX.current == null || endX == null) return;
      const dx = endX - pointerStartX.current;
      if (Math.abs(dx) > 50) {
        dx < 0 ? nextSlide() : prevSlide();
      }
      pointerStartX.current = null;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("touchstart", onPointerDown, { passive: true });
    el.addEventListener("touchend", onPointerUp, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("touchstart", onPointerDown);
      el.removeEventListener("touchend", onPointerUp);
    };
  }, [nextSlide, prevSlide]); // constant length

  // Keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onKeyDown={onKeyDown}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(false)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Desktop sliding backgrounds */}
      <div
        className={`hidden sm:flex absolute inset-0 w-full h-full flex transition-transform ${
          prefersReducedMotion ? "" : "duration-[1000ms] ease-out"
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-hidden="true"
      >
        {slidesDesktop.map((slide, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.5)_100%)]" />
          </div>
        ))}
      </div>

      {/* Mobile background behind content */}
      <div
        className="sm:hidden absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${mobileBgImage})` }}
        aria-hidden="true"
      />
      <div className="sm:hidden absolute inset-0 bg-black/80 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center sm:items-start justify-center h-full w-full text-center sm:text-left text-white px-4 sm:px-8 md:px-24 mt-4 sm:mt-0">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 ring-1 ring-white/20 backdrop-blur">
            ISO 9001:2015 Certified <span aria-hidden>•</span> Since 1999
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-4xm font-extrabold mb-4 drop-shadow-xl leading-tight">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
            Heama Chemicals
          </span>
        </h1>

        {/* Mobile sliding images (scroll-snap) */}
        <div
          ref={mobileSliderRef}
          className="sm:hidden flex gap-4 overflow-x-auto no-scrollbar mb-6 w-full max-w-2xl snap-x snap-mandatory scroll-smooth overscroll-x-contain overscroll-y-none touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          aria-label="Featured images"
        >
          {slidesMobile.map((slide, idx) => (
            <div
              key={idx}
              data-idx={idx}
              className="flex-shrink-0 w-full h-40 rounded-xl bg-center bg-cover relative snap-start"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.alt}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base md:text-lg mb-8 drop-shadow-lg font-inter font-medium max-w-2xl text-justify sm:text-left">
          {isMobile ? (
            <>
              Heama Chemicals has been a trusted Sri Lankan supplier of industrial and specialty
              chemicals since 1999, serving industries from cosmetics and water treatment to
              construction, textiles, and research. As an ISO 9001:2015 certified company, we provide
              safe, reliable, and sustainable solutions with expert support and a growing product
              range.
            </>
          ) : (
            <>
              Heama Chemicals is a trusted Sri Lankan chemical supplier delivering high-quality
              industrial and specialty chemicals since 1999. With a reputation built on reliability,
              innovation, and technical excellence, we proudly serve a wide range of industries
              including cosmetics, water treatment, construction, textiles, and laboratory research.
              <br />
              <br />
              As an ISO 9001:2015 certified company, we are committed to supplying safe, consistent,
              and sustainable chemical solutions tailored to the needs of modern industries. Our expert
              team and expanding product portfolio ensure that every client receives value,
              performance, and peace of mind.
              <br />
              <br />
              Whether you&apos;re a manufacturer, researcher, or industrial service provider, Heama
              Chemicals is your reliable partner for advanced chemical solutions — locally sourced,
              globally trusted.
            </>
          )}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="#products"
            className="inline-flex items-center px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 ring-1 ring-white/20 backdrop-blur"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Dots + progress + arrows */}
      <div className="absolute bottom-6 left-0 right-0 z-[3] flex items-center justify-center">
        {!prefersReducedMotion && (
          <div className="absolute -top-2 left-0 right-0 mx-auto w-[80%] sm:w-[60%] h-0.5 bg-white/20 overflow-hidden rounded">
            <div key={current} className="h-full bg-white/90 origin-left animate-progress" />
          </div>
        )}

        <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-black/30 backdrop-blur ring-1 ring-white/20">
          {slides.map((_, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active ? "true" : "false"}
              />
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-0 z-[3] hidden sm:block">
        <div className="absolute inset-y-0 left-0 flex items-center px-4">
          <button
            onClick={prevSlide}
            className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/55 ring-1 ring-white/20 text-white transition"
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-4">
          <button
            onClick={nextSlide}
            className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/55 ring-1 ring-white/20 text-white transition"
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress ${AUTO_DELAY}ms linear forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-progress {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}