---
name: covenai
type: engram
domains:
  - covenai
  - CovenAI
  - community
  - gamification
  - leaderboard
  - medieval-tiers
  - nextjs
status: production
version: 2026-05-11
repo: dstolts/covenai
last-verified: 2026-05-11
owner: dstolts
---

# Engram: CovenAI

## Identity
- **What:** Open-source community engagement framework -- gamification, leaderboards, medieval-themed tiers, challenges, team system
- **Brand:** CovenAI (one word). Casual: "The Coven". NEVER "Coven AI" (two words -- that's a crypto entity at covenai.org)
- **Tech:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Vercel. Azure SQL planned.
- **Status:** Pre-launch. Planning complete (24 docs). Trademark filed (Serial #99720370, 2026-03-24). Site build next.
- **Repo:** c:\users\dstolts\code\Futures\CovenAI (local), github.com/dstolts/covenai (to create)
- **Domains:** covenai.co (primary), covenai.ai (redirect)

## Mission
"Grow together. Build with AI. Give back." Community for AI builders who care about community and giving back equally.

## Architecture (Planned)
- Next.js App Router site at covenai.co
- 8 pages: landing, leaderboard, join, profile, challenges, teams, tiers, about
- GitHub OAuth + Resend magic link auth
- Azure SQL for points, users, streaks, leagues, challenges, teams
- N8N workflows for cross-platform engagement scraping (YT, TikTok, IG, LI, Discord, Reddit, GitHub)
- Resend for notification emails

## Gamification System
- 7 medieval tiers: Apprentice (0) -> Scribe (25) -> Builder (100) -> Architect (300) -> Sage (750) -> Master (1500) -> Archon (3000) -> Legend (6000+)
- Point sources: engagement (1-10 pts), brand hashtags (3-30 pts with multipliers), challenges (25-100 pts), OSS contributions (10-100 pts), referrals (15 pts + 5% passive), first responder bonus (10 pts)
- Brand hashtag multipliers: 10x #aiboatmechanic/#aifieldsupport, 5x #jitai, 1x #jitneuro and others
- Weekly leagues (Duolingo model): 30 people, top 5 promote, bottom 5 demote, weekly reset
- Annual rolling badges: active rank resets Jan 1, year-badge permanent forever (e.g., "2026 Legend")
- Lifetime points: never reset, bragging rights counter, tiebreaker
- Streak multipliers: 7-day (1.5x), 14-day (1.75x), 30-day (2x), streak freeze costs 50 pts
- Team system: 3-5 contributors, public repo OR private repo + published story
- Prize budget: $250/mo base, +$250 at milestones (50K, 100K, 250K, 500K, 1M, 2M, 3M followers)
- Full spec: c:\users\dstolts\code\Futures\CovenAI\docs\gamification-spec-01.md

## Content (Marketing)
- 95 video scripts at c:\users\dstolts\code\Automation\Projects\JitNeuro-Marketing\scripts\
- 5 "Mastery" series (10 episodes each): Claude Code, Session, Memory, Thinking, Multi-Agent
- 35 standalone shorts + 10 deep dives
- All platforms: YouTube Shorts, Instagram Reels, TikTok, LinkedIn
- Companion: 8 Ghost blog drafts ready, 6 social post variations ready
- Community engagement plan: 26 Discord/community targets ranked in 3 tiers

## Key Files
| File | Purpose |
|------|---------|
| CLAUDE.md | Project passport (tech stack, brand, gamification overview) |
| docs/gamification-spec-01.md | Full gamification system spec |
| docs/covenai-site-spec-01.md | Site architecture, pages, build phases |
| docs/brand/covenai-brand-identity-01.md | Mission, values, voice, visual/audio identity |
| docs/brand/covenai-image-prompts-01.md | Logo, badges, banners, thumbnail prompts |
| docs/brand/audio-branding-01.md | Sonic logo concept, audio cue kit |
| docs/community/discord-setup-guide-01.md | Discord server activation (Arcane bot, 25 channels) |
| docs/legal/covenai-legal-validation-01.md | Trademark research, conflict analysis |

## Integrations
- JitNeuro (jitneuro.ai): the Claude Code framework that CovenAI content promotes
- jitai.co: parent company (Just In Time AI, Inc.)
- AIBoatMechanic + AIFieldSupport: paid products promoted via hashtag multipliers
- N8N: automation engine for engagement scraping + notifications
- Discord: community hub with Arcane bot for tier roles
- Ghost (jitsage.azurewebsites.net): blog platform for companion content

## Gotchas
- "CovenAI" always one word -- the crypto entity covenai.org uses "Coven AI" (two words), their site/docs are down, token is dead
- covenai.com is for sale (~$9,888) -- N8N workflow monitors price daily
- Trademark is intent-to-use -- must show commercial use before registration finalizes (6 months + extensions up to 3 years)
- FirstMover stays live until CovenAI replaces it -- don't touch FirstMover repo
- Dark theme by default (terminal aesthetic)
- ASCII only everywhere
