"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    // Parallax on video
    if (video) {
      gsap.to(video, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Overlay darkens on scroll
    gsap.to(overlayRef.current, {
      opacity: 0.85,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    });

    // Title chars animation
    const titleEl = titleRef.current;
    if (titleEl) {
      const chars = titleEl.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.04,
          ease: "power4.out",
          delay: 2.8, // after preloader
        }
      );
    }

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 3.4 }
    );

    gsap.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4 }
    );

    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const titleChars = "BLACKLIST".split("").map((char, i) => (
    <span key={i} className="char inline-block overflow-hidden">
      <span className="inline-block">{char}</span>
    </span>
  ));

  return (
    <section ref={sectionRef} id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/videos/hero.mp4"
      />

      {/* Gradient overlays */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"
        style={{ opacity: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-inter text-xs tracking-[0.5em] text-gold uppercase mb-8 opacity-0 animate-none"
          style={{ animation: "none" }}
          ref={subtitleRef}
        >
          Dakar, Sénégal
        </p>

        <h1
          ref={titleRef}
          className="font-cormorant text-[clamp(5rem,15vw,14rem)] font-light tracking-[0.2em] text-cream uppercase leading-none overflow-hidden"
        >
          {"BLACKLIST".split("").map((char, i) => (
            <span key={i} className="char inline-block">{char}</span>
          ))}
        </h1>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mt-8 mb-6 opacity-0"
          style={{ opacity: 1, transition: "opacity 1s 3.6s" }}
        />

        <p
          className="font-cormorant text-xl md:text-2xl font-light italic text-cream/70 tracking-wider"
          style={{ opacity: 0 }}
          ref={subtitleRef}
        >
          Restaurant &bull; Lounge &bull; Rooftop
        </p>

        <motion.a
          href="https://wa.link/4c0t55"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 px-10 py-4 border border-gold/60 font-inter text-xs tracking-[0.3em] text-gold uppercase hover:bg-gold hover:text-black transition-all duration-500"
        >
          Réserver une table
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="font-inter text-xs tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-8 right-8 md:right-12 font-inter text-xs text-white/20 tracking-widest uppercase rotate-90 origin-bottom-right">
        Est. Dakar
      </div>
    </section>
  );
}
