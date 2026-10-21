"use client";
import { useState } from "react";
/** Shows the image if a path is set and loads; otherwise a designed placeholder. */
export default function Img({ src, alt, className = "" }: { src?: string | null; alt: string; className?: string }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) return <div role="img" aria-label={`${alt} (placeholder)`} className={`placeholder ${className}`}><span>{alt}</span></div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`object-cover ${className}`} />;
}
