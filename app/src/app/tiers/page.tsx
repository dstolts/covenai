import { tiers } from "@/lib/tiers";

export const metadata = {
  title: "Tiers - CovenAI",
  description: "Medieval tier system with real rewards. Rise from Apprentice to Legend.",
};

export default function TiersPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Tier System</h1>
        <p className="mb-10 text-[#94A3B8]">
          8 medieval ranks. Real rewards at every level. Annual badges that last forever.
        </p>

        <div className="space-y-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-xl border p-6 transition-all"
              style={{
                borderColor: `${tier.color}44`,
                background: `linear-gradient(135deg, ${tier.bgColor}33, #1E293B)`,
              }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span
                      className="inline-block h-4 w-4 rounded-full"
                      style={{ backgroundColor: tier.color }}
                    />
                    <span className="text-sm text-[#94A3B8]">Tier {tier.rank}</span>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: tier.color }}>
                    {tier.name}
                  </h2>
                  <p className="mt-1 text-sm text-[#94A3B8]">
                    {tier.points} points -- {tier.badge}
                  </p>
                </div>
                <div className="text-sm text-white/80 sm:text-right">
                  {tier.reward}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#334155] bg-[#0F172A] p-6">
          <h3 className="mb-3 text-lg font-bold text-[#F59E0B]">Annual Rolling Badges</h3>
          <p className="text-[#94A3B8]">
            Active points reset every January 1. Your tier rank is
            &quot;minted&quot; as a permanent year badge (e.g., &quot;2026
            Legend&quot;). Lifetime points never reset. Year badges are
            collectible trophies that prove your rank in each year.
          </p>
          <p className="mt-3 text-sm text-[#94A3B8]">
            The 2026 founding year badges will be the rarest forever -- they
            can never be earned again.
          </p>
        </div>
      </div>
    </div>
  );
}
