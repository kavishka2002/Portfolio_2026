import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";

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
  title: "Kavishka Sandaruwan | Full-Stack & Mobile Application Developer",
  description:
    "Portfolio of Kavishka Sandaruwan, an undergraduate Full-Stack and Mobile Application Developer passionate about software development, AI, healthcare technology, and innovative digital solutions.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Kavishka Sandaruwan | Full-Stack & Mobile Application Developer",
    description:
      "Portfolio of Kavishka Sandaruwan — software development, AI, healthcare technology, and innovative digital solutions.",
    type: "website",
    images: ["/images/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavishka Sandaruwan | Full-Stack & Mobile Application Developer",
    description:
      "Portfolio of Kavishka Sandaruwan — software development, AI, healthcare technology, and innovative digital solutions.",
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
        <ThemeProvider>
          <ScrollProgress />
          <Sidebar />
          <MobileNav />
          <div className="pb-20 pt-14 lg:ml-[272px] lg:pb-0 lg:pt-0">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
