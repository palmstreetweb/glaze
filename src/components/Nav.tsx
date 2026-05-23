"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = previous;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255,246,238,0.9)" : "rgba(255,246,238,0)",
          backdropFilter: scrolled ? "blur(14px) saturate(120%)" : "blur(0px)",
          borderColor: scrolled ? "rgba(62,42,32,0.18)" : "rgba(62,42,32,0)",
        }}
        transition={{ duration: 0.35 }}
        className="max-w-6xl mx-auto rounded-full border h-14 flex items-center justify-between pl-2 pr-2"
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span aria-hidden className="block w-9 h-9 bg-accent blob-1" />
          <span className="font-serif italic text-2xl leading-none">{business.name.toLowerCase()}</span>
        </a>
        <nav className="hidden md:flex items-center gap-2 font-sans text-sm">
          {content.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full hover:bg-white/60 transition-colors text-ink"
            >
              {l.name}
            </a>
          ))}
        </nav>
        <a
          href={content.nav.cta.href}
          className="hidden md:inline-flex items-center gap-2 bg-ink text-cream rounded-full font-sans font-medium text-sm px-5 h-11 min-h-[44px] hover:bg-accent transition-colors"
        >
          {content.nav.cta.name} →
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden h-11 px-5 rounded-full bg-ink text-cream font-sans font-medium text-sm min-h-[44px]"
        >
          Menu
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-bg-warm flex flex-col"
          >
            <div className="absolute -top-32 -right-32 w-[460px] h-[460px] bg-accent/30 blob-2" aria-hidden />
            <div className="absolute -bottom-40 -left-32 w-[460px] h-[460px] bg-clay/25 blob-3" aria-hidden />
            <div className="relative px-6 h-16 flex items-center justify-between pt-3">
              <span className="font-serif italic text-xl">{business.name.toLowerCase()}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="font-sans text-sm rounded-full bg-ink text-cream px-5 h-11 min-h-[44px]"
              >
                Close ×
              </button>
            </div>
            <div className="relative flex-1 flex flex-col justify-center px-6 gap-2">
              {content.nav.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.45 }}
                  className="font-serif italic text-6xl leading-tight"
                >
                  {l.name}.
                </motion.a>
              ))}
              <motion.a
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 bg-accent text-on-accent rounded-full font-sans font-semibold px-6 h-14 self-start min-h-[48px]"
              >
                {content.nav.cta.name} →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
