import { tiers } from "@/lib/tiers";
import Link from "next/link";

export function generateMetadata({ params }: { params: { username: string } }) {
  return {
    title: `${params.username} - CovenAI Profile`,
    description: `View ${params.username}'s rank, points, badges, and activity on CovenAI.`,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  // Mock profile data -- will be replaced with DB query
  const profile = {
    username,
    displayName: username.replace("@", ""),
    tier: 4,
    activePoints: 1245,
    lifetimePoints: 4567,
    streak: 14,
    league: "Gold",
    yearBadges: [{ year: 2026, tier: "Sage" }],
    joinedDate: "2026-03-24",
  };

  const tierData = tiers[profile.tier];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-[#334155] bg-[#0F172A] p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{profile.displayName}</h1>
              <p className="text-[#94A3B8]">@{profile.username}</p>
            </div>
            <span
              className="rounded-lg px-3 py-1 text-sm font-bold"
              style={{
                color: tierData.color,
                backgroundColor: `${tierData.color}22`,
                border: `1px solid ${tierData.color}44`,
              }}
            >
              {tierData.name}
            </span>
          </div>

          {/* Stats */}
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-[#1E293B] p-4 text-center">
              <div className="text-2xl font-bold text-[#F59E0B]">
                {profile.activePoints.toLocaleString()}
              </div>
              <div className="text-xs text-[#94A3B8]">Active Points</div>
            </div>
            <div className="rounded-lg bg-[#1E293B] p-4 text-center">
              <div className="text-2xl font-bold">
                {profile.lifetimePoints.toLocaleString()}
              </div>
              <div className="text-xs text-[#94A3B8]">Lifetime Points</div>
            </div>
            <div className="rounded-lg bg-[#1E293B] p-4 text-center">
              <div className="text-2xl font-bold text-[#10B981]">
                {profile.streak}d
              </div>
              <div className="text-xs text-[#94A3B8]">Streak</div>
            </div>
            <div className="rounded-lg bg-[#1E293B] p-4 text-center">
              <div className="text-2xl font-bold">{profile.league}</div>
              <div className="text-xs text-[#94A3B8]">League</div>
            </div>
          </div>

          {/* Year Badges */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-medium text-[#94A3B8]">
              Year Badges
            </h2>
            <div className="flex gap-2">
              {profile.yearBadges.map((badge) => (
                <span
                  key={badge.year}
                  className="rounded border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1 text-sm text-[#F59E0B]"
                >
                  {badge.year} {badge.tier}
                </span>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div>
            <h2 className="mb-3 text-sm font-medium text-[#94A3B8]">
              Recent Activity
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Activity feed coming soon. Member since{" "}
              {new Date(profile.joinedDate).toLocaleDateString()}.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/leaderboard"
            className="text-sm text-[#5B21B6] hover:text-[#7C3AED]"
          >
            Back to Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}
