"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Journal() {
  const reduced = useReducedMotion();
  const j = content.journal;

  return (
    <section id="journal" className="relative py-24 md:py-32 bg-bg-warm">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {j.eyebrow}
            </span>
            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mt-3 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.0] tracking-[-0.02em]"
            >
              {j.heading.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="italic font-light text-accent">
                {j.heading.split(" ").slice(2).join(" ")}
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {j.entries.map((e, i) => (
            <motion.a
              key={e.title}
              href="#"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduced ? undefined : { y: -4 }}
              className="block p-7 bg-cream blob-1 border border-ink/10 hover:border-accent hover:bg-cream/90 transition-colors"
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">
                <span>{e.date}</span>
                <span className="text-accent">· {e.category} ·</span>
              </div>
              <h3 className="font-serif text-2xl leading-snug tracking-tight">{e.title}</h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-ink-muted">{e.blurb}</p>
              <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Read entry →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
