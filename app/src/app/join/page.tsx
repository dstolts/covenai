import Link from "next/link";

export const metadata = {
  title: "Join the Coven - CovenAI",
  description: "Sign up with GitHub or email to join CovenAI and start earning your rank.",
};

export default function JoinPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-3xl font-bold">Join the Coven</h1>
        <p className="mb-8 text-center text-[#94A3B8]">
          Start as an Apprentice. Every contribution earns points.
        </p>

        <div className="rounded-xl border border-[#334155] bg-[#0F172A] p-8">
          <button
            className="mb-4 flex w-full items-center justify-center gap-3 rounded-lg bg-[#1E293B] border border-[#334155] px-4 py-3 font-medium text-white transition-colors hover:border-[#94A3B8]"
            disabled
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Continue with GitHub
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#334155]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#0F172A] px-3 text-[#94A3B8]">or</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm text-[#94A3B8]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#334155] bg-[#1E293B] px-4 py-3 text-white placeholder-[#64748B] focus:border-[#5B21B6] focus:outline-none"
              disabled
            />
          </div>

          <button
            className="w-full rounded-lg bg-[#5B21B6] px-4 py-3 font-medium text-white opacity-50 cursor-not-allowed"
            disabled
          >
            Send Magic Link
          </button>

          <p className="mt-4 text-center text-xs text-[#94A3B8]">
            Registration opens soon. Join the waitlist above.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-[#94A3B8]">
          Already have an account?{" "}
          <Link href="/" className="text-[#5B21B6] hover:text-[#7C3AED]">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
