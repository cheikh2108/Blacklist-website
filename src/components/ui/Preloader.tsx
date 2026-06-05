"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const lineTopRef = useRef<HTMLDivElement>(null);
  const lineBottomRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    gsap.set([logoRef.current, subtitleRef.current, lineTopRef.current, lineBottomRef.current], {
      opacity: 0,
      y: 30,
    });

    tl.to(lineTopRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.3)
      .to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5)
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.8)
      .to(lineBottomRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.9)
      .to(
        progressTextRef.current,
        {
          innerHTML: 100,
          duration: 1.8,
          ease: "power2.inOut",
          snap: { innerHTML: 1 },
          onUpdate() {
            const val = Math.round(Number((this.targets()[0] as HTMLElement).innerHTML));
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${val}%`;
            }
          },
        },
        1.0
      )
      .to({}, { duration: 0.3 });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div ref={lineTopRef} className="w-px h-16 bg-gold-light opacity-40" />

        <div ref={logoRef} className="text-center">
          <h1 className="font-cormorant text-7xl md:text-9xl font-light tracking-[0.3em] text-cream uppercase">
            Blacklist
          </h1>
        </div>

        <p ref={subtitleRef} className="font-inter text-xs tracking-[0.4em] text-gold uppercase">
          Restaurant &bull; Lounge &bull; Rooftop
        </p>

        <div ref={lineBottomRef} className="w-px h-16 bg-gold-light opacity-40" />
      </div>

      {/* Progress */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 flex flex-col items-center gap-3">
        <div className="w-full h-px bg-white/10">
          <div
            ref={progressBarRef}
            className="h-full bg-gold transition-none"
            style={{ width: "0%" }}
          />
        </div>
        <div className="flex items-center gap-1 font-inter text-xs text-white/30 tracking-widest">
          <span ref={progressTextRef}>0</span>
          <span>%</span>
        </div>
      </div>

      <p className="absolute bottom-8 font-inter text-xs tracking-[0.3em] text-white/20 uppercase">
        Dakar, Sénégal
      </p>
    </div>
  );
}
