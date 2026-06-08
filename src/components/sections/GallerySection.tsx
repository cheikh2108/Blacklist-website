"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { type: "image", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", span: "col-span-2 row-span-2", alt: "Ambiance lounge" },
  { type: "image", src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80", span: "col-span-1 row-span-1", alt: "Cocktail signature" },
  { type: "image", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", span: "col-span-1 row-span-1", alt: "Plat gastronomique" },
  { type: "image", src: "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=600&q=80", span: "col-span-1 row-span-2", alt: "Rooftop" },
  { type: "image", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", span: "col-span-2 row-span-1", alt: "Vue panoramique" },
  { type: "image", src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", span: "col-span-1 row-span-1", alt: "Bar" },
  { type: "image", src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80", span: "col-span-1 row-span-1", alt: "Cuisine" },
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
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
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
