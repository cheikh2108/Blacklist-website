"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    date: "Vendredi",
    frequency: "Chaque semaine",
    title: "Jazz Night",
    desc: "Soirée jazz live avec nos artistes résidents. Cocktails signature, ambiance feutrée, musique soul et jazz contemporain.",
    tag: "Musique Live",
    img: "/images/event-jazz.jpg",
  },
  {
    date: "Samedi",
    frequency: "Chaque semaine",
    title: "Rooftop Sessions",
    desc: "Coucher de soleil sur Dakar, DJ set exclusif, cocktails au bord de la terrasse avec vue panoramique sur la ville.",
    tag: "Rooftop · DJ Set",
    img: "/images/event-rooftop.jpg",
  },
  {
    date: "Sur demande",
    frequency: "Privatisation",
    title: "Événements Privés",
    desc: "Anniversaires, dîners d'affaires, lancements — Blacklist met ses espaces à disposition pour vos événements exclusifs.",
    tag: "Privatisation",
    img: "/images/event-private.jpg",
  },
];

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", once: true },
      }
    );

    const cards = sectionRef.current?.querySelectorAll(".event-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: "power4.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="events" className="relative py-32 md:py-48 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-bordeaux/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div ref={titleRef} className="mb-20">
          <p className="font-inter text-xs tracking-[0.4em] text-gold uppercase mb-4">Agenda</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-cormorant text-6xl md:text-8xl font-light text-cream leading-none">
              Événements
            </h2>
            <p className="font-cormorant text-xl text-white/40 font-light italic max-w-sm">
              Chaque soir, une nouvelle invitation à l'exception
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="event-card bg-charcoal group overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image placeholder — replace src with actual photo */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #1A1410 0%, #2A1E0A 100%)"
                      : i === 1
                      ? "linear-gradient(135deg, #101520 0%, #1A1028 100%)"
                      : "linear-gradient(135deg, #14101A 0%, #201520 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-inter text-xs tracking-[0.2em] text-gold/80 uppercase bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-cormorant text-gold text-lg font-light">{event.date}</span>
                  <span className="w-px h-4 bg-white/20" />
                  <span className="font-inter text-xs text-white/30 tracking-widest uppercase">{event.frequency}</span>
                </div>

                <h3 className="font-cormorant text-3xl text-cream font-light group-hover:text-gold transition-colors duration-300 mb-4">
                  {event.title}
                </h3>

                <p className="font-inter text-sm text-white/40 leading-relaxed mb-8">{event.desc}</p>

                <a
                  href="https://wa.link/4c0t55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-inter text-xs tracking-[0.3em] text-gold uppercase hover:gap-5 transition-all duration-300"
                >
                  Réserver
                  <span className="w-8 h-px bg-gold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
