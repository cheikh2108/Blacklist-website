"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { LINKS } from "@/lib/config";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const featuredItems = [
  {
    name: "Filet de Bœuf Signature",
    desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
    price: "12 000",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=75",
    tag: "Plat",
  },
  {
    name: "Souris d'Agneau Fondant",
    desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
    price: "18 000",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=75",
    tag: "Plat",
  },
  {
    name: "Burger Blacklist",
    desc: "Black Angus, cheddar fondu, oignons grillés, sauce forestière · Frites",
    price: "10 500",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=75",
    tag: "Burger",
  },
  {
    name: "Fondant au Chocolat",
    desc: "Cœur coulant chocolat ou caramel",
    price: "6 500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=75",
    tag: "Dessert",
  },
];

export function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    const cards = gridRef.current?.querySelectorAll(".menu-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          }
        );
      });
    }
  }, []);

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
            Nos incontournables — cuisine libanaise & européenne
          </p>
        </div>

        {/* 4 featured items */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {featuredItems.map((item, i) => (
            <motion.div
              key={i}
              className="menu-card group bg-charcoal overflow-hidden cursor-default"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-inter text-[9px] tracking-[0.25em] uppercase text-gold/80 bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cormorant text-xl text-cream font-light group-hover:text-gold transition-colors duration-300 leading-snug mb-2">
                  {item.name}
                </h3>
                <p className="font-inter text-xs text-white/40 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="font-cormorant text-lg text-gold font-light">
                    {item.price} <span className="text-xs">FCFA</span>
                  </p>
                  <div className="w-6 h-px bg-gold/30 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center flex flex-col items-center gap-6">
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
