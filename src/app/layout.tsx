import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} — Software Developer`, template: `%s — ${profile.name}` },
  description: profile.intro,
  openGraph: { title: profile.name, description: profile.intro, type: "website", siteName: profile.name },
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230a0b0f'/><text x='32' y='42' font-size='28' font-family='monospace' font-weight='700' fill='%236ea8ff' text-anchor='middle'>KS</text></svg>" },
};
export const viewport: Viewport = { themeColor: "#0a0b0f" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">Skip to content</a><Nav /><main id="main">{children}</main></body></html>);
}
