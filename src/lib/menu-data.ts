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
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=75",
      },
      {
        name: "Le Bao Effiloché",
        desc: "Viande effilochée, bao bun, salade de choux, sauce cocktail",
        price: "6 500",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=75",
      },
      {
        name: "Homos Maison",
        desc: "Purée de pois chiches, garnis de viande hachée",
        price: "6 000",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=75",
      },
      {
        name: "Poulet Dynamite",
        desc: "",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=75",
      },
      {
        name: "Crevette Dynamite",
        desc: "",
        price: "5 500",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=75",
      },
      {
        name: "Foie Soleil",
        desc: "Foie fondant à la mélasse de grenadine",
        price: "6 000",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75",
      },
      {
        name: "Rouleau au Fromage",
        desc: "Feta, mozza, persil",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&q=75",
      },
      {
        name: "Crevette à l'Espagnol",
        desc: "Ail, persil, huile d'olive",
        price: "7 000",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=75",
      },
      {
        name: "Chèvre Fondant",
        desc: "Laitue, tomates cerises, papillons de chèvre chaud, vinaigrette maison",
        price: "8 500",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75",
      },
      {
        name: "Carpaccio de Tomate à la Burrata",
        desc: "",
        price: "8 000",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&q=75",
      },
      {
        name: "Taboulé",
        desc: "",
        price: "6 500",
        image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&q=75",
      },
      {
        name: "Fattoush",
        desc: "",
        price: "6 500",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=75",
      },
      {
        name: "Entrecôte du Chef",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "15 000",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=75",
      },
      {
        name: "Kafta Traditionnel",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=75",
      },
      {
        name: "Souris d'Agneau Fondant",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "18 000",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=75",
      },
      {
        name: "Shawarma Poulet",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=75",
      },
      {
        name: "Shawarma Viande",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=75",
      },
      {
        name: "Mixte Grill (2 pers.)",
        desc: "Brochette de bœuf, brochette poulet, Kafta · Sauce champignon ou poivre",
        price: "30 000",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=75",
      },
      {
        name: "Côtelette d'Agneau",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "16 500",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=75",
      },
      {
        name: "Roulade de Poulet Farcie",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=75",
      },
      {
        name: "Brochette de Viande",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "11 000",
        image: "https://images.unsplash.com/photo-1619740455993-9d622eb9d04f?w=400&q=75",
      },
      {
        name: "Brochette Taouk Royal",
        desc: "Sauce champignon ou poivre · Frites, riz, pâtes ou légumes",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75",
      },
      {
        name: "Burger Blacklist",
        desc: "Bun, steak haché Black Angus, cheddar fondu, tomates, oignons grillés, salade, sauce forestière · Servi avec frites",
        price: "10 500",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=75",
      },
      {
        name: "Chicken Mushroom",
        desc: "Bun, poulet pané, cheddar fondu, salade, sauce champignon · Servi avec frites",
        price: "8 000",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=75",
      },
      {
        name: "Pasta Alfredo Poulet",
        desc: "",
        price: "8 500",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=75",
      },
      {
        name: "Italiano Al Basilico",
        desc: "Pâtes al dente, tomates fraîches, ail",
        price: "8 000",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=75",
      },
      {
        name: "Pasta Al Salmone",
        desc: "Pâtes al dente, crème fraîche, saumon fondant, paprika",
        price: "9 000",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=75",
      },
      {
        name: "Pasta Alla Bolognese",
        desc: "",
        price: "8 500",
        image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=75",
      },
      {
        name: "Trileche",
        desc: "Fruit rouge ou caramel",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=75",
      },
      {
        name: "Assiette de Fruits",
        desc: "",
        price: "6 500",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=75",
      },
      {
        name: "Pain Perdu",
        desc: "",
        price: "5 500",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=75",
      },
      {
        name: "Fruitella",
        desc: "",
        price: "8 500",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75",
      },
      {
        name: "Tiramisu au Café",
        desc: "",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=75",
      },
      {
        name: "Punch Pastèque",
        desc: "Pastèque, mure, citron, feuille de menthe",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=75",
      },
      {
        name: "Blue Hawaï",
        desc: "Orange, citron, curaçao, coco",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=75",
      },
      {
        name: "Piña Colada",
        desc: "Jus d'ananas, piña colada",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=75",
      },
      {
        name: "Exotico",
        desc: "Mangue, passion",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=400&q=75",
      },
      {
        name: "Sunset",
        desc: "Framboise, cassis, pomme, passion, tonic",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=75",
      },
      {
        name: "Summer Watermelon",
        desc: "Melon, pastèque, fraise, jus de citron",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=75",
      },
      {
        name: "Fraise Banane",
        desc: "Fraise, banane, lait",
        price: "5 000",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=75",
      },
      {
        name: "Frappé",
        desc: "Café, chocolat, vanille ou caramel · au choix",
        price: "4 500",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=75",
      },
      {
        name: "Espresso",
        desc: "",
        price: "2 000",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=75",
      },
      {
        name: "Café au Lait",
        desc: "",
        price: "2 500",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=75",
      },
      {
        name: "Cappuccino",
        desc: "",
        price: "3 000",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=75",
      },
      {
        name: "Chocolat Chaud",
        desc: "",
        price: "3 000",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=75",
      },
      {
        name: "Jus Frais",
        desc: "Orange, limonade, pastèque, kiwi ou ananas · au choix",
        price: "dès 3 000",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=75",
      },
      {
        name: "Jus Locaux",
        desc: "Bouye, Bissap, Gingembre",
        price: "2 000",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=75",
      },
      {
        name: "Soda / Eau",
        desc: "Soda, eau plate, eau pétillante, Red Bull",
        price: "dès 1 500",
        image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400&q=75",
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
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
      },
      {
        name: "Adalya",
        desc: "Love 66, Hawaï, Double Melon, Mi Amor",
        price: "10 000",
        image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400&q=75",
      },
      {
        name: "Tête Quasar",
        desc: "Parfums au choix",
        price: "12 000",
        image: "https://images.unsplash.com/photo-1605264913938-71b8b9a6b5b4?w=400&q=75",
      },
    ],
  },
];
