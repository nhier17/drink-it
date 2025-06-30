"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  useGSAP(() => {
const navTween = gsap.timeline({
    scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
    },
});

navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
    backgroundColor: '#00000050',
    backgroundFilter: 'blur(10px)',
    duration: 1,
    ease: 'power1.inOut'
});
  }, []);

  return (
    <nav>
        <div>
            <Link href="/" className="flex items-center gap-2 link">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <p>Drink It</p>
            </Link>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <Link href={`#${link.id}`}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar