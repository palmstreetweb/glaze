"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export default function Process() {
  const reduced = useReducedMotion();
  const p = content.process;

  return (
    <section id="process" className="relative py-24 md:py-32 bg-bg-warm overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/20 blob-3" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-20 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {p.eyebrow}
          </span>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.0] tracking-[-0.02em] max-w-[20ch] mx-auto"
          >
            {p.heading.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="italic font-light text-accent">
              {p.heading.split(" ").slice(3).join(" ")}
            </span>
          </motion.h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {p.chapters.map((ch, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={ch.number}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-12 gap-10 items-center ${flip ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`md:col-span-6 [direction:ltr]`}>
                  <div className="relative aspect-square max-w-md">
                    <motion.div
                      whileHover={reduced ? undefined : { rotate: flip ? 3 : -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 22 }}
                      className={`absolute inset-0 overflow-hidden bg-clay ${i % 3 === 0 ? "blob-1" : i % 3 === 1 ? "blob-2" : "blob-3"} will-change-transform`}
                    >
                      <Image
                        src={ch.image.src}
                        alt={ch.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent text-on-accent blob-1 flex items-center justify-center font-serif italic text-5xl">
                      {ch.number}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6 [direction:ltr]">
                  <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                    {ch.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="italic font-light text-accent">
                      {ch.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </h3>
                  <p className="mt-5 font-sans text-lg leading-relaxed text-ink-muted max-w-[44ch]">
                    {ch.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
