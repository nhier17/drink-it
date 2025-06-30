"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { featureLists, goodLists } from "@/constants";

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    useGSAP(() => {
        const startValue = isMobile ? "top 20%" : "top top";

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start: startValue,
                end: "bottom center",
                scrub: true,
                pin: true,
            },
        });

        maskTimeline
        .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
        .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
        .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})

    }, []);

    return (
        <div id="art">
        <div className="container mx-auto h-full pt-20">
           <h2 className="will-fade">The ART</h2>
           
           <div className="content">
            <ul className="space-y-4 will-fade">
               {goodLists.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                   <Image src="/images/check.png" alt="check" width={20} height={20} />
                   <p>{feature}</p>
                </li>
               ))}
            </ul>
            
            <div className="cocktail-img">
               <img
                   src="/images/under-img.jpg"
                   alt="cocktail"
                   className="abs-center masked-img size-full object-contain"
               />
            </div>
            
            <ul className="space-y-4 will-fade">
               {featureLists.map((feature, index) => (
                <li key={index} className="flex items-center justify-start gap-2">
                   <Image src="/images/check.png" alt="check" width={20} height={20} />
                   <p className="md:w-fit w-60">{feature}</p>
                </li>
               ))}
            </ul>
           </div>
           
           <div className="masked-container">
            <h2 className="will-fade">Sip-Worthy Perfection</h2>
            <div id="masked-content">
               <h3>Made with Craft, Poured with Passion</h3>
               <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
            </div>
           </div>
        </div>
       </div>
    );
};

export default Art;
