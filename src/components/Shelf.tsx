"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

const shapeClass = (s: string) =>
  s === "rounded" ? "blob-1" : s === "blob" ? "blob-3" : "blob-2";

export default function Shelf() {
  const reduced = useReducedMotion();
  const s = content.shelf;

  return (
    <section id="shelf" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-16 items-end">
          <div className="md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {s.eyebrow}
            </span>
            <motion.h2
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="mt-3 font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.0] tracking-[-0.02em]"
            >
              {s.heading.split(" ")[0]}{" "}
              <span className="italic font-light text-accent">
                {s.heading.split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.06, duration: 0.7 }}
            className="md:col-span-5 font-sans text-lg leading-relaxed text-ink-muted"
          >
            {s.body}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {s.items.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <motion.div
                whileHover={reduced ? undefined : { rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className={`relative aspect-square overflow-hidden bg-clay ${shapeClass(item.shape)} will-change-transform`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              <figcaption className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif italic text-2xl leading-tight">{item.name}</h3>
                <span className="font-sans font-semibold text-lg text-accent">{item.price}</span>
              </figcaption>
              <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">
                {item.description}
              </p>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                {item.edition} · signed underneath
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
