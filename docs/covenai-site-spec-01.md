# CovenAI Site Spec (covenai.co)
**Created:** 2026-03-24
**Status:** SPEC -- ready to build
**Tech:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, Vercel
**Domain:** covenai.co (primary), covenai.ai (redirect)

## Purpose
Landing page + community hub for The Coven. Registration, leaderboard, tier system, challenges.

## Pages

### 1. Landing Page (/)
- Hero: "Build with AI. Earn your rank." + CovenAI logo
- What is The Coven? (3 sentences from brand identity)
- Tier chart (visual, 8 tiers with badges and rewards)
- How it works (3 steps: Join, Engage, Earn)
- Current challenge preview
- Top 10 leaderboard preview
- CTA: "Join the Coven" -> /join
- Footer: links to Discord, GitHub, jitai.co, social

### 2. Leaderboard (/leaderboard)
- Global leaderboard (top 50, all-time by lifetime points)
- Weekly league standings (your league of 30)
- Tier filter (show all / filter by rank)
- Search by username
- Each row: rank badge, username, active points, lifetime points, streak, tier
- "Share my rank" button (generates shareable card image)

### 3. Join / Register (/join)
- GitHub OAuth sign-in (primary -- dev audience)
- Email sign-in (secondary)
- Link social accounts: YouTube, TikTok, Instagram, LinkedIn, Discord
- Choose display name
- Auto-assigned: Apprentice rank, 0 points

### 4. Profile (/profile/[username])
- Public profile page
- Display: username, tier badge, active rank, lifetime points, streak
- Year badges (2026 Legend, etc.)
- Challenge history
- Team affiliation
- Social links
- Activity feed (recent point-earning actions)

### 5. Challenges (/challenges)
- Current weekly challenge (deadline countdown, entries so far)
- Past challenges (winners, entries)
- Monthly challenge
- "Forge of Code" seasonal event (when active)
- Entry submission form (link to post/video/screenshot)

### 6. Teams (/teams)
- Team leaderboard (top 20 teams)
- Team detail page: members, combined points, project link
- "Create a team" form (3-5 members, repo URL or story URL)

### 7. Tiers (/tiers)
- Visual tier progression chart
- Each tier: badge, name, points required, rewards, unlocks
- "Your progress" bar (if logged in)
- Annual rolling badges explanation

### 8. About (/about)
- What is CovenAI? (from brand identity)
- Mission, values
- Open source framework link (github.com/dstolts/covenai)
- Created by Just In Time AI (jitai.co)

## Tech Architecture

### Frontend
- Next.js 16 App Router
- Tailwind CSS 4 (dark theme default, medieval aesthetic)
- Radix UI components (consistent with jitai)
- Server components by default, client components for interactive pieces

### Backend / API
- Next.js API routes for leaderboard data, registration, profile updates
- OR external API if we want to keep site static and use N8N for data

### Database
- Option A: Azure SQL (JitAutomation DB on DEVINFRAVM -- same as other projects)
- Option B: Supabase (free tier, PostgreSQL, built-in auth -- faster to ship)
- Option C: Firebase (Dan already has Firebase from AuthFirebase project)
- RECOMMENDATION: Azure SQL for consistency with Dan's stack. Tables: Users, Engagements, Points, Streaks, Leagues, Challenges, Teams

### Auth
- GitHub OAuth (NextAuth.js / Auth.js)
- Email magic link (Resend -- already in Dan's stack)

### Hosting
- Vercel (same as jitai, free tier for MVP)
- Custom domain: covenai.co

### Data Flow
```
Social platforms -> N8N scrapers -> SQL tables -> API routes -> Leaderboard UI
                                                            -> Profile UI
                                                            -> Challenge UI
User actions -> GitHub OAuth -> SQL (Users) -> Points calculation
```

## MVP Scope (Ship Fast)

### Phase 1: Static Landing (Day 1)
- Landing page with brand, tier chart, Discord link, GitHub link
- No auth, no database -- just a beautiful static page
- Deploy to Vercel on covenai.co
- This is what Dan links to in videos: "covenai.co"

### Phase 2: Auth + Profiles (Week 1)
- GitHub OAuth
- User registration with social account linking
- Basic profile page
- Deploy

### Phase 3: Leaderboard (Week 2)
- SQL tables created
- Manual point entry (N8N automation comes later)
- Leaderboard page with real data
- Weekly league display

### Phase 4: Challenges + Teams (Week 3-4)
- Challenge submission form
- Team creation and team leaderboard
- Notification emails via Resend

### Phase 5: Automation (Month 2)
- N8N workflows scraping all platforms
- Automated point calculation
- Streak tracking
- Real-time leaderboard updates

## Design Notes
- Dark theme by default (matches terminal/code aesthetic)
- Medieval accent: stone textures at 5-10% opacity, serif headings, gold accents
- Mobile-first (most traffic from social link clicks on phones)
- Fast: no heavy animations, instant page loads (SSR/SSG)
- Accessible: WCAG AA minimum
- ASCII only in all content (Dan's rule)
