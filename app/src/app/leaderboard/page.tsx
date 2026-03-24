import { tiers, mockLeaderboard } from "@/lib/tiers";

export const metadata = {
  title: "Leaderboard - CovenAI",
  description: "Global leaderboard and weekly league standings for CovenAI builders.",
};

export default function LeaderboardPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Leaderboard</h1>
        <p className="mb-10 text-[#94A3B8]">
          Global rankings by lifetime points. Weekly league standings coming soon.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#334155]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]">
                <th className="px-4 py-3 font-medium text-[#94A3B8]">#</th>
                <th className="px-4 py-3 font-medium text-[#94A3B8]">Builder</th>
                <th className="px-4 py-3 font-medium text-[#94A3B8]">Tier</th>
                <th className="px-4 py-3 font-medium text-[#94A3B8]">Active Pts</th>
                <th className="px-4 py-3 font-medium text-[#94A3B8]">Lifetime Pts</th>
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
                    <td className="px-4 py-3 font-mono text-[#F59E0B]">{row.rank}</td>
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
                    <td className="px-4 py-3 font-mono text-[#94A3B8]">{row.lifetime}</td>
                    <td className="px-4 py-3 font-mono text-[#10B981]">{row.streak}d</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-center text-sm text-[#94A3B8]">
          Full leaderboard with search, league standings, and tier filters coming soon.
        </p>
      </div>
    </div>
  );
}
