# CovenAI

**Build with AI. Earn your rank.**

CovenAI is an open-source community engagement framework with gamification, leaderboards, and a medieval-themed tier system. Built for AI builders who care about community and giving back.

## What Is The Coven?

A coven is a gathering of people bound by shared knowledge and purpose. CovenAI is a gathering of builders -- developers, creators, and leaders who believe AI should lift everyone, not just the few who can afford it.

**Mission:** Grow together. Build with AI. Give back.

## Tier System

Rise through 8 medieval ranks by contributing to the community:

| Tier | Rank | Points | Badge | Key Reward |
|------|------|--------|-------|------------|
| 0 | Apprentice | 0 | Wooden shield | Leaderboard access |
| 1 | Scribe | 25 | Bronze scroll | Quick-start guide |
| 2 | Builder | 100 | Silver hammer | Free training module |
| 3 | Architect | 300 | Gold compass | Full training course |
| 4 | Sage | 750 | Emerald eye | Tool license + monthly Q&A |
| 5 | Master | 1,500 | Ruby crown | 1:1 coaching session |
| 6 | Archon | 3,000 | Diamond tower | Annual tool bundle |
| 7 | Legend | 6,000+ | Obsidian throne | Co-host videos + all rewards |

Active points reset annually. Year badges are permanent -- a "2026 Legend" badge proves you were there from the beginning.

## How It Works

1. **Join** -- Sign up with GitHub or email at [covenai.co](https://covenai.co)
2. **Engage** -- Create content, comment, share, submit challenges, contribute code
3. **Earn** -- Rise through ranks, compete in weekly leagues, win challenges, unlock rewards

Points come from engagement, brand hashtags, challenges, referrals, and open source contributions.

## Weekly Leagues

Compete against 30 builders at your level. Top 5 promote. Bottom 5 demote. Fresh start every Monday.

Bronze -> Silver -> Gold -> Platinum -> Diamond -> Champion (Top 30 globally)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Azure SQL (planned)
- **Auth:** GitHub OAuth + Resend magic links
- **Hosting:** Vercel
- **Automation:** N8N (engagement scraping, point calculation)

## Getting Started

```bash
cd app
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
covenai/
  app/           # Next.js 16 application
    src/
      app/       # App Router pages
      components/ # Shared components
      lib/       # Shared utilities and data
  assets/        # Logos, badges, banners
  automation/    # N8N workflow JSON files
  docs/          # Specs, brand identity, community guides
  .HUB/          # Project hub and decision log
```

## Contributing

CovenAI is open source and welcomes contributions. See the [gamification spec](docs/gamification-spec-01.md) for the full system design.

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a PR

Every merged PR earns CovenAI points (25-100 depending on scope).

## Links

- **Website:** [covenai.co](https://covenai.co)
- **Parent company:** [Just In Time AI](https://jitai.co)
- **Framework:** Built with [JitNeuro](https://jitneuro.ai)

## License

MIT

---

2025-2026 Just In Time AI, Inc.
