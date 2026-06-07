"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { LINKS } from "@/lib/config";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/lib/menu-data";

gsap.registerPlugin(ScrollTrigger);

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("entrees");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", once: true },
      }
    );
  }, []);

  const activeItems = menuCategories.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <section ref={sectionRef} id="menu" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="font-inter text-xs tracking-[0.4em] text-gold uppercase mb-4">Notre Carte</p>
            <h2 className="font-cormorant text-6xl md:text-8xl font-light text-cream leading-none">
              Le Menu
            </h2>
          </div>
          <p className="font-cormorant text-xl text-white/40 font-light italic max-w-xs">
            Restaurant · Lounge · Rooftop — carte complète disponible sur place
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2 font-inter text-xs tracking-[0.25em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "border-gold text-gold bg-gold/5"
                  : "border-white/10 text-white/30 hover:border-white/30 hover:text-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
          >
            {activeItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-charcoal p-8 group hover:bg-warm-gray transition-colors duration-500 cursor-default"
                data-cursor="hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-cormorant text-2xl text-cream font-light group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-inter text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <p className="font-cormorant text-xl text-gold font-light shrink-0 mt-1">{item.price} <span className="text-sm">FCFA</span></p>
                </div>
                <div className="mt-4 h-px bg-white/5 group-hover:bg-gold/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <p className="font-cormorant text-xl text-white/30 italic">
            Carte complète disponible sur place · Suggestions du chef selon la saison
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 px-10 py-4 bg-gold text-black font-inter text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Réserver maintenant
            </motion.a>
            <Link href="/menu">
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.3em] text-gold/70 uppercase hover:text-gold transition-colors duration-300"
              >
                Voir la carte complète
                <span className="w-8 h-px bg-gold/70" />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
