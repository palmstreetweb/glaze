"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Studio() {
  const reduced = useReducedMotion();
  const s = content.studio;

  return (
    <section id="studio" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 md:order-2">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <motion.div
              whileHover={reduced ? undefined : { rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="absolute inset-0 blob-2 overflow-hidden bg-clay"
            >
              <Image
                src={s.portrait.src}
                alt={s.portrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              aria-hidden
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-28 h-28 bg-accent blob-1"
            />
            <motion.div
              aria-hidden
              animate={reduced ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 w-20 h-20 bg-oat blob-3"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:order-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {s.eyebrow}
          </span>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.0] tracking-[-0.02em]"
          >
            {s.heading.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="italic font-light text-accent">
              {s.heading.split(" ").slice(2).join(" ")}
            </span>
          </motion.h2>
          {s.body.map((para, i) => (
            <motion.p
              key={i}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="mt-5 font-sans text-lg leading-relaxed text-ink-muted max-w-[50ch]"
            >
              {para}
            </motion.p>
          ))}

          <div className="mt-10 grid grid-cols-2 gap-4">
            {s.pebbles.map((p, i) => (
              <motion.div
                key={p.label}
                initial={reduced ? false : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`p-4 ${
                  i % 4 === 0 ? "bg-oat blob-1" : i % 4 === 1 ? "bg-accent-soft/40 blob-2" : i % 4 === 2 ? "bg-cream blob-3 border border-ink/10" : "bg-clay/15 blob-1"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  {p.label}
                </div>
                <div className="font-serif italic text-xl mt-1">{p.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
