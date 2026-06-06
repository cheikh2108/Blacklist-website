"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "À Propos", href: "#about", num: "01" },
  { label: "Menu", href: "#menu", num: "02" },
  { label: "Galerie", href: "#gallery", num: "03" },
  { label: "Événements", href: "#events", num: "04" },
  { label: "Réservation", href: "#reservation", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${
          isScrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center"
          >
            <Image
              src="/images/logo-blacklist.png"
              alt="Blacklist Dakar"
              width={140}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] flex flex-col gap-1.5 w-8 h-6 justify-center"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block w-full h-px bg-cream origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-3/4 h-px bg-gold origin-center"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block w-full h-px bg-cream origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-black flex items-center justify-center overflow-hidden"
          >
            {/* Background image */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-bordeaux/30 via-transparent to-gold/10" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
              {/* Links */}
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="group flex items-baseline gap-4 py-2 w-full text-left"
                    >
                      <span className="font-inter text-xs text-gold/50 tracking-widest w-6">{link.num}</span>
                      <span className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-cream group-hover:text-gold transition-colors duration-300 tracking-wide">
                        {link.label}
                      </span>
                    </button>
                    {i < navLinks.length - 1 && (
                      <div className="ml-10 h-px bg-white/5" />
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Right side info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hidden md:flex flex-col gap-10"
              >
                <div>
                  <p className="font-inter text-xs text-gold/60 tracking-[0.3em] uppercase mb-3">Localisation</p>
                  <p className="font-cormorant text-2xl text-cream font-light">Dakar, Sénégal</p>
                </div>
                <div>
                  <p className="font-inter text-xs text-gold/60 tracking-[0.3em] uppercase mb-3">Réservations</p>
                  <a
                    href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://wa.link/4c0t55"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cormorant text-2xl text-cream font-light hover:text-gold transition-colors"
                  >
                    Via WhatsApp
                  </a>
                </div>
                <div>
                  <p className="font-inter text-xs text-gold/60 tracking-[0.3em] uppercase mb-3">Concept</p>
                  <p className="font-cormorant text-xl text-cream/70 font-light italic">
                    Restaurant • Lounge • Rooftop
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-gold/40 to-transparent" />

                <p className="font-inter text-xs text-white/20 tracking-widest uppercase">
                  &copy; 2024 Blacklist Dakar
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
