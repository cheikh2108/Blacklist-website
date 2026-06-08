"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: "3", label: "Expériences", sub: "Restaurant · Lounge · Rooftop" },
  { num: "2", label: "Cuisines", sub: "Libanaise & Européenne" },
  { num: "∞", label: "Moments", sub: "Inoubliables" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Image reveal
    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: { trigger: imageRef.current, start: "top 75%", once: true },
      }
    );

    // Text reveal
    const textEls = textRef.current?.querySelectorAll(".reveal-text");
    if (textEls) {
      gsap.fromTo(
        textEls,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: { trigger: textRef.current, start: "top 70%", once: true },
        }
      );
    }

    // Stats counter animation
    const counterEls = countersRef.current?.querySelectorAll(".stat-num");
    if (counterEls) {
      counterEls.forEach((el) => {
        const target = el.getAttribute("data-target");
        if (target && !isNaN(Number(target))) {
          gsap.fromTo(
            el,
            { innerHTML: 0 },
            {
              innerHTML: target,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              scrollTrigger: { trigger: countersRef.current, start: "top 80%", once: true },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image side */}
          <div ref={imageRef} className="relative aspect-[3/4] overflow-hidden" style={{ clipPath: "inset(0 100% 0 0)" }}>
            <div className="w-full h-full bg-warm-gray relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Restaurant Blacklist Dakar"
                className="w-full h-full object-cover"
              />
              {/* Gold accent line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>

            {/* Floating tag */}
            <div className="absolute bottom-8 -right-4 md:-right-8 bg-black border border-gold/20 px-6 py-4">
              <p className="font-inter text-xs tracking-[0.3em] text-gold uppercase">Dakar</p>
              <p className="font-cormorant text-2xl text-cream font-light mt-1">Sénégal</p>
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef} className="flex flex-col gap-10">
            <div className="overflow-hidden">
              <p className="reveal-text font-inter text-xs tracking-[0.4em] text-gold uppercase mb-6">
                Notre Histoire
              </p>
            </div>

            <div className="overflow-hidden">
              <h2 className="reveal-text font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight">
                Une expérience<br />
                <em className="text-gold">au-delà</em><br />
                du repas
              </h2>
            </div>

            <div className="h-px bg-gradient-to-r from-gold/40 to-transparent" />

            <div className="overflow-hidden">
              <p className="reveal-text font-cormorant text-xl text-cream/60 font-light leading-relaxed italic">
                "Blacklist est né de la conviction qu'un repas peut être une aventure.
                Au cœur de Dakar, nous avons créé un espace où la gastronomie libanaise
                rencontre les saveurs européennes, le tout dans une atmosphère de luxe décontracté."
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="reveal-text font-inter text-sm text-white/40 leading-relaxed tracking-wide">
                Du restaurant au lounge, jusqu'au rooftop avec vue panoramique sur la ville,
                chaque espace de Blacklist a été pensé pour offrir une expérience sensorielle unique.
              </p>
            </div>

            <motion.a
              href="#menu"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-4 font-inter text-xs tracking-[0.3em] text-gold uppercase w-fit"
            >
              Découvrir le menu
              <span className="w-12 h-px bg-gold" />
            </motion.a>
          </div>
        </div>

        {/* Stats */}
        <div ref={countersRef} className="mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="bg-black px-6 py-10 text-center">
              <p
                className="stat-num font-cormorant text-6xl md:text-8xl font-light text-gold leading-none"
                data-target={isNaN(Number(stat.num)) ? undefined : stat.num}
              >
                {isNaN(Number(stat.num)) ? stat.num : "0"}
              </p>
              <p className="font-inter text-xs tracking-[0.3em] text-cream/50 uppercase mt-3">{stat.label}</p>
              <p className="font-cormorant text-sm text-white/30 italic mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
