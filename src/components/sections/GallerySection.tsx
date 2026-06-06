"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

// Gallery items — replace src with actual images/videos
const galleryItems = [
  { type: "image", src: "/images/gallery-1.jpg", span: "col-span-2 row-span-2", alt: "Ambiance lounge" },
  { type: "image", src: "/images/gallery-2.jpg", span: "col-span-1 row-span-1", alt: "Cocktail signature" },
  { type: "image", src: "/images/gallery-3.jpg", span: "col-span-1 row-span-1", alt: "Plat gastronomique" },
  { type: "video", src: "/videos/gallery-1.mp4", span: "col-span-1 row-span-2", alt: "Rooftop" },
  { type: "image", src: "/images/gallery-4.jpg", span: "col-span-2 row-span-1", alt: "Vue panoramique" },
  { type: "image", src: "/images/gallery-5.jpg", span: "col-span-1 row-span-1", alt: "Bar" },
  { type: "image", src: "/images/gallery-6.jpg", span: "col-span-1 row-span-1", alt: "Cuisine" },
];

export function GallerySection() {
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

    const items = gridRef.current?.querySelectorAll(".gallery-item");
    if (items) {
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="relative py-32 md:py-48 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <p className="font-inter text-xs tracking-[0.4em] text-gold uppercase mb-4">Nos Espaces</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-cormorant text-6xl md:text-8xl font-light text-cream leading-none">
              Galerie
            </h2>
            <p className="font-cormorant text-xl text-white/40 font-light italic max-w-sm">
              Restaurant, Lounge & Rooftop — trois univers, une seule adresse
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        {/* Gallery grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[220px]"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className={`gallery-item relative overflow-hidden bg-warm-gray group md:${item.span}`}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Media placeholder — replace with actual image/video */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, #111 0%, #${["1A1410","1A1015","141A10","10151A","1A1510","151A14"][parseInt(item.alt.charCodeAt(0).toString()) % 6]} 100%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-25 pointer-events-none">
                {item.type === "video" ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                )}
                <span className="font-inter text-[10px] tracking-[0.3em] text-gold uppercase">
                  {item.type === "video" ? "Vidéo" : "Photo"} à venir
                </span>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="font-cormorant text-lg text-cream font-light italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt}
                </p>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-px h-8 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
