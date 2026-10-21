import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/data/profile";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Kavishka Sandaruwan | Software & Health Technology",
    template: "%s | Kavishka Sandaruwan",
  },
  description:
    "Portfolio of Kavishka Sandaruwan, a Health Information and Communication Technology undergraduate building software, mobile, and digital health projects.",
  openGraph: {
    title: "Kavishka Sandaruwan | Software & Health Technology",
    description: "Software development, digital health projects, and healthcare technology interests.",
    type: "website",
    images: ["/images/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavishka Sandaruwan | Software & Health Technology",
    description: "Software development, digital health projects, and healthcare technology interests.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <a
          href="#main"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:not-sr-only focus:rounded-lg focus:bg-amber focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:text-bg"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <ScrollProgress />
            <Sidebar />
            <MobileNav />
            <div className="pb-20 pt-14 lg:ml-[252px] lg:pb-0 lg:pt-0">
              {children}
            </div>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
