# Gamification System Spec -- Claude Code Deep Dive Series
**Created:** 2026-03-24
**Status:** STRATEGY MODE -- needs Dan approval before execution
**Updated:** 2026-03-24 (Dan's refinements: brand hashtags, annual badges, OSS teams, contribution points, budget tiers)
**Objective:** 1M followers across all platforms by end of 2026

## System Name: "The Coven" (CovenAI)
**Domains:** covenai.co (primary), covenai.ai (redirect)
**Repo:** github.com/dstolts/covenai (to be created)
**Framework:** Open-source community engagement framework (evolved from FirstMover badge concept)
Theme: medieval/coven aesthetic (matches audio branding). Members are "Builders."
Tagline: "Build with AI. Earn your rank."

---

## 1. POINT STRUCTURE

### Base Engagement Points
| Action | Points | Cooldown | Notes |
|--------|--------|----------|-------|
| Like a video/post | 1 | None | Lowest effort = lowest reward |
| Love/Heart reaction | 2 | None | Slightly more intentional |
| "More" / Save / Bookmark | 3 | None | Saves signal algorithm value |
| Substantive comment (10+ words) | 5 | 1 per post | Anti-spam: must be 10+ words |
| Reply to any comment | 3 | 1/min cooldown | Rewards conversation |
| Start a thread (3+ responses) | 10 | None | 5 base + 5 bonus for sparking discussion |
| Each additional responder in your thread | 2 | None | Scales with virality |
| Share video to another platform | 5 | 1/day per platform | Cross-platform amplification |

### Brand Hashtag Points (Discovery + Brand Awareness Engine)
Any post on any platform using a brand hashtag earns points. Multipliers drive awareness toward paid products.

| Hashtag | Base Points | Multiplier | Effective Points | Notes |
|---------|------------|------------|-----------------|-------|
| #jitneuro | 3 | 1x | 3 | Open source -- baseline brand awareness |
| #ClaudeCodeGuild | 3 | 1x | 3 | Community identity hashtag |
| #ShipWithClaude | 3 | 1x | 3 | Challenge hashtag |
| #jitai | 3 | 5x | 15 | Primary company brand -- high value |
| #aiboatmechanic | 3 | 10x | 30 | Paid product -- highest awareness value |
| #aifieldsupport | 3 | 10x | 30 | Paid product -- highest awareness value |

Rules:
- Multiple brand hashtags in one post: highest multiplier wins (no stacking)
- Post must have real content (not just hashtags) -- minimum 10 words or video
- Hashtag usage tracked via platform APIs + manual spot-checks
- Future brand hashtags added at Dan's discretion with assigned multiplier
- Cooldown: 1 scored hashtag post per platform per day

### Recruitment Points (Viral Engine)
| Action | Points | Notes |
|--------|--------|-------|
| Referral: new follower from your share | 15 | Tracked via UTM/referral links |
| Referral passive income | 5% of referral's points | Permanent -- incentivizes quality referrals |
| Referred user hits Tier 2 | 25 bonus | Reward for recruiting engaged users, not dead accounts |

### Challenge Points
| Action | Points | Notes |
|--------|--------|-------|
| Enter weekly challenge | 25 | Must submit by deadline |
| Win weekly challenge (featured) | 100 | Selected by Dan or community vote |
| Runner-up (top 3) | 50 | |
| Vote on challenge entries | 2 | Drives engagement with other builders |

### Streak Multipliers
| Streak | Multiplier | Notes |
|--------|-----------|-------|
| 7-day engagement streak | 1.5x | Must engage at least 1x/day for 7 consecutive days |
| 14-day streak | 1.75x | |
| 30-day streak | 2x | Premium commitment |
| Broken streak | Reset to 1x | Loss aversion -- the engine that keeps people daily |
| Streak Freeze (1 per 30 days) | Preserves streak | Costs 50 points to activate -- creates point sink |

### First Responder Bonus
| Action | Points | Notes |
|--------|--------|-------|
| First 3 substantive comments on new video | +10 bonus each | Creates urgency to watch immediately |
| First to solve weekly challenge | +25 bonus | Speed reward |

### Open Source Contribution Points (JitNeuro Repo)
Direct contributions to jitneuro (github.com/dstolts/jitneuro) or JitAI ecosystem repos.

| Action | Points | Notes |
|--------|--------|-------|
| PR merged: bug fix | 25 | Must be accepted and merged |
| PR merged: new feature | 50 | New command, hook, rule template, or docs |
| PR merged: major feature | 100 | New system, significant architecture addition |
| Issue filed (confirmed valid) | 10 | Bug report or feature request that's actionable |
| Issue triaged / reproduced | 15 | Help verify another user's issue |
| Documentation improvement | 15 | README, guides, examples, translations |
| Community support (answer in Discussions/Discord) | 10 | Substantive help that resolves someone's question |

### Team System (Open Source Project Teams)
Teams are built around real open source projects that use JitNeuro as a tool.

**Formation rules:**
- 3-5 contributors per team
- Must have a project that uses JitNeuro as a tool
- Public repos: GitHub repo with JitNeuro artifacts visible (CLAUDE.md, engrams, or commands)
- Private repos: qualify by publishing a "story" -- blog post, video, or social post showing how the team uses JitNeuro in their project. Must include screenshots or demo. Story earns 25 bonus points + counts as challenge entry.
- Team registers at covenai.co/teams with repo URL (public) or story URL (private)
- Team points = sum of member points during the season

**Team rewards:**
- Top team each quarter: group coaching session with Dan (30 min)
- Top 3 teams: featured on covenai.co and in a video
- Teams create accountability + recruitment incentive (teams want strong members)
- Team leaderboard separate from individual leaderboard

**Why OSS projects:**
- Creates real-world JitNeuro adoption (installs + GitHub activity)
- Builds portfolio of "projects powered by JitNeuro" for marketing
- Contributors become evangelists because their project depends on the tool
- Cross-pollination: team members discover each other's projects

### Anti-Gaming Rules
- 1-minute cooldown between scored comments (MEE6 pattern)
- Comments under 10 words = 0 points (prevents "great video!" spam)
- Self-replies don't count for thread bonuses
- Duplicate comments across platforms = counted once
- Daily point cap: 100 points from engagement (streaks/challenges/referrals exempt)
- Dan or moderators can flag/remove fraudulent activity

---

## 2. TIER SYSTEM ("Guild Ranks")

Medieval theme. Each tier unlocks real capabilities.

| Tier | Points | Rank | Badge | Reward |
|------|--------|------|-------|--------|
| 0 | 0-24 | Apprentice | Wooden shield | Leaderboard access |
| 1 | 25-99 | Scribe | Bronze scroll | JitNeuro quick-start PDF guide |
| 2 | 100-299 | Builder | Silver hammer | Free 30-min training module + Discord role |
| 3 | 300-749 | Architect | Gold compass | Free full training course + early video access (24h before public) |
| 4 | 750-1499 | Sage | Emerald eye | Free Claude Code tool license + monthly Q&A stream access |
| 5 | 1500-2999 | Master | Ruby crown | Free 1:1 coaching session (30 min) + beta content |
| 6 | 3000-5999 | Archon | Diamond tower | Free annual tool bundle + "Archon" badge + quarterly mastermind |
| 7 | 6000+ | Legend | Obsidian throne | Co-host a video + Legend badge + all lower tier rewards + annual strategy session |

### Annual Rolling Badges (Legacy System)
Tier ranks reset annually on January 1. You KEEP your year-badge permanently as a trophy, but you must RE-EARN your active rank each year.

**How it works:**
- December 31: current tier rank "minted" as a permanent year-badge (e.g., "2026 Legend", "2026 Architect")
- January 1: ACTIVE points reset to 0. Everyone starts fresh for competitive rank.
- LIFETIME points NEVER reset. They only go up. Permanent bragging rights counter.
- Your profile displays: current active rank + lifetime total + all earned year-badges
- Year-badges are non-transferable, permanent, and displayed chronologically
- A "2026 Legend" badge proves you were Legend-tier in the inaugural year -- collectors item

**Two point counters:**
- **Active Points:** Reset annually. Determines your current tier rank and league placement. The competition.
- **Lifetime Points:** Never reset. Cumulative total across all years. The legacy. Displayed prominently on profile and leaderboard. Tiebreaker for league placement when active points are equal.

**Why this works:**
- Prevents "earned it once, coasting forever" -- must stay engaged
- Year-badges become increasingly valuable over time (early adopter prestige)
- Creates annual "sprint to Legend" excitement in Q4
- Returning members after a gap year still have their historical badges visible
- "2026 Legend" (founding year) will be the rarest badge forever -- FOMO engine

**Display:**
```
@username | [Active: Sage] | Lifetime: 14,832 pts | [2026 Legend] [2027 Archon] [2028 Master]
```

### Tier Maintenance (HubSpot model)
- Tiers 4+ require minimum 150 points/quarter to maintain
- If not maintained, drop one tier (not to zero -- floor at Tier 2)
- Grace period: 1 quarter warning before demotion
- Creates ongoing engagement pressure at the top

### Tier Unlocks (Stack Overflow model)
Beyond rewards, tiers unlock CAPABILITIES:
- Tier 2+: Can submit challenge entries
- Tier 3+: Can vote on challenge winners
- Tier 4+: Access to exclusive Discord channels with Dan
- Tier 5+: Can propose video topics (Dan picks from Sage+ suggestions)
- Tier 6+: Moderate community discussions
- Tier 7: Co-create content, inner circle access

---

## 3. LEAGUE SYSTEM (Weekly Competition)

Adapted from Duolingo's weekly league model.

### How It Works
- All active members placed in leagues of 30 people (similar point ranges)
- Points earned that week determine weekly ranking
- Top 5 promote to next league
- Bottom 5 demote
- Weekly reset every Monday 12:00 UTC

### Leagues (ascending)
1. Bronze League
2. Silver League
3. Gold League
4. Platinum League
5. Diamond League
6. Champion League (top 30 globally)

### Why This Works
- Competing against 30 people (not 10,000) feels achievable
- Weekly resets prevent burnout -- fresh start every Monday
- Promotion/demotion creates stakes without lifetime commitment
- Champion League = visible prestige (featured on leaderboard page)

---

## 4. CHALLENGE SYSTEM (Content Engine)

### Weekly Challenge
- Posted every Monday with the new video batch
- Theme tied to that week's video content (e.g., "Show your /save and /load workflow")
- Entries: short video, screenshot, or written post with hashtag #ClaudeCodeGuild
- Deadline: Friday midnight UTC
- Winner announced in Monday's first video (cross-promotion loop)
- Winner gets featured on Dan's channel = massive incentive

### Monthly Challenge
- Bigger scope: "Build something real with Claude Code this month"
- Entries judged on: creativity, utility, community value
- Top 3 get prizes from the tier reward pool
- All entries showcased in a monthly compilation video

### Seasonal Event: "Forge of Code" (Quarterly)
- 90-day challenge cycle (Skool Games model)
- Theme: build a complete project with Claude Code
- Teams of 3-5 (Guild/Team system)
- Team points = sum of member points during the season
- Winning team: group coaching session + featured case study
- Creates accountability + recruitment incentive (teams want strong members)

### Annual Event: "12 Days of Claude Code" (December)
- Advent of Code style -- 12 daily challenges
- Each day: a real-world task to accomplish with Claude Code
- Private leaderboards for teams
- Grand prize: free annual tool bundle + co-host the year-end recap video
- Creates annual anticipation + recurring content tradition

---

## 5. VIRAL LOOPS (How This Self-Propagates)

### Loop 1: Referral Chain
You earn points -> you want more points -> you refer friends -> they engage -> you earn 5% of their points forever -> you refer more friends
**Viral coefficient target: 1.3+ (each member brings 1.3 new members on average)**

### Loop 2: Challenge UGC
Dan posts challenge -> members create content -> Dan reposts best entries -> Dan's audience sees member content -> new followers discover the Guild -> new members enter challenges
**Content multiplication: 1 Dan video = 10-50 member response videos**

### Loop 3: League Competition
Weekly league reset -> members compete for promotion -> increased engagement that week -> algorithm rewards engagement -> more views -> more followers discover the Guild
**Weekly engagement spikes on Monday (new league) and Friday (challenge deadline)**

### Loop 4: Streak Pressure
Start a streak -> don't want to break it -> engage daily -> become habitual -> tell others about your streak -> social proof -> others start streaks
**Duolingo data: 7-day streakers are 3.6x more likely to remain active**

### Loop 5: Status Signaling
Earn high tier -> display badge on profile/Discord -> others see your rank -> aspiration drives their engagement -> they tell others about the system
**LinkedIn badge sharing (Trailhead model) turns every tier-up into free marketing**

---

## 6. "#ShipWithClaude" PUBLIC CHALLENGE (Launch Vehicle)

Adapted from #100DaysOfCode. Zero infrastructure needed -- launch immediately.

### Rules
1. Build something with Claude Code every day (or week -- flexible cadence)
2. Post what you built with #ShipWithClaude
3. Encourage 2 other participants each day (reciprocity loop)
4. Tag @itproguru for potential feature

### Why This Is the Launch Vehicle
- Costs nothing
- Creates UGC firehose
- Hashtag builds discoverability
- Dan reposts the best ones (free content)
- Every participant's followers see the hashtag
- The "encourage 2 others" rule creates network effects

### Integration with Points
- Posting with #ShipWithClaude: 10 points
- Getting reposted by Dan: 50 points
- Completing 7 consecutive days: 25 bonus
- Completing 30 days: 100 bonus + Tier promotion

---

## 7. AUTOMATION STACK

### Data Collection (N8N Workflows)
| Workflow | Source | Frequency | Method |
|----------|--------|-----------|--------|
| YouTube comment scraper | YouTube Data API v3 | Every 4 hours | API (already connected) |
| TikTok engagement scraper | Phyllo API or TikTok API | Every 6 hours | API |
| Instagram engagement scraper | Instagram Graph API | Every 6 hours | API |
| LinkedIn engagement scraper | Phyllo API | Every 12 hours | API |
| Discord engagement scraper | Discord bot API (MEE6/custom) | Real-time | Bot event |
| Reddit engagement scraper | Reddit API (PRAW) | Every 6 hours | API |
| GitHub contribution tracker | GitHub API / webhooks | Real-time | Webhook on PR merge |
| Brand hashtag scanner | All platforms | Every 4 hours | API + keyword search |
| Referral tracker | UTM params + custom links | Real-time | Webhook |
| Challenge submission collector | Google Form or custom endpoint | On submit | Webhook |

### Point Calculation (N8N + SQL)
- N8N workflow aggregates engagement data per user
- Point calculation logic in N8N Code node (or JS function)
- Results stored in JitAutomation SQL Server (DEVINFRAVM)
- Tables: Users, Engagements, Points, Streaks, Leagues, Challenges
- Daily point recalculation job (2 AM UTC)
- Weekly league promotion/demotion job (Monday 12:00 UTC)

### Leaderboard Display
- Static HTML at covenai.co/leaderboard.html (or /feedback/leaderboard.html per Dan's spec)
- OR dynamic page via jitai Next.js app (preferred -- already has infrastructure)
- Data: fetch from API endpoint backed by SQL
- Refresh: every hour (or on-demand after point recalculation)
- Display: top 50 overall + weekly league standings + current challenges

### Notifications (Resend)
| Trigger | Notification | Channel |
|---------|-------------|---------|
| Tier promotion | "You've reached [Rank]! Your new rewards..." | Email (Resend) |
| League promotion/demotion | "You promoted to Gold League!" | Email |
| Streak at risk (23h since last engagement) | "Your 14-day streak is about to break!" | Email |
| Challenge winner | "You won this week's challenge!" | Email + DM |
| Weekly point summary | "You earned 87 points this week. League: Silver #3" | Email |

### Identity / Registration
- Users register at covenai.co with social handles (YT, TikTok, IG, LI)
- OAuth sign-in via GitHub (dev audience, easy) or email
- Profile links social accounts for cross-platform point aggregation
- Public profile page: rank, points, streak, badges, challenge history

---

## 8. PRIZE BUDGET FRAMEWORK

### Dan's Time Commitment
- 30 minutes per week dedicated to Guild (coaching, Q&A, challenge reviews)
- Coaching sessions: 30 min each, Tier 5+ only, max 2/month

### Scaled Prize Budget (Grows with Audience)
| Follower Milestone | Monthly Budget | Unlock |
|-------------------|---------------|--------|
| 0 - 49,999 | $250/mo | Base tier: digital prizes, weekly challenge swag |
| 50,000 | $500/mo | +$250: add tool license giveaways |
| 100,000 | $750/mo | +$250: add monthly spotlight prizes |
| 250,000 | $1,000/mo | +$250: add team competition prizes |
| 500,000 | $1,250/mo | +$250: add quarterly event prizes |
| 1,000,000 | $1,500/mo | +$250: add annual grand prizes |
| 2,000,000 | $1,750/mo | +$250: add sponsorship-funded prizes |
| 3,000,000 | $2,000/mo | +$250: premium tier (partner-funded) |

### Prize Allocation at Base ($250/mo)
| Prize Type | Cost | Recipients | Monthly Total |
|-----------|------|-----------|---------------|
| Training modules (self-serve, digital) | $0 marginal | Unlimited (Tier 2+) | $0 |
| Weekly challenge prizes (swag, credits) | $25-50 each | 4/month | $100-200 |
| Tool license raffle (Tier 4+) | $20-50 | 1/month | $20-50 |
| Full training course access | $0 marginal | ~10/month (Tier 3+) | $0 |
| 1:1 coaching (Dan's time, 30 min) | $0 (time budget) | ~2/month (Tier 5+) | $0 |
| Co-host video (Tier 7) | $0 marginal | ~1/quarter | $0 |

**ROI justification:** Each engaged community member drives ~$5-20/month in content value (UGC, engagement signals, referrals). At 1,000 active Guild members, that's $5K-20K/month in organic marketing value vs $250/mo cost = 20-80x ROI.

### Cost Reduction Strategies
- Training courses: create once, deliver infinitely (digital goods)
- Tool licenses: negotiate bulk/partner pricing or affiliate deals
- Swag: on-demand printing (no inventory risk)
- Coaching: Dan's 30 min/week is the premium -- scarcity drives demand
- At scale (100K+): seek sponsors who fund prizes in exchange for community exposure

---

## 9. LEADERBOARD PAGE DESIGN

### URL: covenai.co (or covenai.co/leaderboard)

### Sections
1. **Hero banner:** "The Coven -- Build with Claude Code. Earn your rank." Medieval aesthetic.
2. **Your stats** (if logged in): rank, points, streak, next tier progress bar, league position
3. **Global leaderboard:** Top 50 all-time. Rank badge, name, points, tier, streak.
4. **Weekly league:** Your league of 30. Position, points this week, promotion/demotion zone.
5. **Current challenge:** This week's challenge, deadline countdown, entry count, prize.
6. **#ShipWithClaude feed:** Live feed of tagged posts across platforms.
7. **Tier rewards:** Visual tier chart showing what each rank unlocks.

### Mobile-First Design
- Leaderboard must look great on mobile (most traffic from social links)
- Gamification pages are the #1 thing people share -- make it screenshot-worthy
- "Share my rank" button generates a branded card image for posting

---

## 10. LAUNCH SEQUENCE

### Phase 0: Pre-Launch (Week -2 to -1)
- Build leaderboard page (static MVP)
- Set up point tracking SQL tables
- Create first N8N scraping workflow (YouTube only to start)
- Design tier badges (medieval aesthetic)
- Create #ShipWithClaude explainer video (S-bonus: "Join the Guild")

### Phase 1: Soft Launch (Week 1-2)
- Launch #ShipWithClaude challenge (zero infrastructure needed)
- Post leaderboard link in video descriptions
- Start tracking points manually (spreadsheet) while automation builds
- Announce in first 5 shorts: "Join the Guild -- link in bio"

### Phase 2: Automation (Week 3-4)
- N8N workflows live for YouTube + TikTok scraping
- SQL point calculation automated
- Leaderboard page dynamic (real-time data)
- Weekly league system activated
- Email notifications via Resend

### Phase 3: Full System (Month 2+)
- All 4 platforms scraped
- Streak system live
- Weekly challenges with prizes
- Referral tracking active
- Discord integration (if Discord launched)

### Phase 4: Community Scaling (Month 3+)
- Seasonal "Forge of Code" event
- Ambassador/Champions program
- Certification track
- "12 Days of Claude Code" annual event planning

---

## 11. SUCCESS METRICS

| Metric | 30-Day Target | 90-Day Target | 12-Month Target |
|--------|--------------|--------------|----------------|
| Total followers (all platforms) | 5,000 | 25,000 | 1,000,000 |
| Guild registrations | 200 | 1,500 | 50,000 |
| Weekly active Guild members | 50 | 500 | 10,000 |
| #ShipWithClaude posts | 100 | 1,000 | 25,000 |
| Challenge entries/week | 10 | 50 | 500 |
| Referral viral coefficient | 0.5 | 1.0 | 1.3+ |
| GitHub stars (jitneuro) | +100 | +500 | +5,000 |
| Average video completion rate | 60% | 70% | 75% |
| Daily active streakers | 20 | 200 | 5,000 |

---

## 12. RISK MITIGATION

| Risk | Mitigation |
|------|-----------|
| Bot/spam accounts gaming points | 10-word minimum comments, cooldowns, daily cap, manual review |
| Prize costs outpace growth | Digital-first rewards (training = $0 marginal). Cap physical prizes. |
| Platform API changes break scraping | Phyllo as abstraction layer. Fallback: manual weekly scoring. |
| Leaderboard dominated by few power users | Weekly league resets. Daily point cap. Separate "newcomer" league. |
| Community toxicity | Code of conduct. Moderator tools at Tier 6+. Ban policy. |
| Dan's time overwhelmed by coaching | Limit Tier 5+ coaching to 3 sessions/month. Group format for Tier 6. |
| Streak system causes burnout | Streak Freeze (1/month). "Rest week" events. Max streak display at 90 days (reset with bonus). |
