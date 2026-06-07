export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées",
    items: [
      {
        name: "Kibé",
        desc: "Salade fraîcheur, sauce yaourt",
        price: "6 000",
        image: "/images/menu/kibe.jpg",
      },
      {
        name: "Le Bao Effiloché",
        desc: "Viande effilochée, bao bun, salade de choux, sauce cocktail",
        price: "6 500",
        image: "/images/menu/bao-effiloche.jpg",
      },
      {
        name: "Homos Maison",
        desc: "Purée de pois chiches, garnis de viande hachée",
        price: "6 000",
        image: "/images/menu/homos-maison.jpg",
      },
      {
        name: "Poulet Dynamite",
        desc: "",
        price: "5 000",
        image: "/images/menu/poulet-dynamite.jpg",
      },
      {
        name: "Crevette Dynamite",
        desc: "",
        price: "5 500",
        image: "/images/menu/crevette-dynamite.jpg",
      },
      {
        name: "Foie Soleil",
        desc: "Foie fondant à la mélasse de grenadine",
        price: "6 000",
        image: "/images/menu/foie-soleil.jpg",
      },
      {
        name: "Rouleau au Fromage",
        desc: "Feta, mozza, persil",
        price: "5 000",
        image: "/images/menu/rouleau-fromage.jpg",
      },
      {
        name: "Crevette à l'Espagnol",
        desc: "Ail, persil, huile d'olive",
        price: "7 000",
        image: "/images/menu/crevette-espagnol.jpg",
      },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    items: [
      {
        name: "Salade César",
        desc: "Salade, tomates cerise, blanc de poulet, croutons, copeaux de parmesan, sauce Caesar revisitée",
        price: "7 500",
        image: "/images/menu/salade-cesar.jpg",
      },
      {
        name: "Chèvre Fondant",
        desc: "Laitue, tomates cerises, papillons de chèvre chaud, vinaigrette maison",
        price: "8 500",
        image: "/images/menu/chevre-fondant.jpg",
      },
      {
        name: "Carpaccio de Tomate à la Burrata",
        desc: "",
        price: "8 000",
        image: "/images/menu/carpaccio-burrata.jpg",
      },
      {
        name: "Taboulé",
        desc: "",
        price: "6 500",
        image: "/images/menu/taboule.jpg",
      },
      {
        name: "Fattoush",
        desc: "",
        price: "6 500",
        image: "/images/menu/fattoush.jpg",
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    items: [
      {
        name: "Filet de Bœuf Signature",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "12 000",
        image: "/images/menu/filet-boeuf.jpg",
      },
      {
        name: "Entrecôte du Chef",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "15 000",
        image: "/images/menu/entrecote-chef.jpg",
      },
      {
        name: "Kafta Traditionnel",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "/images/menu/kafta.jpg",
      },
      {
        name: "Souris d'Agneau Fondant",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "18 000",
        image: "/images/menu/souris-agneau.jpg",
      },
      {
        name: "Shawarma Poulet",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "/images/menu/shawarma-poulet.jpg",
      },
      {
        name: "Shawarma Viande",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "/images/menu/shawarma-viande.jpg",
      },
      {
        name: "Mixte Grill (2 pers.)",
        desc: "Brochette de bœuf, brochette poulet, Kafta · Sauce champignon ou poivre",
        price: "30 000",
        image: "/images/menu/mixte-grill.jpg",
      },
      {
        name: "Côtelette d'Agneau",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "16 500",
        image: "/images/menu/cotelette-agneau.jpg",
      },
      {
        name: "Roulade de Poulet Farcie",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "/images/menu/roulade-poulet.jpg",
      },
      {
        name: "Brochette de Viande",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "11 000",
        image: "/images/menu/brochette-viande.jpg",
      },
      {
        name: "Brochette Taouk Royal",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "/images/menu/taouk-royal.jpg",
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers",
    items: [
      {
        name: "Cheeseburger",
        desc: "Bun, steak haché Black Angus, cheddar fondu, pickles, salade, oignon, sauce maison · Servi avec frites",
        price: "7 500",
        image: "/images/menu/cheeseburger.jpg",
      },
      {
        name: "Burger Blacklist",
        desc: "Bun, steak haché Black Angus, cheddar fondu, tomates, oignons grillés, salade, sauce forestière · Servi avec frites",
        price: "10 500",
        image: "/images/menu/burger-blacklist.jpg",
      },
      {
        name: "Chicken Mushroom",
        desc: "Bun, poulet pané, cheddar fondu, salade, sauce champignon · Servi avec frites",
        price: "8 000",
        image: "/images/menu/chicken-mushroom.jpg",
      },
    ],
  },
  {
    id: "pates",
    label: "Pâtes",
    items: [
      {
        name: "Pesto Primavera",
        desc: "Pâtes al dente, sauce pesto maison au basilic, parmesan",
        price: "7 500",
        image: "/images/menu/pesto-primavera.jpg",
      },
      {
        name: "Pasta Alfredo Poulet",
        desc: "",
        price: "8 500",
        image: "/images/menu/pasta-alfredo.jpg",
      },
      {
        name: "Italiano Al Basilico",
        desc: "Pâtes al dente, tomates fraîches, ail",
        price: "8 000",
        image: "/images/menu/italiano-basilico.jpg",
      },
      {
        name: "Pasta Al Salmone",
        desc: "Pâtes al dente, crème fraîche, saumon fondant, paprika",
        price: "9 000",
        image: "/images/menu/pasta-salmone.jpg",
      },
      {
        name: "Pasta Alla Bolognese",
        desc: "",
        price: "8 500",
        image: "/images/menu/pasta-bolognese.jpg",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Fondant au Chocolat ou Caramel",
        desc: "",
        price: "6 500",
        image: "/images/menu/fondant-chocolat.jpg",
      },
      {
        name: "Trileche",
        desc: "Fruit rouge ou caramel",
        price: "5 000",
        image: "/images/menu/trileche.jpg",
      },
      {
        name: "Assiette de Fruits",
        desc: "",
        price: "6 500",
        image: "/images/menu/assiette-fruits.jpg",
      },
      {
        name: "Pain Perdu",
        desc: "",
        price: "5 500",
        image: "/images/menu/pain-perdu.jpg",
      },
      {
        name: "Fruitella",
        desc: "",
        price: "8 500",
        image: "/images/menu/fruitella.jpg",
      },
      {
        name: "Tiramisu au Café",
        desc: "",
        price: "5 000",
        image: "/images/menu/tiramisu.jpg",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      {
        name: "Virgin Mojito",
        desc: "Menthe, pastèque, passion, mangue, ananas, kiwi, myrtille ou melon · au choix",
        price: "5 000",
        image: "/images/menu/virgin-mojito.jpg",
      },
      {
        name: "Punch Pastèque",
        desc: "Pastèque, mure, citron, feuille de menthe",
        price: "5 000",
        image: "/images/menu/punch-pasteque.jpg",
      },
      {
        name: "Blue Hawaï",
        desc: "Orange, citron, curaçao, coco",
        price: "5 000",
        image: "/images/menu/blue-hawaii.jpg",
      },
      {
        name: "Piña Colada",
        desc: "Jus d'ananas, piña colada",
        price: "5 000",
        image: "/images/menu/pina-colada.jpg",
      },
      {
        name: "Exotico",
        desc: "Mangue, passion",
        price: "5 000",
        image: "/images/menu/exotico.jpg",
      },
      {
        name: "Sunset",
        desc: "Framboise, cassis, pomme, passion, tonic",
        price: "5 000",
        image: "/images/menu/sunset.jpg",
      },
      {
        name: "Summer Watermelon",
        desc: "Melon, pastèque, fraise, jus de citron",
        price: "5 000",
        image: "/images/menu/summer-watermelon.jpg",
      },
      {
        name: "Fraise Banane",
        desc: "Fraise, banane, lait",
        price: "5 000",
        image: "/images/menu/fraise-banane.jpg",
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    items: [
      {
        name: "Thé Glacé",
        desc: "Pêche, mangue, citron ou framboise · au choix",
        price: "3 000",
        image: "/images/menu/the-glace.jpg",
      },
      {
        name: "Frappé",
        desc: "Café, chocolat, vanille ou caramel · au choix",
        price: "4 500",
        image: "/images/menu/frappe.jpg",
      },
      {
        name: "Espresso",
        desc: "",
        price: "2 000",
        image: "/images/menu/espresso.jpg",
      },
      {
        name: "Café au Lait",
        desc: "",
        price: "2 500",
        image: "/images/menu/cafe-au-lait.jpg",
      },
      {
        name: "Cappuccino",
        desc: "",
        price: "3 000",
        image: "/images/menu/cappuccino.jpg",
      },
      {
        name: "Chocolat Chaud",
        desc: "",
        price: "3 000",
        image: "/images/menu/chocolat-chaud.jpg",
      },
      {
        name: "Jus Frais",
        desc: "Orange, limonade, pastèque, kiwi ou ananas · au choix",
        price: "dès 3 000",
        image: "/images/menu/jus-frais.jpg",
      },
      {
        name: "Jus Locaux",
        desc: "Bouye, Bissap, Gingembre",
        price: "2 000",
        image: "/images/menu/jus-locaux.jpg",
      },
      {
        name: "Soda / Eau",
        desc: "Soda, eau plate, eau pétillante, Red Bull",
        price: "dès 1 500",
        image: "/images/menu/softs.jpg",
      },
    ],
  },
  {
    id: "chichas",
    label: "Chichas",
    items: [
      {
        name: "Al Fakher",
        desc: "Pomme, Menthe, Gum Menthe, Citron, Raisin, Pomme Nakhla",
        price: "8 000",
        image: "/images/menu/chicha-alfakher.jpg",
      },
      {
        name: "Adalya",
        desc: "Love 66, Hawaï, Double Melon, Mi Amor",
        price: "10 000",
        image: "/images/menu/chicha-adalya.jpg",
      },
      {
        name: "Tête Quasar",
        desc: "Parfums au choix",
        price: "12 000",
        image: "/images/menu/chicha-quasar.jpg",
      },
    ],
  },
];
