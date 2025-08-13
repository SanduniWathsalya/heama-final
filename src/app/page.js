"use client";

import Image from "next/image";
import {
  FaFlask,
  FaSoap,
  FaLeaf,
  FaSprayCan,
  FaBath,
  FaTint,
  FaWater,
  FaPumpSoap,
  FaArrowDown,
  FaCar,
  FaToilet,
  FaAtom,
  FaOilCan,
  FaPaintBrush,
   FaMicroscope 
} from "react-icons/fa";

import {
  GiPerfumeBottle,
  GiWaterBottle,
} from "react-icons/gi";

import { useEffect, useState, useRef } from "react";


// Custom hook for fade-up on scroll
function useScrollFadeIn() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function ProductCard({ image, title, subtitle, description, icon: Icon }) {
  const [ref, isVisible] = useScrollFadeIn();

  return (
    <div
      ref={ref}
      className={`border border-gray-100 rounded-lg shadow overflow-hidden transition-opacity transition-transform duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Image Wrapper with Overlay */}
      <div className="relative rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-60"
        />
        {/* Black Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-center items-center text-center p-4">
          {/* Icon in Circle */}
          <div className="bg-white rounded-full p-3 mb-2">
            {Icon ? (
              <Icon className="text-green-500 text-xl" />
            ) : (
              <FaFlask className="text-green-500 text-xl" />
            )}
          </div>
          {/* Product Title */}
          <h4 className="text-white font-semibold text-xl">{title}</h4>
        </div>
      </div>

      {/* Subtitle between image and description */}
      {subtitle && <h5 className="mt-4 px-4 text-center">{subtitle}</h5>}

      {/* Description below */}
      <div className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  // Animate the big About and Products sections too
  const [aboutRef, aboutVisible] = useScrollFadeIn();
  const [productsRef, productsVisible] = useScrollFadeIn();
  const [chemicalsRef, chemicalsVisible] = useScrollFadeIn();
  

  return (
    <main className="relative bg-gradient-to-r from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative h-[500px] sm:h-[500px] w-full">
        <Image
          src="/images/3696093.jpg"
          alt="Hero"
          layout="fill"
          objectFit="fill"
          className="z-0 filter"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-70 pt-24 z-10 flex flex-col items-center justify-center text-black px-4 text-center">
          <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow">
              Our Products
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
              Our products are designed to deliver reliable performance and meet
              industry standards across cleaning, industrial, and specialty
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Prompt Section */}
      <div className="w-full flex flex-col items-center justify-center py-4 sm:py-6 relative z-20">
        <p className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-gray-700 animate-pulse">
          Click to see more
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() =>
              document
                .getElementById("our-products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            <FaPumpSoap className="text-white text-lg" />
            Our Products
          </button>

          <button
            onClick={() =>
              document
                .getElementById("our-chemicals")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-gray-200 text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 transition duration-300 transform hover:scale-105 will-change-transform animate-fade-in-up delay-300"
          >
            <FaFlask className="text-blue-700 text-lg" />
            Our Chemicals
          </button>
        </div>

        <div
          onClick={() =>
            document
              .getElementById("products-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer group relative"
        >
          <div className="flex flex-col items-center animate-bounce text-blue-700 text-2xl ">
            <FaArrowDown />
          </div>
        </div>
      </div>

       {/* About Section 1 */}
       {/* About Section Wrapper */}
<div className="relative bg-gray-50">
  {/* Background Image with Fixed Position */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{
      backgroundImage: "url('/images/jj.jpg')",
      backgroundAttachment: "fixed", // Locks background in place
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-16">
    {/* About Section 1 */}
    <div className="mb-12">
      <h2 className="text-4xl font-extrabold mb-4 text-center text-black">
        About Heama Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20">
        {/* Image on the left */}
        <div className="flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="About Heama Products"
            width={400}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text on the right */}
        <div>
          <p className="text-gray-800 text-lg">
            At Heama Chemicals, we believe every product should be more than just effective — it should be an experience. Our carefully curated range of premium-grade chemicals is formulated with uncompromising quality, precision, and safety in mind.
            Whether it’s cosmetic essentials for timeless beauty, household cleaning agents for an immaculate shine, or industrial solutions that power performance — each product is designed to deliver exceptional results with a touch of elegance.
          </p>
        </div>
      </div>
    

    {/* About Section 2 */}
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20 ">
        {/* Text on the left */}
         <div>
          <p className="text-gray-800 text-lg">
            We source only the finest raw materials, processed with advanced technology to ensure purity, consistency, and unmatched efficiency. From the silky texture of our cosmetic blends to the sparkling brilliance of our cleaning solutions, every drop reflects our commitment to perfection.
            With Heama Chemicals, you don’t just purchase products — you invest in quality you can trust, luxury you can feel, and results you can see.
          </p>
        </div>
        {/* Image on the right */}
        <div className="flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src="/images/WhatsApp Image 2025-07-15 at 14.13.13_8aac698b.jpg"
            alt="Image Two"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
       
      </div>
      </div>
    </div>
  </div>


      {/* Our Products Categories */}
      <div
        id="our-products"
        ref={productsRef}
        className={`mb-10 py-10 px-4 sm:px-6 lg:px-20 transition-opacity transition-transform duration-700 ease-out ${
          productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-5xl font-semibold mb-10 text-center glow-flash">
          Our Products
        </h2>

        {/* Cosmetics Section */}
        <h3 className="text-xl font-semibold mb-10 text-black flex items-center gap-2">
          <GiPerfumeBottle className="text-green-500" /> Cosmetics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              image: "/images/products.jpg",
              title: "Jonis Face Wash",
              subtitle: "Purity, redefined",
              description:
                "A gentle daily cleanser crafted to suit Sri Lankan skin in warm, humid climates. Removes excess oil and impurities while maintaining your skin’s natural balance. The result? A fresh, radiant look—effortless and elegant.",
              icon: FaTint,
            },
            {
              image: "/images/products.jpg",
              title: "Jonis Body Lotion",
              subtitle: "Hydration, held close",
              description:
                "Infused with deep-moisture agents ideal for dry or sun-exposed skin. This silky, fast-absorbing lotion is perfect for the tropical lifestyle—leaving skin soft, smooth, and lightly scented with refinement.",
              icon: FaPumpSoap,
            },
            {
              image: "/images/products.jpg",
              title: "Jonis Shampoo",
              subtitle: "Clean. Strong. Luminous",
              description:
                "Designed for the demands of island living, Jonis Shampoo gently lifts away buildup while nourishing roots. For hair that feels lighter, looks shinier, and moves with grace—whether in Colombo humidity or hill country cool.",
              icon: GiWaterBottle,
            },
            {
              image: "/images/products.jpg",
              title: "Jonis Hair Oil",
              subtitle: "A tradition reimagined",
              description:
                "Rooted in local care rituals, this lightweight oil strengthens hair, revitalizes the scalp, and supports natural growth. With every drop, it honors Sri Lankan heritage—bringing back lustre, one strand at a time.",
              icon: FaOilCan,
            },
            {
              image: "/images/products.jpg",
              title: "Jonis Nail Polish Remover",
              subtitle: "Clean removal. Soft finish",
              description:
                "Effective and elegant, this remover erases color swiftly while protecting your nails from harsh dryness. No residue. No compromise. Just clean nails, ready for their next look.",
              icon: FaPaintBrush,
            },
            {
              image: "/images/products.jpg",
              title: "Jonis Body Wash",
              subtitle: "Pure cleanse. Silky touch",
              description:
                "Refreshing and indulgent, this body wash gently cleanses while keeping your skin hydrated and soft. No tightness. No dullness. Just smooth, refreshed skin, ready to glow.",
              icon: FaBath,
            },
          ].map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              subtitle={
                <div className="flex items-center gap-2 font-bold font-serif text-yellow-400">
                  <FaBath />
                  <span className="text-gray-800">{product.subtitle}</span>
                </div>
              }
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>

        {/* Gray Horizontal Line */}
        <hr className="border-t border-gray-300 my-12 -mx-4 sm:-mx-6 lg:-mx-20" />

        {/* Cleaning Section */}
        <h3 className="text-xl font-semibold mb-10 mt-20 text-black flex items-center gap-2">
          <FaSprayCan className="text-green-500" /> Cleaning Essentials
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              image: "/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg",
              title: "Jonis Dishwash",
              subtitle: "Sparkling clean. Gentle on hands",
              description:
                "Effortlessly dissolves grease and food residue, leaving your dishes spotless and shining. Enriched with skin-friendly ingredients to protect your hands from dryness, so you can clean with care every time. Pure cleanliness, pure comfort.",
              icon: FaSoap,
             
            },
            {
              image: "/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg",
              title: " Jonis Car Shampoo",
              subtitle: "Shine that speaks luxury",
              description:
                "Gently yet powerfully cleanses your vehicle’s surface, removing dirt and grime without stripping away the paint’s natural gloss. Leaves a radiant, showroom finish with every wash — because your car deserves the best care on the road.",
              icon: FaCar,
              
            },
            {
              image: "/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg",
              title: "Jonis Air Freshener",
              subtitle: "Refresh. Revive. Relax",
              description:
                "Transforms any space with a burst of crisp, long-lasting fragrance that uplifts and soothes. Perfectly balanced scents create a calm and inviting atmosphere — turning every room into a breath of fresh air.",
              icon: FaLeaf,
              
            },
            {
              image: "/images/WhatsApp Image 2025-07-15 at 14.13.14_d48018e9.jpg",
              title: "Jonis Toilet Bowl Cleaner",
              subtitle: "Deep clean. Pure hygiene",
              description:
                "Powerfully eliminates stains, limescale, and bacteria, leaving your toilet bowl sparkling clean and fresh. Formulated for fast action and a lasting fresh scent, ensuring a hygienic environment with every flush.",
              icon: FaToilet,
              
            },
          ].map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              subtitle={
                <div className="flex items-center gap-2 font-bold font-serif text-yellow-400">
                 < FaTint/>
                 
                  <span className="text-gray-800">{product.subtitle}</span>
                </div>
              }
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>

      {/* Our Chemicals Section */}
      <div
        id="our-chemicals"
        ref={chemicalsRef}
        className={` py-10 px-4 sm:px-6 lg:px-20 transition-opacity transition-transform duration-700 ease-out ${
          chemicalsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-5xl font-semibold mb-20 text-center glow-flash">
          Our Chemicals
        </h2>



        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {[
    {
      image: "/images/pro1.jpg",
      title: "Hydrogen Peroxide 50%",
      subtitle: "Purity. Power. Protection.",
      description:
    "A versatile oxidizer and disinfectant, Hydrogen Peroxide 50% delivers high-performance cleaning and bleaching solutions. Ideal for industrial and laboratory use, ensuring superior efficacy and safety.",
     icon: FaFlask,
    
},

  {
    image: "/images/pro2.jpg",
    title: "Soda Ash Light",
    subtitle: "Brighten. Balance. Boost.",
    description:
      "Soda Ash Light is a premium-grade alkaline compound that enhances pH control, water treatment, and glass production. Its pure, consistent quality ensures flawless performance across applications.",
    icon: FaFlask,
    
  },
  {
    image: "/images/pro3.jpg",
    title: "Sodium Sulfate",
    subtitle: "Stable. Strong. Safe.",
    description:
      "Sodium Sulfate is a reliable chemical for detergents, glass, and textile industries. Its uniform granules and high purity deliver exceptional results, ensuring optimal industrial performance.",
    icon:   FaAtom,
  
  },
  {
    image: "/images/pro4.jpg",
    title: "Tonsil Optimum 230 FF",
    subtitle: "Absorb. Enhance. Protect.",
    description:
      "Tonsil Optimum 230 FF is a high-quality absorbent clay that optimizes filtration, purification, and decolorization processes. Trusted for its consistency and efficiency in industrial applications.",
    icon: FaFlask,
   
  },
  {
    image: "/images/pro5.jpg",
    title: "Calcium Hypochlorite, Hydrated",
    subtitle: "Clean. Clear. Confident.",
    description:
      "Calcium Hypochlorite is a potent disinfectant and sanitizer, delivering superior chlorine release for water treatment. Its hydrated form ensures safety and long-lasting effectiveness in all applications.",
    icon: FaFlask,
    
  },
  {
    image: "/images/pro6.jpg",
    title: "Trichloroisocyanuric Acid",
    subtitle: "Purify. Protect. Perform.",
    description:
      "Trichloroisocyanuric Acid provides reliable sanitation for swimming pools, industrial water systems, and bleaching processes. Its high chlorine content ensures unmatched cleanliness and performance.",
    icon:   FaAtom,
    
  },
  {
    image: "/images/pro7.jpg",
    title: "Trichloroisocyanuric Acid 90%",
    subtitle: "Concentrated. Controlled. Clean.",
    description:
      "This concentrated grade of Trichloroisocyanuric Acid offers maximum efficiency in disinfection and bleaching applications, providing superior protection and performance for industrial and commercial use.",
    icon: FaFlask,
    
  },
  {
    image: "/images/pro8.jpg",
    title: "Aluminium Sulphate",
    subtitle: "Clarify. Coagulate. Care.",
    description:
      "Aluminium Sulphate is essential for water purification, paper manufacturing, and industrial processing. Its high solubility and consistent quality make it indispensable for clean and clear results.",
    icon: FaFlask,
   
  },
  {
    image: "/images/pro10.jpg",
    title: "Nitric Acid",
    subtitle: "Powerful. Precise. Pure.",
    description:
      "Nitric Acid is a highly reactive acid used in fertilizers, explosives, and metal processing. With premium purity and controlled concentration, it ensures precise and effective chemical reactions.",
    icon:   FaAtom,
    
  },
  {
    image: "/images/pro9.jpg",
    title: "Magnesium Sulfate Heptahydrate",
    subtitle: "Nourish. Balance. Strengthen.",
    description:
      "Magnesium Sulfate Heptahydrate, also known as Epsom salt, provides essential minerals for agriculture, healthcare, and industrial uses. Its high purity guarantees effective and safe application.",
    icon: FaFlask,
   
  },
  {
    image: "/images/pro11.jpg",
    title: "Hydrated Lime",
    subtitle: "Neutralize. Strengthen. Protect.",
    description:
      "Hydrated Lime is an industrial-grade alkaline material for water treatment, soil stabilization, and chemical manufacturing. Its consistent quality ensures reliable and efficient performance.",
    icon: FaFlask,
    
  },
  {
    image: "/images/pro12.jpg",
    title: "Caustic Soda Flakes",
    subtitle: "Refine. React. Resolve.",
    description:
      "Caustic Soda Flakes offer powerful alkaline solutions for chemical processing, soap making, and water treatment. Their high purity and solubility make them indispensable in industrial applications.",
    icon:   FaAtom,
    
  },



          ].map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              subtitle={
                <div className="flex items-center gap-2 font-bold font-serif text-yellow-400">
                  <FaMicroscope />
                  <span className="text-gray-800">{product.subtitle}</span>
                </div>
              }
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
