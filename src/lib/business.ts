// Single source of truth for core business details
export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandPalette {
  accent: string;
  onAccent: string;
  bg: string;
  ink: string;
  inkMuted: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  socials: SocialLink[];
  brand: BrandPalette;
}

export const business: BusinessDetails = {
  name: "GLAZE",
  tagline: "A small ceramics studio. Soft objects for the slow kitchen.",
  email: "hello@glaze.palmstreetweb.design",
  phone: "(503) 555-0118",
  address: "1147 SE Division Street, Portland, OR 97202",
  url: "https://glaze.palmstreetweb.design",
  socials: [
    { name: "Instagram", href: "https://instagram.com/glaze.studio" },
    { name: "Etsy", href: "https://etsy.com/shop/glaze" },
    { name: "Newsletter", href: "#newsletter" },
  ],
  brand: {
    accent: "#C97B5A",
    onAccent: "#FFF6EE",
    bg: "#FBEFE1",
    ink: "#3E2A20",
    inkMuted: "#7D6655",
  },
};
