"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function ReservationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1.4, ease: "power4.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 75%", once: true },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="reservation" className="relative py-32 md:py-56 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/reservation-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div ref={contentRef} className="max-w-2xl mx-auto text-center">
          <p className="font-inter text-xs tracking-[0.4em] text-gold uppercase mb-6">
            Réservation
          </p>

          <h2 className="font-cormorant text-6xl md:text-8xl font-light text-cream leading-none mb-8">
            Vivez<br />
            <em className="text-gold">l'expérience</em>
          </h2>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />

          <p className="font-cormorant text-xl text-white/50 font-light italic leading-relaxed mb-16">
            Pour réserver votre table au restaurant, votre espace au lounge,
            ou organiser un événement privatif sur le rooftop,
            contactez-nous directement via WhatsApp.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-3 gap-px bg-white/5 mb-16">
            {[
              { label: "Restaurant", info: "Déjeuner & Dîner", sub: "Lun – Dim" },
              { label: "Lounge", info: "À partir de 18h", sub: "Mer – Dim" },
              { label: "Rooftop", info: "Coucher de soleil", sub: "Ven – Sam" },
            ].map((item, i) => (
              <div key={i} className="bg-black/60 px-4 py-6 backdrop-blur-sm">
                <p className="font-inter text-xs text-gold/60 tracking-[0.3em] uppercase mb-2">{item.label}</p>
                <p className="font-cormorant text-lg text-cream font-light">{item.info}</p>
                <p className="font-inter text-xs text-white/30 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="https://wa.link/4c0t55"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-5 px-14 py-5 border border-gold text-gold font-inter text-xs tracking-[0.4em] uppercase"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Réserver via WhatsApp
          </motion.a>

          <p className="mt-8 font-inter text-xs text-white/20 tracking-wider">
            Réponse sous 2h · Confirmation par message
          </p>
        </div>
      </div>
    </section>
  );
}
