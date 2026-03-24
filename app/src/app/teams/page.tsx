export const metadata = {
  title: "Teams - CovenAI",
  description: "Open source project teams competing in CovenAI.",
};

export default function TeamsPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Teams</h1>
        <p className="mb-10 text-[#94A3B8]">
          Form teams of 3-5 around real open source projects. Compete together.
          Win together.
        </p>

        <div className="rounded-xl border border-[#334155] bg-[#0F172A] p-8 text-center">
          <h2 className="mb-3 text-xl font-bold text-[#F59E0B]">
            Team registration opening soon
          </h2>
          <p className="text-[#94A3B8]">
            Teams must have a project that uses JitNeuro or any AI coding
            framework. Public repos link directly. Private repos qualify by
            publishing a story showing how the team uses AI in their project.
          </p>
          <p className="mt-4 text-sm text-[#94A3B8]">
            Top team each quarter earns a group coaching session with Dan.
          </p>
        </div>
      </div>
    </div>
  );
}
