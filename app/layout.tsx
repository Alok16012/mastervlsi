import type { Metadata, Viewport } from "next";
import { Reddit_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const reddit = Reddit_Sans({
  variable: "--font-reddit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MasterVLSI — VLSI Design & Verification Training Institute, Bangalore",
    template: "%s — MasterVLSI",
  },
  description:
    "MasterVLSI is a VLSI design and verification training institute in Bangalore. RTL, SystemVerilog, UVM and protocol training with 24/7 lab access and placement support.",
  openGraph: {
    type: "website",
    siteName: "MasterVLSI",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#5a4bda",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${reddit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-volt focus:text-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
