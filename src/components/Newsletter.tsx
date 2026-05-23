"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Newsletter() {
  const reduced = useReducedMotion();
  const n = content.newsletter;

  return (
    <section id="newsletter" className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[820px] bg-accent-soft/40 blob-2 will-change-transform"
      />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {n.eyebrow}
        </span>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-3 font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.0] tracking-[-0.02em]"
        >
          Once a month.{" "}
          <span className="italic font-light text-accent">Never about sales.</span>
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 font-sans text-lg leading-relaxed text-ink-muted max-w-[58ch] mx-auto"
        >
          {n.body}
        </motion.p>
        <motion.form
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.18, duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            const target = e.currentTarget as HTMLFormElement;
            const input = target.elements.namedItem("email") as HTMLInputElement | null;
            if (input?.value) {
              window.location.href = `${n.ctaHref}&body=${encodeURIComponent(input.value)}`;
            }
          }}
          className="mt-10 mx-auto flex flex-wrap items-stretch gap-3 max-w-lg p-2 bg-cream rounded-full border border-ink/15 shadow-[0_10px_30px_-10px_rgba(62,42,32,0.25)]"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="your@email"
            className="flex-1 min-w-[180px] bg-transparent px-5 h-12 font-sans text-base outline-none placeholder:text-ink-faint"
          />
          <motion.button
            type="submit"
            whileHover={reduced ? undefined : { y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            className="bg-ink text-cream rounded-full font-sans font-medium px-6 h-12 min-h-[48px] hover:bg-accent transition-colors"
          >
            {n.ctaText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
