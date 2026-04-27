# CovenAI Hub
**Created:** 2026-03-24
**Last Updated:** 2026-03-24

## covenai-build (autonomous build session)
**Last Updated:** 2026-03-24
**Session:** covenai-build
**Branch:** uat
**Status:** Phase 1 prep COMPLETE. All automated tasks done. Awaiting Dan for manual steps.

### Completed This Session
- [x] Init git repo, push to github.com/dstolts/covenai (2026-03-24)
- [x] Create decision log at .HUB/Decision-Log-01.md (2026-03-24)
- [x] Write Lovable prompt for landing page (docs/lovable-prompt-01.md) (2026-03-24)
- [x] Build Discord server content package (8 files in docs/discord/) (2026-03-24)
- [x] Generate logo and 8 tier badges via Imagen 4 (assets/logos/, assets/badges/) (2026-03-24)
- [x] Generate social banner, OG image, 2026 Legend badge (2026-03-24)
- [x] Scaffold Next.js 16 app with all 8 pages + dark theme (app/) (2026-03-24)
- [x] Create N8N domain price monitor workflow (automation/) (2026-03-24)
- [x] Create social media profile content (docs/social/) (2026-03-24)
- [x] Create Vercel deployment config (app/vercel.json) (2026-03-24)
- [x] Create README.md with full project description (2026-03-24)
- [x] Create database schema SQL for Phase 2 (database/schema-01.sql) (2026-03-24)
- [x] Set GitHub repo topics, homepage, description (2026-03-24)
- [x] Copy logo to app/public, set up favicon and OG metadata (2026-03-24)
- [x] Create GitHub issue/PR templates with CovenAI points (2026-03-24)
- [x] Create MIT LICENSE (2026-03-24)
- [x] Create CONTRIBUTING.md with points table (2026-03-24)
- [x] Create email notification templates for Resend (5 templates) (2026-03-24)

### Pending (Requires Dan)
- [ ] Paste Lovable prompt to generate landing page (docs/lovable-prompt-01.md)
- [ ] Register @covenai on social platforms (Twitter/X, IG, TikTok, LinkedIn, YouTube)
- [ ] Create Discord server using docs/discord/ content package
- [ ] Deploy Lovable landing page to covenai.co via Vercel
- [ ] Review and run database schema (database/schema-01.sql)
- [ ] Import N8N domain price monitor workflow (automation/n8n-domain-price-monitor.json)
- [ ] Review generated assets (assets/) -- approve or request regeneration
- [ ] Merge uat -> master when satisfied
- [ ] Connect Vercel to covenai.co domain

### Assets Generated (13 total)
| Asset | Path | Quality |
|-------|------|---------|
| Logo (geometric sigil) | assets/logos/covenai-logo-sigil.png | Excellent -- gold/purple, code brackets, hexagonal |
| Discord icon | assets/logos/covenai-discord-icon.png | Good -- works at small sizes |
| Apprentice badge | assets/badges/tier-0-apprentice.png | Excellent -- wooden shield with </> |
| Scribe badge | assets/badges/tier-1-scribe.png | Good -- bronze scroll |
| Builder badge | assets/badges/tier-2-builder.png | Good -- silver hammer |
| Architect badge | assets/badges/tier-3-architect.png | Good -- gold compass |
| Sage badge | assets/badges/tier-4-sage.png | Good -- emerald eye |
| Master badge | assets/badges/tier-5-master.png | Good -- ruby crown |
| Archon badge | assets/badges/tier-6-archon.png | Good -- diamond tower |
| Legend badge | assets/badges/tier-7-legend.png | Excellent -- obsidian throne, circuit gold |
| Social banner | assets/banners/social-banner.png | Good -- wide format |
| OG image | assets/social/og-image.png | Good -- link preview |
| 2026 Legend year badge | assets/badges/year-2026-legend.png | Good -- inaugural year |

**Decisions:** See .HUB/Decision-Log-01.md (15 decisions logged)
**Files:** 50+ files created across app/, docs/, assets/, automation/, database/, .github/

