"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Section from "./Section";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="06 · Certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-4 border border-border/15 bg-surface p-5 transition-colors hover:border-amber/40"
          >
            <div className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded border border-border/20 bg-muted">
              {cert.fileHref ? (
                <Image
                  src={cert.fileHref}
                  alt={cert.name}
                  width={160}
                  height={96}
                  className="object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center text-amber">
                  <Award size={18} strokeWidth={1.75} />
                </div>
              )}
            </div>
            <div className="min-w-0">
              <p className="font-display text-[15px] text-ink">{cert.name}</p>
              <p className="mt-0.5 font-mono text-[12px] text-slate">{cert.provider}</p>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-ink-muted">
                {cert.date && <span>{cert.date}</span>}
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
              </div>
              {cert.fileHref && (
                <a
                  href={cert.fileHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-amber hover:underline"
                >
                  View Certificate <ExternalLink size={11} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
