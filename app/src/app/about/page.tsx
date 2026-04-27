export const metadata = {
  title: "About - CovenAI",
  description: "What is CovenAI? An open-source community engagement framework for AI builders.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold sm:text-4xl">About CovenAI</h1>

        <div className="space-y-6 text-[#94A3B8]">
          <p className="text-lg text-white">
            CovenAI is an open-source community engagement framework built for
            people who care about two things equally: community and AI.
          </p>

          <p>
            A coven is a gathering of people bound by shared knowledge and
            purpose. CovenAI is a gathering of builders -- developers, creators,
            and leaders who believe AI should lift everyone, not just the few
            who can afford it.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-white">Mission</h2>
          <p className="text-lg text-[#F59E0B] font-medium">
            Grow together. Build with AI. Give back.
          </p>
          <p>
            CovenAI connects AI builders into a community where sharing
            knowledge is rewarded, helping others is valued, and the best ideas
            come from collaboration, not isolation.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-white">Values</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Community First</h3>
              <p>
                Builders who lift other builders. Thread starters earn more than
                solo commenters. Teams earn more than individuals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Open Source, Open Knowledge</h3>
              <p>
                The CovenAI framework is free and open source. Any community can
                deploy their own Coven.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">AI for Everyone</h3>
              <p>
                AI should not be locked behind enterprise paywalls. CovenAI
                rewards people who teach, demonstrate, and share practical AI
                knowledge.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Earn by Contributing</h3>
              <p>
                Your rank reflects your impact on the community, not your tenure
                or title.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Ship Over Talk</h3>
              <p>
                We value builders who ship real things over theorists who debate.
                Challenges reward completed projects.
              </p>
            </div>
          </div>

          <h2 className="pt-4 text-2xl font-bold text-white">Open Source</h2>
          <p>
            The CovenAI framework is available on{" "}
            <a
              href="https://github.com/dstolts/covenai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B21B6] hover:text-[#7C3AED]"
            >
              GitHub
            </a>
            . Built by{" "}
            <a
              href="https://jitai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5B21B6] hover:text-[#7C3AED]"
            >
              Just In Time AI
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
