"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Hero from "@/components/features/Hero";
import Cocktails from "@/components/features/Cocktails";
import About from "@/components/features/About";
import Art from "@/components/features/Art";
import Menu from "@/components/features/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <section>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </section>
  );
}
