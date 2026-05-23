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
  kicker: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  image: ImageRef;
}

export interface AboutContent {
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  image: ImageRef;
}

export interface GalleryItem {
  title: string;
  description: string;
  image: ImageRef;
  link: string;
}

export interface GalleryContent {
  heading: string;
  items: GalleryItem[];
}

export interface CtaContent {
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: ImageRef;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  items: FaqItem[];
}

export interface FooterContent {
  copyright: string;
  links: NavLink[];
}

export interface SeoMetadata {
  title: string;
  description: string;
  ogImage: string;
}

export interface SiteContent {
  nav: {
    links: NavLink[];
    cta: NavLink;
  };
  hero: HeroContent;
  about: AboutContent;
  gallery: GalleryContent;
  cta: CtaContent;
  faq: FaqContent;
  footer: FooterContent;
  metadata: SeoMetadata;
}

export const content: SiteContent = {
  nav: {
    links: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "FAQ", href: "#faq" },
    ],
    cta: { name: "Get Started", href: "#contact" }
  },

  hero: {
    kicker: "Welcome to Starter Co",
    headline: "Simplify template design and build with confidence",
    ctaText: "Get Started Today",
    ctaHref: "#contact",
    image: {
      src: "/images/hero.jpg",
      alt: "A focused woman sketching ideas on a notepad in a sunlit room."
    }
  },

  about: {
    heading: "We build for performance and modular design",
    body: "This template serves as a clean, production-grade foundation. By isolating copywriting and brand details from the layout structure, you can launch custom sites in minutes without wading through complex CSS class clusters.",
    ctaText: "Learn More",
    ctaHref: "#services",
    image: {
      src: "/images/about.jpg",
      alt: "A sunlit workspace containing green plants and a warm cup of coffee."
    }
  },

  gallery: {
    heading: "Our Key Offerings",
    items: [
      {
        title: "Modular Layouts",
        description: "Fully theme-agnostic section blocks that shift to fit any visual style guide.",
        image: {
          src: "/images/gallery-01.jpg",
          alt: "Close up portrait of a team member working in a craft apron."
        },
        link: "#services"
      },
      {
        title: "SEO Best Practices",
        description: "Pre-configured sitemaps, semantic tags, JSON-LD schemas, and dynamic OG metadata.",
        image: {
          src: "/images/gallery-02.jpg",
          alt: "A confident designer speaking during a client presentation."
        },
        link: "#services"
      },
      {
        title: "Tailwind CSS v4",
        description: "CSS-variable-based token systems configured directly within globals.css.",
        image: {
          src: "/images/gallery-03.jpg",
          alt: "A professional collaborating with a client on a laptop screen."
        },
        link: "#services"
      }
    ]
  },

  cta: {
    heading: "Ready to launch your project?",
    body: "Start building on top of a production-tested Next.js foundation. No placeholders, no empty states, no boilerplate cleanups.",
    ctaText: "Get in Touch",
    ctaHref: "#contact",
    backgroundImage: {
      src: "/images/cta.jpg",
      alt: "Hands holding a coffee cup next to a keyboard on a wooden table."
    }
  },

  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How do I change the theme colors?",
        answer: "Navigate to src/app/globals.css and edit the CSS custom variables defined under :root. These variables map directly to the @theme config block in Tailwind CSS v4."
      },
      {
        question: "How do I update the copy and links?",
        answer: "All copy, navigation items, image links, and FAQ answers are managed in src/lib/content.ts and src/lib/business.ts. Changing them there updates the entire website instantly."
      },
      {
        question: "Is this template fully accessible?",
        answer: "Yes. The navigation menus, accordion blocks, headings, buttons, and visual overlays follow strict W3C WAI-ARIA and WCAG AA requirements, including keyboard traps and scroll locking."
      }
    ]
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} ${business.name}. All rights reserved.`,
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" }
    ]
  },

  metadata: {
    title: `${business.name} — ${business.tagline}`,
    description: "Build beautiful, modern web landing pages instantly using our production-grade template starter, featuring Tailwind CSS v4 and Next.js App Router.",
    ogImage: "/opengraph-image"
  }
};
