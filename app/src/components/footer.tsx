import Link from "next/link";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#tiers", label: "Tiers" },
  { href: "/challenges", label: "Challenges" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "https://github.com/dstolts/covenai", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#334155] bg-[#0F172A] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-sm text-[#94A3B8]">
            <span className="text-[#F59E0B] font-bold">CovenAI</span>{" "}
            -- 2025-2026 Just In Time AI, Inc.
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#94A3B8] transition-colors hover:text-white"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#94A3B8]">
          CovenAI is open source. Built with JitNeuro.
        </div>
      </div>
    </footer>
  );
}
