"use client";
import { useState } from "react";
/** No backend: composes a mailto: link. To use an email service later, see README ("Contact form"). */
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState(""); const [msg, setMsg] = useState("");
  if (!email) return <p className="rounded-2xl border border-dashed border-line p-6 text-mute">Contact form is ready — add your email in <code className="text-fg">src/data/profile.ts</code> to enable it.</p>;
  const href = `mailto:${email}?subject=${encodeURIComponent(`Portfolio message from ${name || "a visitor"}`)}&body=${encodeURIComponent(msg)}`;
  const field = "w-full rounded-xl border border-line bg-panel px-4 py-3 outline-none focus:border-accent";
  return (
    <div className="space-y-4">
      <label className="block text-sm">Name<input className={`${field} mt-1`} value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label className="block text-sm">Message<textarea rows={5} className={`${field} mt-1`} value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      <a href={href} className="inline-flex rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg hover:bg-accent">Open in email app</a>
    </div>
  );
}
