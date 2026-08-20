export type Status = "available" | "reserved" | "ordered";

export type Copy = { en: string; de: string; ru: string; uk: string };

export type FlashItem = {
  id: string;
  img: string;
  title: string;
  style: string;
  price: string;
  status: Status;
  desc: Copy;
};

export type WorkItem = {
  id: string;
  img: string;
  title: string;
  style: string;
  year: string;
  size: string;
  place: Copy;
  desc: Copy;
};

export const FLASH: FlashItem[] = [
  {
    id: "d01",
    img: "/images/flash/botanical.jpg",
    title: "Fine stem",
    style: "Fine line",
    price: "80€",
    status: "available",
    desc: {
      en: "Delicate botanical stem. Fixed price.",
      de: "Zarter botanischer Stiel. Festpreis.",
      ru: "Тонкий ботанический стебель. Фикс.",
      uk: "Тонкий ботанічний стебель. Фікс.",
    },
  },
  {
    id: "d02",
    img: "/images/flash/geometry.jpg",
    title: "Geometry",
    style: "Fine line",
    price: "70€",
    status: "available",
    desc: {
      en: "Mini geometry, fine line.",
      de: "Mini-Geometrie, Fine Line.",
      ru: "Мини-геометрия, fine line.",
      uk: "Міні-геометрія, fine line.",
    },
  },
  {
    id: "d03",
    img: "/images/flash/skull.jpg",
    title: "Hard skull",
    style: "Graphic",
    price: "100€",
    status: "reserved",
    desc: {
      en: "Hard skull graphic. Reserved.",
      de: "Harter Schädel. Reserviert.",
      ru: "Жёсткий череп. Зарезервирован.",
      uk: "Жорсткий череп. Зарезервовано.",
    },
  },
  {
    id: "d04",
    img: "/images/flash/dagger.jpg",
    title: "Dagger rose",
    style: "Graphic",
    price: "95€",
    status: "available",
    desc: {
      en: "Dagger and rose, graphic.",
      de: "Dolch und Rose, Graphic.",
      ru: "Кинжал и роза, graphic.",
      uk: "Кинджал і троянда, graphic.",
    },
  },
  {
    id: "d05",
    img: "/images/flash/gothic.jpg",
    title: "Gothic PAIN",
    style: "Lettering",
    price: "90€",
    status: "available",
    desc: {
      en: "Gothic lettering.",
      de: "Gotisches Lettering.",
      ru: "Готический леттеринг.",
      uk: "Готичний леттерінг.",
    },
  },
  {
    id: "d06",
    img: "/images/flash/script.jpg",
    title: "Script fuel",
    style: "Lettering",
    price: "85€",
    status: "ordered",
    desc: {
      en: "Script. Ordered / in progress.",
      de: "Script. Bestellt / in Arbeit.",
      ru: "Скрипт. Заказан / в работе.",
      uk: "Скрипт. Замовлено / в роботі.",
    },
  },
  {
    id: "d09",
    img: "/images/flash/punk-skull.jpg",
    title: "Punk skull",
    style: "Graphic",
    price: "110€",
    status: "available",
    desc: {
      en: "Punk skull, bold ink.",
      de: "Punk-Schädel, bold ink.",
      ru: "Панк-череп, bold ink.",
      uk: "Панк-череп, bold ink.",
    },
  },
  {
    id: "d12",
    img: "/images/flash/moth.jpg",
    title: "Night moth",
    style: "Fine line",
    price: "85€",
    status: "available",
    desc: {
      en: "Moth, fine line.",
      de: "Motte, Fine Line.",
      ru: "Мотылёк, fine line.",
      uk: "Метелик, fine line.",
    },
  },
  {
    id: "d13",
    img: "/images/flash/snake.jpg",
    title: "Coil snake",
    style: "Blackwork",
    price: "120€",
    status: "reserved",
    desc: {
      en: "Snake blackwork. Reserved.",
      de: "Schlange Blackwork. Reserviert.",
      ru: "Змея, blackwork. Reserved.",
      uk: "Змія, blackwork. Reserved.",
    },
  },
  {
    id: "d14",
    img: "/images/flash/sigil.jpg",
    title: "Sigil mark",
    style: "Cybersigilism",
    price: "95€",
    status: "available",
    desc: {
      en: "Sigil / cybersigilism.",
      de: "Sigil / Cybersigilism.",
      ru: "Сигил / cybersigilism.",
      uk: "Сигіл / cybersigilism.",
    },
  },
  {
    id: "d15",
    img: "/images/flash/mandala.jpg",
    title: "Half mandala",
    style: "Ornamental",
    price: "105€",
    status: "available",
    desc: {
      en: "Half mandala, ornamental.",
      de: "Halb-Mandala, ornamental.",
      ru: "Половина мандалы, ornamental.",
      uk: "Половина мандали, ornamental.",
    },
  },
  {
    id: "d11",
    img: "/images/flash/dagger-rose.jpg",
    title: "Classic dagger",
    style: "Traditional",
    price: "100€",
    status: "available",
    desc: {
      en: "Classic dagger with rose.",
      de: "Klassischer Dolch mit Rose.",
      ru: "Классический кинжал с розой.",
      uk: "Класичний кинджал з трояндою.",
    },
  },
];

