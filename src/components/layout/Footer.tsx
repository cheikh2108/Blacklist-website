"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div>
            <p className="font-cormorant text-3xl tracking-[0.3em] text-cream uppercase font-light">Blacklist</p>
            <p className="font-inter text-xs tracking-[0.3em] text-gold/60 mt-2 uppercase">
              Restaurant · Lounge · Rooftop
            </p>
          </div>

          {/* Center */}
          <div className="text-center hidden md:block">
            <p className="font-cormorant text-lg text-white/20 italic font-light">
              "Une expérience au-delà du repas"
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://wa.link/4c0t55"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs tracking-[0.3em] text-white/40 hover:text-gold uppercase transition-colors"
            >
              Réservation
            </a>
            <a
              href="https://www.instagram.com/blacklistdakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs tracking-[0.3em] text-white/40 hover:text-gold uppercase transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/15 tracking-widest">
            &copy; {new Date().getFullYear()} Blacklist Dakar. Tous droits réservés.
          </p>
          <p className="font-inter text-xs text-white/10 tracking-widest">
            Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}
