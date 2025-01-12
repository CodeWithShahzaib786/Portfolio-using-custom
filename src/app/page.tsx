"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize AOS only on the client-side
      AOS.init({
        easing: "ease-out-back",
        duration: 1200,
        delay: 100,
        mirror: true,
        anchorPlacement: "bottom-bottom",
        offset: 160,
      });
      AOS.refresh();
    }
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}


