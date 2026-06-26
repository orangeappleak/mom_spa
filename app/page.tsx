import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SectionTwo from "@/components/sections/SectionTwo"
import SectionThree from "@/components/sections/SectionThree"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="h-auto bg-black rounded-t-4xl overflow-hidden w-screen relative z-50">
        <SectionTwo />
        <SectionThree />
        <Footer />
      </section>

    </>
  );
}