## BUILD PLAN

### Phase 1: Landing Page (Lovable) -- PREP COMPLETE
- [x] Write detailed Lovable prompt with full brand identity, colors, copy, tier chart
- [ ] Dan pastes into Lovable, gets beautiful landing page in ~10 min
- [ ] Deploy to covenai.co (Vercel or Lovable hosting)
- Pages: hero, what is the coven, tier chart, how it works, join CTA, footer
- NO auth, NO database -- pure marketing/landing page

### Phase 2: Backend + Leaderboard (Claude Code) -- SCAFFOLDED
- [x] Next.js 16 app scaffolded with all 8 routes
- [x] Database schema designed (database/schema-01.sql)
- [ ] Next.js API routes for leaderboard data, user registration, point tracking
- [ ] Azure SQL tables created (Dan runs migration)
- [ ] GitHub OAuth (NextAuth/Auth.js) + Resend magic links
- [ ] Leaderboard page with real data
- [ ] Profile pages with real data

### Phase 3: Automation (N8N)
- [x] Domain price monitor workflow ready (automation/n8n-domain-price-monitor.json)
- [x] Email notification templates ready (automation/email-templates/)
- [ ] Engagement scraping workflows (YouTube, TikTok, IG, LinkedIn, Discord, Reddit, GitHub)
- [ ] Brand hashtag scanner
- [ ] Point calculation + league promotion/demotion jobs
- [ ] Notification emails via Resend

### Phase 4: Community Activation
- [x] Discord server content package ready (docs/discord/ - 8 files)
- [x] Social media profile content ready (docs/social/profile-content-01.md)
- [ ] Create Discord server (Dan -- 15 min with content package)
- [ ] Join 6 Tier 1 Discord communities
- [ ] Start Reddit engagement
- [ ] Launch #ShipWithClaude hashtag challenge
- [ ] Set up TikTok account + beehiiv newsletter

### Phase 5: Content Launch
- [ ] Record Claude Code Mastery Days 1-10 (launch burst)
- [ ] Post to all 4 platforms simultaneously
- [ ] Publish 8 Ghost blog drafts
- [ ] Week 1 burst: 3-5 shorts/day

## COMPLETED (from jitneuro-marketing session)
- 95 video scripts (35 shorts + 10 deep dives + 50 Mastery series)
- Gamification spec, brand identity, audio branding, site spec
- Discord setup guide, Reddit strategy, community engagement plan (26 communities)
- 4 research reports (gamification, leaderboards, audio, 0-to-1M playbooks)
- USPTO trademark filed: Serial #99720370, Classes 9+42, $700
- Domains: covenai.co + covenai.ai purchased
- Engram, bundle, routing weights created
- Trust zones: ALL GREEN (pre-launch)

## DECISIONS
- 2026-03-24: Phase 1 landing page via Lovable (visual, fast). Phase 2+ backend via Claude Code (logic, API, database).
- 2026-03-24: All trust zones GREEN until production launch.
- 2026-03-24: Leave FirstMover alone until CovenAI replaces it.
- 2026-03-24: Full decision log at .HUB/Decision-Log-01.md (15 decisions)

## BUDGET TRACKER
| Item | Cost | Status |
|------|------|--------|
| covenai.co domain | $18 | DONE |
| covenai.ai domain | $210 | DONE |
| USPTO trademark (2 classes) | $700 | DONE |
| Imagen 4 asset generation (13 images) | ~$0.87 | DONE |
| Sonic logo commission | ~$200 | PENDING |
| Tier badge art commission | ~$300 | PENDING (AI-generated versions available now) |
| Spark Ads (Month 2) | ~$500 | RESERVED |
| covenai.com domain reserve | ~$500 | RESERVED |
| Guild prizes (Month 1-2) | ~$250 | PENDING |
| **Subtotal spent** | **$929** | |
| **Budget** | **$2,500** | |
| **Remaining** | **$1,571** | |
