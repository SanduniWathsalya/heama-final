"use client";
import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We deliver accurate results with meticulous attention to detail in every project.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "Constantly pushing boundaries with cutting-edge research and advanced methodologies.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Building trust through transparency, ethical practices, and reliable partnerships.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage:
          "url('https://cgu-odisha.ac.in/wp-content/uploads/2024/03/2150365017-min.jpg')",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-blue-50/70 z-0" />

     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual card */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-200/60 via-emerald-200/60 to-cyan-200/60 blur-lg opacity-60 group-hover:opacity-90 transition duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white/70 backdrop-blur">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Chemical research team working in a laboratory"
                className="w-full h-100 md:h-[800px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              {/* Ribbon tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-blue-700 ring-1 ring-blue-200">
                  Trusted Expertise
                </span>
              </div>
              {/* Shine sweep */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3 animate-fade-in">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: "0.05s" }}>
              Science you can trust. Results you can measure.
            </h2>
            <p className="mt-4 text-gray-700 max-w-prose animate-fade-in" style={{ animationDelay: "0.12s" }}>
              We combine rigorous methodology with practical insight to deliver reliable outcomes.
              From research and development to quality assurance, we act as your partner in progress.
            </p>

            {/* Values */}
            <div className="mt-10 space-y-5">
              <h3 className="text-xl font-semibold text-gray-900 animate-fade-in" style={{ animationDelay: "0.18s" }}>
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="group/value relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 via-emerald-200/60 to-cyan-200/60 hover:from-blue-200/90 hover:via-emerald-200/90 hover:to-cyan-200/90 transition-colors duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.08 + 0.25}s` }}
                  >
                    <div className="rounded-2xl bg-white/90 backdrop-blur p-4 flex items-start gap-4 shadow-lg">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100 ring-1 ring-black/5">
                        <value.icon className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                    {/* Subtle glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/value:opacity-100 transition-opacity duration-300 bg-emerald-400/20 blur-md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Small stats / trust signals */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md animate-fade-in" style={{ animationDelay: "0.42s" }}>
              <div className="text-center rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-2xl font-extrabold text-gray-900">10+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
              <div className="text-center rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-2xl font-extrabold text-gray-900">120+</div>
                <div className="text-xs text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-black/5">
                <div className="text-2xl font-extrabold text-gray-900">98%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#products"
                className="inline-flex items-center px-5 py-3 rounded-full bg-white/80 backdrop-blur text-blue-700 hover:bg-white transition-colors ring-1 ring-blue-200"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Local animation styles */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .delay-3000 {
          animation-delay: 3s;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(15px, -10px) scale(1.05);
          }
          66% {
            transform: translate(-10px, 8px) scale(0.98);
          }
        }
      `}</style>
    </section>
  );
};

export default About;