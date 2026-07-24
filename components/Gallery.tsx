"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Section from "./Section";
import ImageFrame from "./ImageFrame";
import { gallery, galleryCategories } from "@/data/profile";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number] | "All">("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered = gallery.filter((g) => filter === "All" || g.category === filter);
  const activeItem = gallery.find((g) => g.src === lightboxSrc);

  return (
    <Section
      id="gallery"
      eyebrow="08 · Moments & Beyond Code"
      title="Gallery"
      description="Projects, events, and community moments outside the codebase."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`border px-3 py-1.5 font-mono text-[12px] transition-colors ${
              filter === cat
                ? "border-amber text-amber"
                : "border-border/20 text-ink-muted hover:border-border/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-3 sm:columns-3">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src}
            onClick={() => setLightboxSrc(img.src)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
            className="mb-3 block w-full break-inside-avoid"
          >
            <ImageFrame
              src={img.src}
              alt={img.caption}
              label={img.category}
              className={i % 3 === 0 ? "h-52" : "h-36"}
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              className="absolute right-6 top-6 text-white/70 hover:text-white"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <ImageFrame src={activeItem.src} alt={activeItem.caption} className="h-[55vh] w-full" />
              <p className="mt-3 text-center font-mono text-[12px] text-white/70">
                {activeItem.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
