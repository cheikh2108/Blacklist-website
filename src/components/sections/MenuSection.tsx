"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { LINKS } from "@/lib/config";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const menuCategories = [
  {
    id: "entrees",
    label: "Entrées",
    items: [
      { name: "Mezze Libanais", desc: "Houmous, moutabbal, fattoush, labneh aux herbes", price: "4 500" },
      { name: "Carpaccio de Saint-Jacques", desc: "Agrumes, huile d'argan, fleur de sel", price: "6 500" },
      { name: "Samboussek Truffe", desc: "Feuilleté croustillant, fromage, truffe noire", price: "5 500" },
      { name: "Tartare de Thon", desc: "Avocat, sésame toasté, gingembre mariné", price: "7 000" },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    items: [
      { name: "Côte de Bœuf Wagyu", desc: "Grillée au feu de bois, jus réduit au vin rouge, légumes de saison", price: "28 000" },
      { name: "Homard Rôti", desc: "Beurre noisette, citron confit, pommes dauphines", price: "32 000" },
      { name: "Agneau Charmoula", desc: "Carré d'agneau mariné aux épices libanaises, couscous royal", price: "22 000" },
      { name: "Daurade Royale", desc: "Cuit en croûte de sel, sauce vierge aux herbes", price: "18 000" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      { name: "Blacklist Signature", desc: "Whisky, miel de fleur d'oranger, sumac, eau pétillante", price: "8 500" },
      { name: "Rose du Désert", desc: "Gin, sirop de rose, litchi, prosecco", price: "7 500" },
      { name: "Nuit de Dakar", desc: "Rhum arrangé, jus de tamarin, citron vert, piment doux", price: "7 000" },
      { name: "Lounge Spritz", desc: "Aperol, champagne, orange sanguine, basilic", price: "9 000" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Baklava Revisité", desc: "Feuilles de brick, pistache de Syrie, miel d'acacia, glace fleur d'oranger", price: "5 500" },
      { name: "Coulant Chocolat Noir", desc: "70% Valrhona, crème glacée vanille Bourbon", price: "6 000" },
      { name: "Fruits Exotiques Flambés", desc: "Mangue, fruit de la passion, rhum vieux, sorbet coco", price: "5 000" },
    ],
  },
];

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
            Cuisine libanaise-européenne, produits frais, saveurs d'exception
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-0 border-b border-white/10 mb-16 overflow-x-auto">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 md:px-10 py-4 font-inter text-xs tracking-[0.3em] uppercase whitespace-nowrap transition-colors duration-300 ${
                activeCategory === cat.id ? "text-gold" : "text-white/30 hover:text-white/60"
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="menu-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
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
        <div className="mt-20 text-center">
          <p className="font-cormorant text-xl text-white/30 italic mb-8">
            Carte complète disponible sur place · Suggestions du chef selon la saison
          </p>
          <motion.a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-4 px-10 py-4 bg-gold text-black font-inter text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Réserver maintenant
          </motion.a>
        </div>
      </div>
    </section>
  );
}
