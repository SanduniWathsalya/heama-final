"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward, FaGlobe, FaFlask, FaCheckCircle } from "react-icons/fa";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-12" data-aos="fade-up">
          Our Achievements
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            data-aos="fade-up"
          >
            <FaAward className="text-4xl text-blue-600 mb-3" />
            <span className="text-4xl font-bold text-blue-900">
              {startCount && <CountUp end={30} duration={2} />}+
            </span>
            <p className="mt-2 text-gray-700 text-sm">Years of Excellence</p>
          </div>

          {/* Stat 2 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaGlobe className="text-4xl text-blue-600 mb-3" />
            <span className="text-4xl font-bold text-blue-900">
              {startCount && <CountUp end={50} duration={2} />}+
            </span>
            <p className="mt-2 text-gray-700 text-sm">Global Clients</p>
          </div>

          {/* Stat 3 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaFlask className="text-4xl text-blue-600 mb-3" />
            <span className="text-4xl font-bold text-blue-900">
              {startCount && <CountUp end={10000} duration={2} separator="," />}+
            </span>
            <p className="mt-2 text-gray-700 text-sm">Tons Produced Yearly</p>
          </div>

          {/* Stat 4 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaCheckCircle className="text-4xl text-blue-600 mb-3" />
            <span className="text-4xl font-bold text-blue-900">
              {startCount && <CountUp end={100} duration={2} />}%
            </span>
            <p className="mt-2 text-gray-700 text-sm">Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
