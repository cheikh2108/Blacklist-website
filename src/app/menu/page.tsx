"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { menuCategories } from "@/lib/menu-data";
import { LINKS } from "@/lib/config";


export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("entrees");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    // Scroll vers le haut de la grille (juste sous la barre sticky)
    requestAnimationFrame(() => {
      if (gridRef.current) {
        const stickyHeight = tabsRef.current?.offsetHeight ?? 56;
        const top = gridRef.current.getBoundingClientRect().top + window.scrollY - stickyHeight - 24;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  };

  const activeItems = menuCategories.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <main className="min-h-screen bg-black">

      {/* Header */}
      <div
        className="relative pt-32 pb-20 px-6 md:px-12 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top center, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
        />
        <div ref={headerRef} className="container mx-auto max-w-6xl">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-inter text-[10px] tracking-[0.35em] uppercase mb-12 transition-colors duration-300"
            style={{ color: "rgba(201,168,76,0.6)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Retour
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-inter text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "#C9A84C" }}>
                Notre Carte
              </p>
              <h1
                className="font-dm-serif uppercase leading-none"
                style={{
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  fontWeight: 400,
                  backgroundImage: "linear-gradient(135deg, #D4B96A 0%, #F0DC9A 30%, #FFFBE8 50%, #F0DC9A 70%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Le Menu
              </h1>
            </div>
            <p className="font-cormorant text-xl font-light italic max-w-xs" style={{ color: "rgba(245,240,232,0.4)" }}>
              Restaurant · Lounge · Rooftop<br />Dakar, Sénégal
            </p>
          </div>
        </div>
      </div>

      {/* Sticky category tabs */}
      <div
        ref={tabsRef}
        className="sticky top-0 z-30 backdrop-blur-md border-b"
        style={{ background: "rgba(10,10,10,0.9)", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="container mx-auto max-w-6xl px-6 md:px-12 py-3">
          {/* Mobile : défilement horizontal silencieux — Desktop : wrap */}
          <div className="flex gap-2 overflow-x-auto md:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className="shrink-0 relative px-4 py-1.5 font-inter text-[10px] tracking-[0.3em] uppercase transition-all duration-300 border"
                style={{
                  color: activeCategory === cat.id ? "#C9A84C" : "rgba(255,255,255,0.3)",
                  borderColor: activeCategory === cat.id ? "rgba(201,168,76,0.6)" : "rgba(255,255,255,0.1)",
                  background: activeCategory === cat.id ? "rgba(201,168,76,0.05)" : "transparent",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items grid */}
      <div ref={gridRef} className="container mx-auto max-w-6xl px-6 md:px-12 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            {activeItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col"
                style={{ background: "#0A0A0A" }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay au hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                      opacity: hoveredItem === item.name ? 1 : 0.4,
                    }}
                  />
                  {/* Prix en surimpression */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="font-inter text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 backdrop-blur-sm"
                      style={{ background: "rgba(0,0,0,0.6)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      {item.price} FCFA
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="font-cormorant text-2xl font-light transition-colors duration-300 mb-2"
                    style={{ color: hoveredItem === item.name ? "#C9A84C" : "#F5F0E8" }}
                  >
                    {item.name}
                  </h3>
                  <p className="font-inter text-xs leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.desc}
                  </p>
                  <div
                    className="mt-4 h-px transition-colors duration-500"
                    style={{ background: hoveredItem === item.name ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.05)" }}
                  />
                </div>

                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-6 h-px transition-opacity duration-300"
                  style={{ background: "#C9A84C", opacity: hoveredItem === item.name ? 1 : 0 }}
                />
                <div
                  className="absolute top-0 left-0 w-px h-6 transition-opacity duration-300"
                  style={{ background: "#C9A84C", opacity: hoveredItem === item.name ? 1 : 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA bottom */}
        <div className="mt-24 flex flex-col items-center gap-6 text-center">
          <div className="h-px w-24" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
          <p className="font-cormorant text-xl font-light italic" style={{ color: "rgba(245,240,232,0.3)" }}>
            Carte disponible sur place · Prix en FCFA · Selon disponibilité
          </p>
          <motion.a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="mt-4 inline-flex items-center gap-4 px-12 py-4 font-inter text-[10px] tracking-[0.4em] uppercase transition-all duration-500"
            style={{ border: "1px solid rgba(201,168,76,0.55)", color: "#C9A84C" }}
          >
            Réserver une table
          </motion.a>
        </div>
      </div>
    </main>
  );
}
