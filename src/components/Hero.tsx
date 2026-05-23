"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { content } from "@/lib/content";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -90]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.06]);

  const h = content.hero;

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      {/* Background blobs */}
      <motion.div
        aria-hidden
        style={{ y: blob1Y }}
        className="pointer-events-none absolute -top-40 -right-32 w-[640px] h-[640px] bg-accent-soft/45 blob-2 will-change-transform"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="pointer-events-none absolute -bottom-40 -left-32 w-[520px] h-[520px] bg-clay/25 blob-3 will-change-transform"
      />
      <motion.div
        aria-hidden
        animate={reduced ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="hidden md:block pointer-events-none absolute top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-oat/40 blob-1 will-change-transform"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-cream rounded-full px-4 py-2 font-sans text-[12px] text-ink shadow-sm border border-ink/10"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            {h.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-serif text-[clamp(3rem,8.5vw,8rem)] leading-[0.95] tracking-[-0.02em]"
          >
            {h.display.split(" ").map((w, i) => (
              <span
                key={i}
                className={
                  w.toLowerCase().includes("slow") ? "italic font-light text-accent" : "font-medium"
                }
              >
                {w}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 font-sans text-lg md:text-xl leading-relaxed text-ink-muted max-w-[58ch]"
          >
            {h.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={h.ctaPrimary.href}
              whileHover={reduced ? undefined : { y: -3 }}
              whileTap={reduced ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="inline-flex items-center gap-2 bg-ink text-cream rounded-full font-sans font-medium px-6 h-12 min-h-[48px] hover:bg-accent transition-colors"
            >
              {h.ctaPrimary.text}
            </motion.a>
            <a
              href={h.ctaSecondary.href}
              className="inline-flex items-center gap-2 bg-cream/70 backdrop-blur-sm border border-ink/15 rounded-full font-sans font-medium px-5 h-12 min-h-[48px] hover:bg-cream transition-colors"
            >
              {h.ctaSecondary.text}
            </a>
          </motion.div>

          {/* Pebbles */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {h.pebbles.map((p, i) => (
              <div
                key={p.label}
                className={`flex items-baseline gap-2 px-4 py-2 ${
                  i === 0 ? "bg-accent text-on-accent blob-1" : i === 1 ? "bg-oat text-ink blob-2" : "bg-cream text-ink blob-3 border border-ink/10"
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                  {p.label}
                </dt>
                <dd className="font-serif italic text-base">{p.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Hero image inside large blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative aspect-[5/6] md:aspect-[4/5] w-full"
        >
          <motion.div
            style={{ scale: imgScale }}
            className="absolute inset-0 blob-2 overflow-hidden bg-clay will-change-transform"
          >
            <Image
              src={h.image.src}
              alt={h.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
          {/* Floating small blobs */}
          <motion.div
            aria-hidden
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-24 h-24 bg-accent blob-3 shadow-lg"
          />
          <motion.div
            aria-hidden
            animate={reduced ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-2 w-32 h-32 bg-oat blob-1"
          />
        </motion.div>
      </div>
    </section>
  );
}
