import Link from "next/link";
import { tiers, mockLeaderboard, leagues } from "@/lib/tiers";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#1E293B]" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Build with AI.{" "}
            <span className="text-[#F59E0B]">Earn your rank.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#94A3B8]">
            CovenAI is an open-source community for AI builders who believe in
            growing together and giving back. Join the Coven. Earn recognition
            for real contributions.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/join"
              className="rounded-lg bg-[#5B21B6] px-8 py-3 text-lg font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Join the Coven
            </Link>
            <a
              href="#about"
              className="rounded-lg border border-[#334155] px-8 py-3 text-lg text-[#94A3B8] transition-colors hover:border-[#94A3B8] hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
      </section>

      {/* What Is The Coven? */}
      <section id="about" className="bg-[#0F172A] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            What Is The Coven?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Community First",
                desc: "We're AI builders who lift other builders. Every feature rewards people who help others succeed.",
              },
              {
                title: "Open Source",
                desc: "The CovenAI framework is free and open source. Any community can deploy their own Coven.",
              },
              {
                title: "Earn by Contributing",
                desc: "Every action earns recognition -- from a thoughtful comment to a merged pull request to a tutorial helping someone deploy their first AI project.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#334155] bg-[#1E293B] p-6 transition-all hover:border-[#5B21B6] hover:shadow-[0_0_20px_rgba(91,33,182,0.15)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#F59E0B]">
                  {card.title}
                </h3>
                <p className="text-[#94A3B8]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier System */}
      <section id="tiers" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Medieval Ranks. Real Rewards.
          </h2>
          <p className="mb-12 text-center text-[#94A3B8]">
            Earn points through engagement, contributions, and challenges.
            Rise through 8 tiers from Apprentice to Legend.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border border-[#334155] p-5 transition-all hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                style={{
                  borderColor: `${tier.color}33`,
                  background: `linear-gradient(135deg, ${tier.bgColor}22, #1E293B)`,
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <span className="text-xs text-[#94A3B8]">
                    Tier {tier.rank}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-[#94A3B8]">
                  {tier.points} pts -- {tier.badge}
                </p>
                <p className="mt-2 text-sm text-white/80">{tier.reward}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#94A3B8]">
            Tiers reset annually. Year badges are permanent. A &quot;2026
            Legend&quot; badge proves you were there from the beginning.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#0F172A] px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Join",
                desc: "Sign up with GitHub or email. Link your social accounts (YouTube, TikTok, Instagram, LinkedIn, Discord).",
              },
              {
                step: "2",
                title: "Engage",
                desc: "Create content, comment, share, submit challenges, contribute code. Every real action earns points.",
              },
              {
                step: "3",
                title: "Earn",
                desc: "Rise through medieval ranks. Compete in weekly leagues. Win challenges. Unlock real rewards.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#5B21B6] text-2xl font-bold text-[#F59E0B]">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-[#94A3B8]">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[#94A3B8]">
            Points come from engagement, brand hashtags, challenges, referrals,
            and open source contributions.
          </p>
        </div>
      </section>

      {/* Leagues */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Weekly Leagues
          </h2>
          <p className="mb-12 text-center text-[#94A3B8]">
            Compete against 30 builders at your level. Top 5 promote. Bottom 5
            demote. Fresh start every Monday.
          </p>
          <div className="flex flex-col gap-2">
            {[...leagues].reverse().map((league, i) => (
              <div
                key={league}
                className={`rounded-lg border px-6 py-3 text-center font-medium transition-all ${
                  i === 0
                    ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                    : "border-[#334155] bg-[#1E293B] text-[#94A3B8]"
                }`}
              >
                {league}
                {i === 0 && (
                  <span className="ml-2 text-sm">-- Top 30 globally</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-[#0F172A] px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
            Weekly Challenges
          </h2>
          <p className="mb-10 text-center text-[#94A3B8]">
            Build something real. Share it. Get featured.
          </p>
          <div className="rounded-xl border border-[#334155] bg-[#1E293B] p-6">
            <div className="mb-2 text-sm text-[#94A3B8]">
              Current Challenge
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#F59E0B]">
              #ShipWithClaude Challenge
            </h3>
            <p className="mb-4 text-[#94A3B8]">
              Build something with AI this week. Post it with #ShipWithClaude.
              Best entries get featured on our channel.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#94A3B8]">
              <span>Entries: 47</span>
              <span>Deadline: Friday midnight UTC</span>
              <span className="text-[#F59E0B]">Prize: Featured + 100 pts</span>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#94A3B8]">
            Monthly challenges, seasonal &quot;Forge of Code&quot; events, and
            the annual &quot;12 Days of Claude Code&quot; in December.
          </p>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            Leaderboard
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#334155]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#334155] bg-[#0F172A]">
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">#</th>
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">Builder</th>
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">Tier</th>
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">Active</th>
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">Lifetime</th>
                  <th className="px-4 py-3 font-medium text-[#94A3B8]">Streak</th>
                </tr>
              </thead>
              <tbody>
                {mockLeaderboard.map((row) => {
                  const tierData = tiers.find((t) => t.name === row.tier);
                  return (
                    <tr
                      key={row.rank}
                      className="border-b border-[#334155] bg-[#1E293B] transition-colors hover:bg-[#334155]/50"
                    >
                      <td className="px-4 py-3 font-mono text-[#F59E0B]">
                        {row.rank}
                      </td>
                      <td className="px-4 py-3 font-medium">{row.name}</td>
                      <td className="px-4 py-3">
                        <span
                          className="rounded px-2 py-0.5 text-xs font-medium"
                          style={{
                            color: tierData?.color,
                            backgroundColor: `${tierData?.color}22`,
                          }}
                        >
                          {row.tier}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono">{row.active}</td>
                      <td className="px-4 py-3 font-mono text-[#94A3B8]">
                        {row.lifetime}
                      </td>
                      <td className="px-4 py-3 font-mono text-[#10B981]">
                        {row.streak}d
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-[#94A3B8]">
            Leaderboard launches with the platform. Join now to claim your spot.
          </p>
        </div>
      </section>

      {/* Open Source */}
      <section className="bg-[#0F172A] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Open Source. Free Forever.
          </h2>
          <p className="mb-8 text-lg text-[#94A3B8]">
            CovenAI is a free, open-source framework. Deploy your own Coven for
            your community. Customize tiers, points, and challenges. The
            framework that powers covenai.co is available on GitHub.
          </p>
          <a
            href="https://github.com/dstolts/covenai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-[#334155] px-8 py-3 font-medium text-white transition-colors hover:border-white"
          >
            View on GitHub
          </a>
          <p className="mt-4 text-sm text-[#94A3B8]">
            Built by Just In Time AI (jitai.co)
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Join the Coven?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Start as an Apprentice. Build your way to Legend. The 2026 founding
            year badge will be the rarest one forever.
          </p>
          <Link
            href="/join"
            className="inline-block rounded-lg bg-[#1E293B] px-10 py-4 text-lg font-bold text-[#F59E0B] transition-transform hover:scale-[1.02]"
          >
            Join the Coven
          </Link>
          <p className="mt-4 text-sm text-white/60">
            Free. Open source. No credit card.
          </p>
        </div>
      </section>
    </div>
  );
}
