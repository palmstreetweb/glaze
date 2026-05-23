import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep text-cream/90 pt-16 pb-10 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] bg-accent/35 blob-2" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] bg-clay/30 blob-3" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="block w-10 h-10 bg-accent blob-1" />
              <div className="font-serif italic text-3xl">{business.name.toLowerCase()}</div>
            </div>
            <p className="mt-4 font-serif italic text-xl text-cream/80 leading-snug max-w-[36ch]">
              {business.tagline}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Sections
            </div>
            <ul className="space-y-2 font-sans text-base">
              {content.nav.links.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-accent-soft" href={l.href}>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-2 font-sans text-base">
              {business.socials.map((s) => (
                <li key={s.href}>
                  <a className="hover:text-accent-soft" href={s.href}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 mb-3">
              Studio
            </div>
            <a href={`mailto:${business.email}`} className="font-serif italic text-xl text-cream hover:text-accent-soft">
              {business.email}
            </a>
            <p className="mt-2 font-sans text-sm text-cream/65">{business.phone}</p>
            <p className="mt-3 font-sans text-sm text-cream/65">{business.address}</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-wrap items-baseline justify-between gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span className="normal-case tracking-normal font-serif italic text-cream/65">
            {content.footer.copyright}
          </span>
          <div className="flex items-center gap-6 text-cream/70">
            {content.footer.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent-soft">
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
