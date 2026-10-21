"use client";

import Image from "next/image";

export default function ImageFrame({
  src,
  alt,
  className = "",
  label = "Project Screenshot",
  sizes = "(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 34vw",
}: {
  src: string | null;
  alt: string;
  className?: string;
  label?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-border/40 bg-surface-2 ${className}`}
      role="group"
      aria-label={alt}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      ) : (
        <div className="flex h-full items-center justify-center px-6 text-center font-mono text-xs text-ink-muted">
          Project photo coming soon
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-border/30 bg-bg/70 px-3 py-1 text-[11px] font-mono text-ink-muted backdrop-blur-sm">
        {label}
      </div>
    </div>
  );
}
