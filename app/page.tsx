"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Hero from "@/components/features/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="h-dvh bg-orange-50" />
    </section>
  );
}
