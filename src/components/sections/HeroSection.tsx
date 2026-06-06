"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { LINKS } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "BLACKLIST";

const CHAR_GRADIENT = {
  backgroundImage:
    "linear-gradient(135deg, #D4B96A 0%, #F0DC9A 30%, #FFFBE8 50%, #F0DC9A 70%, #C9A84C 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

interface HeroSectionProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Parallax + overlay — indépendant du preloader
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Parallax vidéo — désactivé sur mobile/touch (inutile + cause des glitches)
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (videoRef.current && !isTouch) {
      gsap.to(videoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }

    gsap.to(overlayRef.current, {
      opacity: 0.85,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "center top", scrub: true },
    });

    // Pose l'état initial invisible
    const titleEl = titleRef.current;
    if (titleEl) {
      const chars = titleEl.querySelectorAll<HTMLElement>(".char");
      gsap.set(chars, { y: 60, opacity: 0 });
    }
    gsap.set([locationRef.current, taglineRef.current, ctaRef.current], { y: 20, opacity: 0 });
    gsap.set(dividerRef.current, { scaleX: 0, opacity: 0, transformOrigin: "center" });
    gsap.set(scrollIndicatorRef.current, { opacity: 0 });
  }, []);

  // Déclenche l'animation d'entrée quand le preloader est terminé
  useEffect(() => {
    if (!isLoaded || hasAnimated.current) return;
    hasAnimated.current = true;

    const titleEl = titleRef.current;
    if (!titleEl) return;

    const chars = titleEl.querySelectorAll<HTMLElement>(".char");

    const tl = gsap.timeline({ delay: 0.15 });

    tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.07,
        ease: "power3.out",
      })
      .to(dividerRef.current, {
        scaleX: 1, opacity: 1, duration: 0.7, ease: "expo.out",
      }, "-=0.4")
      .to(taglineRef.current, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      }, "-=0.4")
      .to(locationRef.current, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      }, "-=0.5")
      .to(ctaRef.current, {
        y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      }, "-=0.4")
      .to(scrollIndicatorRef.current, {
        opacity: 1, duration: 0.8,
      }, "-=0.2");

    // Bounce scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 8, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2,
    });
  }, [isLoaded]);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "none" }}
      >
        {/* WebM en priorité (2-3x plus léger), MP4 en fallback */}
        <source src="/videos/video-hero-section.webm" type="video/webm" />
        <source src="/videos/video-hero-section.mp4" type="video/mp4" />
      </video>

      {/* Overlay global — assombrit la vidéo pour la lisibilité */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ opacity: 0.65, background: "rgba(0,0,0,0.45)" }}
      />

      {/* Vignette — bords noirs pour délimiter le contenu */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Gradient haut — transition propre vers la nav */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }}
      />

      {/* Gradient bas — délimitation vers la section suivante */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Title — DM Serif Display, gradient or métallique */}
        <h1
          ref={titleRef}
          className="font-dm-serif uppercase leading-none select-none hero-title"
          style={{ fontWeight: 400 }}
        >
          {TITLE.split("").map((char, i) => (
            <span key={i} className="char inline-block" style={CHAR_GRADIENT}>
              {char}
            </span>
          ))}
        </h1>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-px w-36 mt-7 mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        />
        {/* Tagline — Cormorant italic, léger */}
        <p
          ref={taglineRef}
          className="font-cormorant text-lg md:text-2xl font-light italic tracking-[0.18em]"
          style={{ color: "rgba(245,240,232,0.6)" }}
        >
          Restaurant &bull; Lounge &bull; Rooftop
        </p>

        {/* Location */}
        <p
          ref={locationRef}
          className="font-inter text-[10px] uppercase mt-5 tracking-[0.55em]"
          style={{ color: "#C9A84C" }}
        >
          Dakar, Sénégal
        </p>

        {/* CTA */}
        <motion.a
          ref={ctaRef}
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="mt-10 px-10 py-4 border font-inter text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:bg-gold hover:text-black"
          style={{ borderColor: "rgba(201,168,76,0.55)", color: "rgba(245,240,232,0.6)" }}
        >
          Réserver une table
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-inter text-[9px] tracking-[0.4em] uppercase"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.55), transparent)" }}
        />
      </div>

      {/* Corner deco */}
      <div
        className="absolute bottom-8 right-8 md:right-12 font-inter text-[9px] tracking-widest uppercase rotate-90 origin-bottom-right"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        Est. Dakar
      </div>
    </section>
  );
}
