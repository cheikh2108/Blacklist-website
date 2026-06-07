"use client";

import { useEffect, useRef, useState } from "react";
import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <main>
      <Preloader onComplete={handlePreloaderComplete} />
      <Navigation />
      <HeroSection isLoaded={isLoaded} />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
