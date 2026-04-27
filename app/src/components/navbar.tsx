"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#tiers", label: "Tiers" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/challenges", label: "Challenges" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#334155] bg-[#0F172A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-[#F59E0B]">
          CovenAI
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#94A3B8] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="rounded-lg bg-[#5B21B6] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Join the Coven
          </Link>
        </div>

        <button
          className="text-[#94A3B8] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#334155] bg-[#0F172A] px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-[#94A3B8] transition-colors hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-2 block rounded-lg bg-[#5B21B6] px-4 py-2 text-center text-sm font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            Join the Coven
          </Link>
        </div>
      )}
    </nav>
  );
}
