
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/Testimonials";
import OurProducts from "./components/our product";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <OurProducts />
      <About />
      {/* <WhyChooseUs /> */}
      <Products />

      {/* <TestimonialsSection /> */}
      <Contact />
      
    </main>
  );
}
