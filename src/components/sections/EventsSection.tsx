"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LINKS } from "@/lib/config";
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
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
  {
    date: "Samedi",
    frequency: "Chaque semaine",
    title: "Rooftop Sessions",
    desc: "Coucher de soleil sur Dakar, DJ set exclusif, cocktails au bord de la terrasse avec vue panoramique sur la ville.",
    tag: "Rooftop · DJ Set",
    img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80",
  },
  {
    date: "Sur demande",
    frequency: "Privatisation",
    title: "Événements Privés",
    desc: "Anniversaires, dîners d'affaires, lancements — Blacklist met ses espaces à disposition pour vos événements exclusifs.",
    tag: "Privatisation",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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
                  href={LINKS.whatsapp}
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
