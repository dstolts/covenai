# CovenAI

Open-source community engagement framework with gamification, leaderboards, and medieval-themed tier system. Built for AI builders who care about community and giving back.

## Status
- **Phase:** Pre-Launch (planning complete, site build next)
- **Trademark:** USPTO Serial #99720370, filed 2026-03-24, intent-to-use (1b), Classes 9+42

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Database:** Azure SQL (JitAutomation on DEVINFRAVM) -- planned
- **Hosting:** Vercel
- **Auth:** GitHub OAuth (NextAuth/Auth.js) + Resend magic links
- **Key Dependencies:** React 19, Radix UI, Tailwind CSS 4

## Domains
- **Primary:** covenai.co
- **Redirect:** covenai.ai
- **Monitoring:** covenai.com (for sale, N8N price monitor active)

## Key Paths
- **Entry Point:** app/layout.tsx, app/page.tsx (to be created)
- **Docs:** docs/ (brand, community, legal, gamification spec, site spec)
- **Assets:** assets/ (logo, badges, banners -- to be generated)

## Key Components (Planned)
- Landing page (/) -- brand, tier chart, join CTA
- Leaderboard (/leaderboard) -- global + weekly league standings
- Join/Register (/join) -- GitHub OAuth, social account linking
- Profile (/profile/[username]) -- rank, points, badges, history
- Challenges (/challenges) -- weekly/monthly/seasonal
- Teams (/teams) -- OSS project teams (3-5 members)
- Tiers (/tiers) -- visual progression chart
- About (/about) -- mission, values, open source

## Integration Points
- N8N: engagement scraping workflows (YouTube, TikTok, IG, LinkedIn, Discord, Reddit, GitHub)
- Resend: notification emails (tier promotions, streak warnings, weekly summaries)
- Discord: Arcane bot for tier roles, XP tracking
- GitHub: contribution tracking for OSS points
- JitNeuro: the Claude Code framework that CovenAI content promotes
- jitai.co: parent company brand

## Brand
- **Name:** CovenAI (one word, capital C and AI)
- **Casual:** "The Coven"
- **Tagline:** "Build with AI. Earn your rank."
- **Aesthetic:** Medieval/mystical + modern terminal
- **Colors:** Deep purple (#5B21B6), gold (#F59E0B), dark slate (#1E293B), emerald (#10B981)
- **Audio:** Medieval/folk sonic logo (lute/hurdy-gurdy motif + digital transition)
- See docs/brand/ for full identity, image prompts, audio strategy

## Gamification
- 7 tiers: Apprentice -> Scribe -> Builder -> Architect -> Sage -> Master -> Archon -> Legend
- Weekly leagues (30 people, promotion/demotion)
- Annual rolling badges (2026 Legend is permanent forever)
- Lifetime points (never reset) + active points (annual reset)
- Brand hashtag multipliers: 10x #aiboatmechanic/#aifieldsupport, 5x #jitai, 1x #jitneuro
- OSS contribution points (25-100 per merged PR)
- Team system (3-5 people, public or private repo + story)
- See docs/gamification-spec-01.md for full system

## Environment Variables (Planned)
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` -- OAuth
- `RESEND_API_KEY` -- notifications
- `DATABASE_URL` -- Azure SQL connection
- `NEXTAUTH_SECRET` -- session encryption

## Common Commands
```bash
pnpm dev     # Start development server
pnpm build   # Production build
pnpm start   # Start production server
```

## Notes
- Always use "CovenAI" as one word (not "Coven AI") -- differentiates from crypto entity at covenai.org
- FirstMover repo stays live until CovenAI replaces it
- Dark theme by default (matches terminal/code aesthetic)
- Mobile-first (most traffic from social link clicks)
- ASCII only in all content

## DOE Context
- **Created:** 2026-03-24
- **Session:** jitneuro-marketing
