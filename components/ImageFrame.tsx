"use client";

import Image from "next/image";

export default function ImageFrame({
  src,
  alt,
  className = "",
  label = "Project Screenshot",
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-border/40 bg-surface-2 ${className}`}
      role="group"
      aria-label={alt}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-border/30 bg-bg/70 px-3 py-1 text-[11px] font-mono text-ink-muted backdrop-blur-sm">
        {label}
      </div>
    </div>
  );
}
