import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blacklist Dakar — Restaurant • Lounge • Rooftop",
  description:
    "Blacklist Dakar — Une expérience culinaire d'exception. Restaurant, Lounge & Rooftop au cœur de Dakar. Cuisine libanaise-européenne, cocktails premium, ambiance exclusive.",
  keywords: ["Blacklist Dakar", "restaurant Dakar", "lounge Dakar", "rooftop Dakar", "cuisine libanaise", "fine dining Sénégal"],
  openGraph: {
    title: "Blacklist Dakar — Restaurant • Lounge • Rooftop",
    description: "Une expérience culinaire d'exception au cœur de Dakar.",
    type: "website",
    locale: "fr_SN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-cream antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <GrainOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
