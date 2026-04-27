export const metadata = {
  title: "Challenges - CovenAI",
  description: "Weekly and monthly challenges for CovenAI builders.",
};

export default function ChallengesPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Challenges</h1>
        <p className="mb-10 text-[#94A3B8]">
          Build something real. Share it. Get featured. Earn points.
        </p>

        {/* Current Challenge */}
        <div className="mb-8 rounded-xl border border-[#F59E0B]/30 bg-[#0F172A] p-6">
          <div className="mb-1 text-sm text-[#94A3B8]">Current Weekly Challenge</div>
          <h2 className="mb-3 text-2xl font-bold text-[#F59E0B]">
            #ShipWithClaude
          </h2>
          <p className="mb-4 text-[#94A3B8]">
            Build something with AI this week. Post it on any platform with
            #ShipWithClaude. Best entries get featured on our channel and earn
            100 bonus points.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="rounded bg-[#1E293B] px-3 py-1 text-[#94A3B8]">
              Entries: 47
            </span>
            <span className="rounded bg-[#1E293B] px-3 py-1 text-[#94A3B8]">
              Deadline: Friday midnight UTC
            </span>
            <span className="rounded bg-[#F59E0B]/10 px-3 py-1 text-[#F59E0B]">
              Prize: Featured + 100 pts
            </span>
          </div>
        </div>

        {/* Monthly Challenge */}
        <div className="mb-8 rounded-xl border border-[#334155] bg-[#0F172A] p-6">
          <div className="mb-1 text-sm text-[#94A3B8]">Monthly Challenge</div>
          <h2 className="mb-3 text-xl font-bold">Build a Complete Project</h2>
          <p className="mb-4 text-[#94A3B8]">
            Build a complete, working project using AI coding tools this month.
            Judged on creativity, utility, and community value. Top 3 win prizes
            from the tier reward pool.
          </p>
          <span className="rounded bg-[#1E293B] px-3 py-1 text-sm text-[#94A3B8]">
            Coming soon
          </span>
        </div>

        {/* Seasonal Event */}
        <div className="rounded-xl border border-[#334155] bg-[#0F172A] p-6">
          <div className="mb-1 text-sm text-[#94A3B8]">Seasonal Event</div>
          <h2 className="mb-3 text-xl font-bold">Forge of Code</h2>
          <p className="mb-4 text-[#94A3B8]">
            90-day team challenge. Form a team of 3-5, build a complete project,
            compete for the quarterly grand prize. Winning team gets a group
            coaching session and featured case study.
          </p>
          <span className="rounded bg-[#1E293B] px-3 py-1 text-sm text-[#94A3B8]">
            Launching Q2 2026
          </span>
        </div>

        <p className="mt-8 text-center text-sm text-[#94A3B8]">
          Challenge submissions and voting system launching with the platform.
        </p>
      </div>
    </div>
  );
}
