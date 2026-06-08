"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LINKS } from "@/lib/config";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = contentRef.current?.querySelectorAll(".reveal");
    if (els) {
      gsap.fromTo(
        els,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 75%", once: true },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div ref={contentRef} className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <p className="reveal font-inter text-xs tracking-[0.4em] text-gold uppercase mb-6">Nous Trouver</p>
            <h2 className="reveal font-cormorant text-6xl md:text-7xl font-light text-cream leading-none mb-12">
              Contact
            </h2>
            <div className="h-px bg-gradient-to-r from-gold/40 to-transparent mb-12" />

            <div className="space-y-10">
              <div className="reveal">
                <p className="font-inter text-xs tracking-[0.3em] text-gold/60 uppercase mb-2">Adresse</p>
                <p className="font-cormorant text-xl text-cream font-light">Dakar, Sénégal</p>
                <p className="font-inter text-sm text-white/40 mt-1">Adresse exacte sur réservation</p>
              </div>

              <div className="reveal">
                <p className="font-inter text-xs tracking-[0.3em] text-gold/60 uppercase mb-2">Réservations</p>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cormorant text-xl text-cream font-light hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <div className="reveal">
                <p className="font-inter text-xs tracking-[0.3em] text-gold/60 uppercase mb-2">Instagram</p>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cormorant text-xl text-cream font-light hover:text-gold transition-colors"
                >
                  @blacklistdakar
                </a>
              </div>

              <div className="reveal">
                <p className="font-inter text-xs tracking-[0.3em] text-gold/60 uppercase mb-2">Horaires</p>
                <div className="space-y-1">
                  <p className="font-cormorant text-lg text-cream font-light">Lundi – Dimanche</p>
                  <p className="font-inter text-sm text-white/40">12h00 – 00h00</p>
                  <p className="font-inter text-sm text-white/40">Rooftop : 18h00 – 02h00 (Ven – Sam)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — social & CTA */}
          <div className="flex flex-col gap-12">
            <div className="reveal aspect-video relative overflow-hidden bg-warm-gray">
              <img
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=900&q=80"
                alt="Blacklist Dakar vue extérieure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-inter text-xs text-gold/70 tracking-widest uppercase">Restaurant • Lounge • Rooftop</p>
                <p className="font-cormorant text-2xl text-cream font-light">Dakar, Sénégal</p>
              </div>
            </div>

            <div className="reveal flex gap-4">
              <motion.a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex-1 py-4 bg-gold text-black font-inter text-xs tracking-[0.3em] uppercase text-center hover:bg-gold-light transition-colors"
              >
                WhatsApp
              </motion.a>
              <motion.a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex-1 py-4 border border-white/20 text-cream font-inter text-xs tracking-[0.3em] uppercase text-center hover:border-gold hover:text-gold transition-all"
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
