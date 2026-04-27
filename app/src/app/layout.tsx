import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CovenAI - Build with AI. Earn your rank.",
  description:
    "Open-source community engagement framework with gamification, leaderboards, and medieval-themed tier system for AI builders.",
  icons: {
    icon: "/icon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "CovenAI - Build with AI. Earn your rank.",
    description:
      "Open-source community for AI builders. Earn points, rise through medieval ranks, compete in weekly leagues.",
    url: "https://covenai.co",
    siteName: "CovenAI",
    type: "website",
    images: [{ url: "/logo.png", width: 1080, height: 1080, alt: "CovenAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CovenAI - Build with AI. Earn your rank.",
    description:
      "Open-source community for AI builders. Earn points, rise through medieval ranks, compete in weekly leagues.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1E293B] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
