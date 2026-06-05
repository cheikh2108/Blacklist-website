# Blacklist Dakar — Website

Site web officiel de **Blacklist Dakar** — Restaurant • Lounge • Rooftop.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — design system premium
- **GSAP + ScrollTrigger** — animations scroll-based
- **Framer Motion** — transitions et micro-interactions
- **Lenis** — smooth scroll cinématique
- **Sanity CMS** — gestion du contenu (galerie, menu, événements)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/                        # Next.js App Router
├── components/
│   ├── layout/                 # Navigation, Footer
│   ├── providers/              # Lenis smooth scroll
│   ├── sections/               # Hero, About, Menu, Gallery, Events, Reservation, Contact
│   └── ui/                     # Cursor, Preloader, GrainOverlay
├── styles/
│   └── globals.css
└── types/

public/
├── images/                     # Photos du restaurant
└── videos/                     # Vidéo hero (hero.mp4)
```

## Assets

Placer les fichiers dans `public/` :

| Fichier | Emplacement |
|---|---|
| Vidéo hero | `public/videos/hero.mp4` |
| Logo | `public/images/logo.png` |
| Photos galerie | `public/images/gallery-*.jpg` |
| Photos événements | `public/images/event-*.jpg` |

## Variables d'environnement

Copier `.env.local` et renseigner :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.link/4c0t55
```

## Réservations

Les réservations sont gérées via WhatsApp : [wa.link/4c0t55](https://wa.link/4c0t55)

## Administration (Sanity CMS)

L'espace d'administration permet de gérer :
- Galerie photos & vidéos
- Carte du menu
- Événements
- Informations de contact

```bash
npm run sanity:dev   # à configurer après setup Sanity
```

## Production

```bash
npm run build
npm run start
```
