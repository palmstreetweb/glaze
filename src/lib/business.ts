// Single source of truth for core business details
export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandPalette {
  /** Primary brand color used for icon backgrounds and OG accents */
  accent: string;
  /** Foreground text/glyph color on the brand background */
  onAccent: string;
  /** Page background for OG cards */
  bg: string;
  /** Primary text on OG cards */
  ink: string;
  /** Secondary text on OG cards */
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
  name: "STARTER CO",
  tagline: "Build templates faster with our clean agnostic starter.",
  email: "hello@starter.palmstreetweb.design",
  phone: "(555) 123-4567",
  address: "123 Palm Street, Suite 100, San Francisco, CA 94107",
  url: "https://starter.palmstreetweb.design",
  socials: [
    { name: "Instagram", href: "https://instagram.com/starter" },
    { name: "LinkedIn", href: "https://linkedin.com/company/starter" },
    { name: "X", href: "https://x.com/starter" },
  ],
  brand: {
    accent: "#2563EB",
    onAccent: "#FFFFFF",
    bg: "#FFFFFF",
    ink: "#111827",
    inkMuted: "#4B5563",
  },
};
