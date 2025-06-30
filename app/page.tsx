"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Hero from "@/components/features/Hero";
import Cocktails from "@/components/features/Cocktails";
import About from "@/components/features/About";
import Art from "@/components/features/Art";
import Menu from "@/components/features/Menu";
import Contact from "@/components/features/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