export const WORKS: WorkItem[] = [
  {
    id: "p01",
    img: "/images/works/text.jpg",
    title: "SACRIFICE",
    style: "Trash Polka",
    year: "2025",
    size: "~16 cm",
    place: { en: "Forearm", de: "Unterarm", ru: "Предплечье", uk: "Передпліччя" },
    desc: {
      en: "Trash Polka. Raw energy, contrast.",
      de: "Trash Polka. Rohe Energie.",
      ru: "Trash Polka. Сырая энергия, контраст.",
      uk: "Trash Polka. Сира енергія.",
    },
  },
  {
    id: "p02",
    img: "/images/works/bird.jpg",
    title: "RAVEN",
    style: "Aquarelle",
    year: "2024",
    size: "~11 cm",
    place: { en: "Arm", de: "Arm", ru: "Рука", uk: "Рука" },
    desc: {
      en: "Aquarelle. Soft washes.",
      de: "Aquarelle. Weiche Verläufe.",
      ru: "Aquarelle. Мягкие переходы.",
      uk: "Aquarelle. М’які переходи.",
    },
  },
  {
    id: "p03",
    img: "/images/works/triangle.jpg",
    title: "GEOMETRIC",
    style: "Graphic",
    year: "2025",
    size: "~14 cm",
    place: { en: "Chest", de: "Brust", ru: "Грудь", uk: "Груди" },
    desc: {
      en: "Graphic. Hard geometry.",
      de: "Graphic. Harte Geometrie.",
      ru: "Graphic. Жёсткая геометрия.",
      uk: "Graphic. Жорстка геометрія.",
    },
  },
  {
    id: "p04",
    img: "/images/works/arm.jpg",
    title: "ARM SCRIPT",
    style: "Realism",
    year: "2024",
    size: "~18 cm",
    place: { en: "Forearm", de: "Unterarm", ru: "Предплечье", uk: "Передпліччя" },
    desc: {
      en: "Realism. Depth and volume.",
      de: "Realism. Tiefe und Volumen.",
      ru: "Realism. Глубина и объём.",
      uk: "Realism. Глибина й об’єм.",
    },
  },
  {
    id: "p05",
    img: "/images/works/hand.jpg",
    title: "HAND",
    style: "Graphic",
    year: "2025",
    size: "~7 cm",
    place: { en: "Hand", de: "Hand", ru: "Кисть", uk: "Кисть" },
    desc: {
      en: "Graphic on the hand.",
      de: "Graphic an der Hand.",
      ru: "Graphic на кисти.",
      uk: "Graphic на кисті.",
    },
  },
  {
    id: "p06",
    img: "/images/works/neck.jpg",
    title: "NECK",
    style: "Neo Tribal",
    year: "2024",
    size: "~9 cm",
    place: { en: "Neck", de: "Hals", ru: "Шея", uk: "Шия" },
    desc: {
      en: "Neo Tribal on the neck.",
      de: "Neo Tribal am Hals.",
      ru: "Neo Tribal на шее.",
      uk: "Neo Tribal на шиї.",
    },
  },
  {
    id: "p07",
    img: "/images/works/chest.jpg",
    title: "CHEST",
    style: "Neo Tribal",
    year: "2025",
    size: "~22 cm",
    place: { en: "Chest", de: "Brust", ru: "Грудь", uk: "Груди" },
    desc: {
      en: "Large piece on the chest.",
      de: "Großes Stück auf der Brust.",
      ru: "Крупная работа на груди.",
      uk: "Велика робота на грудях.",
    },
  },
  {
    id: "p08",
    img: "/images/works/back.jpg",
    title: "BACK WORK",
    style: "Lettering/Graphic",
    year: "2024",
    size: "~28 cm",
    place: { en: "Back", de: "Rücken", ru: "Спина", uk: "Спина" },
    desc: {
      en: "Type and graphic on the back.",
      de: "Schrift und Grafik auf dem Rücken.",
      ru: "Буквы и графика на спине.",
      uk: "Літери й графіка на спині.",
    },
  },
  {
    id: "p09",
    img: "/images/works/leg.jpg",
    title: "LEG",
    style: "Gothic/Dark Graphic",
    year: "2025",
    size: "~19 cm",
    place: { en: "Leg", de: "Bein", ru: "Нога", uk: "Нога" },
    desc: {
      en: "Dark graphic on the leg.",
      de: "Dunkle Grafik am Bein.",
      ru: "Тёмная графика на ноге.",
      uk: "Темна графіка на нозі.",
    },
  },
  {
    id: "p10",
    img: "/images/works/fine-line.jpg",
    title: "FINE LINE",
    style: "Neo Tribal",
    year: "2025",
    size: "—",
    place: { en: "—", de: "—", ru: "—", uk: "—" },
    desc: {
      en: "Fine line, ornament.",
      de: "Feine Linie, Ornament.",
      ru: "Тонкая линия, орнамент.",
      uk: "Тонка лінія, орнамент.",
    },
  },
];
