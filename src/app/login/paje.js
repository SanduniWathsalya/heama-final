"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFlask } from "react-icons/fa";

// Sample data
const products = [
  { id: 1, title: "Product 1", subtitle: "High quality", description: "Product description", image: "/images/sample1.jpg", category: "Chemical" },
  { id: 2, title: "Product 2", subtitle: "Best seller", description: "Product description", image: "/images/sample2.jpg", category: "Wash" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const sectionRefs = useRef([]);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? product.category === category : true)
  );

  // Animation when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gray-900 text-white">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-70"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl font-bold">Our Products</h1>
          <p className="mt-4 text-lg">Quality that speaks for itself</p>
        </motion.div>
      </section>

      {/* Content after hero with side spacing */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* Categories */}
        <section className="py-12" ref={(el) => (sectionRefs.current[0] = el)}>
          <h2 className="text-3xl font-bold mb-6">Categories</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setCategory("Chemical")}
              className={`px-4 py-2 border rounded ${
                category === "Chemical" ? "bg-gray-900 text-white" : ""
              }`}
            >
              Chemicals
            </button>
            <button
              onClick={() => setCategory("Wash")}
              className={`px-4 py-2 border rounded ${
                category === "Wash" ? "bg-gray-900 text-white" : ""
              }`}
            >
              Wash Products
            </button>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-6" ref={(el) => (sectionRefs.current[1] = el)}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </section>

        {/* Product Grid */}
        <section className="py-12" ref={(el) => (sectionRefs.current[2] = el)}>
          <h2 className="text-3xl font-bold mb-8">Our Chemicals</h2>
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(({ id, image, title, subtitle, description }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                    <p className="mt-2 text-gray-700">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
