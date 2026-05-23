import { business } from "./business";

export interface NavLink {
  name: string;
  href: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

export interface HeroContent {
  badge: string;
  display: string;
  body: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  image: ImageRef;
  pebbles: { label: string; value: string }[];
}

export interface ShelfItem {
  name: string;
  description: string;
  price: string;
  edition: string;
  image: ImageRef;
  shape: "rounded" | "blob" | "oval";
}

export interface ShelfContent {
  eyebrow: string;
  heading: string;
  body: string;
  items: ShelfItem[];
}

export interface ProcessChapter {
  number: string;
  title: string;
  body: string;
  image: ImageRef;
}

export interface ProcessContent {
  eyebrow: string;
  heading: string;
  chapters: ProcessChapter[];
}

export interface StudioContent {
  eyebrow: string;
  heading: string;
  body: string[];
  portrait: ImageRef;
  pebbles: { label: string; value: string }[];
}

export interface JournalEntry {
  date: string;
  category: string;
  title: string;
  blurb: string;
}

export interface JournalContent {
  eyebrow: string;
  heading: string;
  entries: JournalEntry[];
}

export interface NewsletterContent {
  eyebrow: string;
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogImage: string;
}

export interface SiteContent {
  nav: { links: NavLink[]; cta: NavLink };
  hero: HeroContent;
  shelf: ShelfContent;
  process: ProcessContent;
  studio: StudioContent;
  journal: JournalContent;
  newsletter: NewsletterContent;
  footer: { copyright: string; links: NavLink[] };
  metadata: SeoMetadata;
}

export const content: SiteContent = {
  nav: {
    links: [
      { name: "Shelf", href: "#shelf" },
      { name: "Process", href: "#process" },
      { name: "Studio", href: "#studio" },
      { name: "Journal", href: "#journal" },
    ],
    cta: { name: "Visit the shop", href: "#shelf" },
  },

  hero: {
    badge: "Spring batch — fresh from the kiln",
    display: "Soft objects for the slow kitchen.",
    body: "Glaze is a small ceramics studio in southeast Portland making everyday bowls, mugs, vases, and the occasional very large platter. Each piece is thrown, glazed, and signed by hand. There is no industrial process here, only a slow one.",
    ctaPrimary: { text: "See the shelf →", href: "#shelf" },
    ctaSecondary: { text: "Visit the studio", href: "#studio" },
    image: {
      src: "/images/hero.jpg",
      alt: "A potter's hands shaping a clay bowl on a wheel.",
    },
    pebbles: [
      { label: "Fires", value: "Weekly" },
      { label: "Editions", value: "Of 12–24" },
      { label: "Where", value: "Portland" },
    ],
  },

  shelf: {
    eyebrow: "Section 01 — The Shelf",
    heading: "This season's pieces.",
    body: "All work is made in small editions and signed underneath. Once the edition sells through, we move on. We do not back-stock or reissue.",
    items: [
      {
        name: "Loop mug",
        description: "A small thumbprint where the handle meets the body. Coffee-sized.",
        price: "$58",
        edition: "Ed. of 24",
        image: { src: "/images/piece-01.jpg", alt: "A handmade ceramic mug with a soft cream glaze." },
        shape: "rounded",
      },
      {
        name: "Bay bowl",
        description: "Wide-mouthed cereal bowl, fits two hands. A small dimple under the lip for tea bags.",
        price: "$72",
        edition: "Ed. of 18",
        image: { src: "/images/piece-02.jpg", alt: "A wide-mouthed cream ceramic bowl from above." },
        shape: "oval",
      },
      {
        name: "River vase",
        description: "Tall bud vase, glaze drifts in three places like a creek bend.",
        price: "$94",
        edition: "Ed. of 12",
        image: { src: "/images/piece-03.jpg", alt: "A tall ceramic vase with a soft glaze drip." },
        shape: "blob",
      },
      {
        name: "Field platter",
        description: "Eighteen-inch platter, for bread and stone fruit. Limit one per household.",
        price: "$210",
        edition: "Ed. of 6",
        image: { src: "/images/piece-04.jpg", alt: "A large ceramic platter on a wooden table." },
        shape: "oval",
      },
      {
        name: "Stone teapot",
        description: "Small teapot with a slip-cast handle. Pours a perfect two cups.",
        price: "$148",
        edition: "Ed. of 14",
        image: { src: "/images/piece-05.jpg", alt: "A round handmade ceramic teapot." },
        shape: "rounded",
      },
      {
        name: "Tide cup",
        description: "Espresso cup, glaze pooled at the foot like a tidemark.",
        price: "$34",
        edition: "Ed. of 36",
        image: { src: "/images/piece-06.jpg", alt: "A small espresso cup with a pooled glaze ring." },
        shape: "blob",
      },
    ],
  },

  process: {
    eyebrow: "Section 02 — Process",
    heading: "What happens between mud and table.",
    chapters: [
      {
        number: "i",
        title: "We start with clay we dig.",
        body: "We pick up clay from a small reserve outside Damascus, Oregon. It travels seventeen miles to the studio.",
        image: { src: "/images/process-01.jpg", alt: "A bag of wet brown clay on a wooden bench." },
      },
      {
        number: "ii",
        title: "We throw it slowly.",
        body: "One of us at the wheel, the other doing trims. Each form takes three sittings: the first to throw, the second to trim, the third to handle.",
        image: { src: "/images/process-02.jpg", alt: "A potter trimming a bowl on a wheel." },
      },
      {
        number: "iii",
        title: "We glaze with three colors.",
        body: "Cream, oat, and a soft cinnamon. We mix every batch in five-gallon buckets and dip — never spray.",
        image: { src: "/images/process-03.jpg", alt: "Three buckets of ceramic glaze lined up." },
      },
      {
        number: "iv",
        title: "We fire on Wednesdays.",
        body: "Every Wednesday, weather permitting. A single kiln, slow heat to cone 6. We listen to records and watch the cones bend.",
        image: { src: "/images/process-04.jpg", alt: "A ceramic kiln glowing orange at night." },
      },
    ],
  },

  studio: {
    eyebrow: "Section 03 — Studio",
    heading: "Two people, one cat, one kiln.",
    body: [
      "Glaze was started by Avi and June in 2019, out of a garage off Division Street. We have been in the same building since 2021 — a former florist's, repainted ourselves.",
      "We host an open studio on the first Saturday of every month between 11am and 3pm. There is usually bread, sometimes wine, and the cat — Pemberton — always.",
    ],
    portrait: {
      src: "/images/studio.jpg",
      alt: "A potter standing in their sunlit studio with shelves of ceramics behind.",
    },
    pebbles: [
      { label: "Founded", value: "2019" },
      { label: "Studio dog", value: "None" },
      { label: "Studio cat", value: "Pemberton (15 lb)" },
      { label: "Open Saturdays", value: "1st of the month" },
    ],
  },

  journal: {
    eyebrow: "Section 04 — Journal",
    heading: "Notes from the bench.",
    entries: [
      {
        date: "Apr 04",
        category: "Glaze test",
        title: "A new soft cinnamon — three rounds in",
        blurb: "We've been chasing a particular orange-brown for two seasons. This week, we think we may have it.",
      },
      {
        date: "Mar 17",
        category: "Open studio",
        title: "Saturday's open studio had sixty-eight visitors",
        blurb: "We baked too much bread and ran out of cups. Next month, we will make more of both.",
      },
      {
        date: "Feb 22",
        category: "Reading",
        title: "On the difference between making and producing",
        blurb: "A long-ish essay on slow craft, written during a stretch of rain. Cross-posted to the newsletter.",
      },
    ],
  },

  newsletter: {
    eyebrow: "Section 05 — Newsletter",
    heading: "Once a month. Never about sales.",
    body: "Photographs of the new batch, notes from the bench, and one or two things we are reading. We do not run promotions. The newsletter exists because we like writing it.",
    ctaText: "Send me the newsletter →",
    ctaHref: `mailto:${business.email}?subject=Newsletter`,
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} ${business.name} — A small studio in Portland.`,
    links: [
      { name: "Shipping", href: "#shipping" },
      { name: "Care", href: "#care" },
      { name: "Wholesale", href: "#wholesale" },
    ],
  },

  metadata: {
    title: `${business.name} — ${business.tagline}`,
    description:
      "Glaze is a small ceramics studio in southeast Portland making everyday bowls, mugs, vases, and the occasional very large platter — thrown, glazed, and signed by hand.",
    ogImage: "/opengraph-image",
  },
};
