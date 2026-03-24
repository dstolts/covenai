# The Coven (CovenAI) -- Discord Server Setup Guide
**Created:** 2026-03-24
**Status:** READY TO ACTIVATE
**Time to complete:** ~15 minutes
**Prerequisite:** Discord account, admin access to create a server
**Companion doc:** gamification-spec-01.md (full point/tier/league system)

---

## TABLE OF CONTENTS

1. Server Creation and Settings
2. Role Hierarchy (Medieval Tiers)
3. Channel Structure
4. Bot Setup (Arcane + GitHub Webhooks)
5. Onboarding Flow
6. AutoMod and Moderation
7. Welcome Message Template
8. Rules / Code of Conduct
9. GitHub Integration
10. External Leaderboard Connection
11. Post-Setup Checklist

---

## 1. SERVER CREATION AND SETTINGS

### Create the Server
1. Open Discord desktop or web app
2. Click the "+" icon in the server list (left sidebar)
3. Select "Create My Own"
4. Select "For a club or community"
5. Server name: **The Coven -- CovenAI**
6. Upload server icon (see below)
7. Click "Create"

### Server Icon Recommendations
- Coven/mystical symbol with code brackets `</>` overlay -- pentagram-meets-terminal aesthetic
- Color palette: deep purple (#5B21B6), gold (#F59E0B), dark slate (#1E293B)
- 512x512px minimum, PNG with transparency
- Tools: Canva, Figma, or prompt an image generator with "medieval shield with code brackets, purple and gold, flat icon style, transparent background"

### Server Description
Set in Server Settings > Overview:
```
Build with AI. Earn your rank. The Coven is the community for AI builders -- challenges, leaderboards, and a medieval-themed tier system powered by CovenAI. Join at covenai.co
```

### Enable Community Features
1. Server Settings > Enable Community
2. Follow the setup wizard:
   - Agree to Discord Community Guidelines
   - Set #rules as the rules channel
   - Set #welcome as the community updates channel
   - Enable the Community Server features (unlocks: Server Discovery, Onboarding, Server Insights)

### Server Settings Tweaks
- Server Settings > Safety Setup > Verification Level: **Medium** (must be registered for 5+ minutes)
- Server Settings > Safety Setup > Media Content Filter: **Scan messages from all members**
- Server Settings > Roles > Default Permissions (@everyone): Disable "Send Messages" (force onboarding first)

---

## 2. ROLE HIERARCHY (MEDIEVAL TIERS)

Create roles in this EXACT order (top to bottom in Discord role settings). Higher = more power. Arcane's bot role must be above all tier roles it assigns.

### Admin/Staff Roles (top of hierarchy)

| Role | Color | Key Permissions | Notes |
|------|-------|----------------|-------|
| @Guildmaster | #FF0000 (red) | Administrator | Dan only. Full server control. |
| @Arcane | (bot default) | Manage Roles, Send Messages, Embed Links | Created automatically when bot is added. Drag ABOVE all tier roles. |
| @Sentinel | #E74C3C (dark red) | Manage Messages, Timeout Members, View Audit Log | Moderators (trusted community members) |

### Tier Roles (mapped from gamification-spec-01.md)

Create each role. Set "Display role members separately" = Yes for all tiers. This creates visible rank sections in the member list.

| Role | Color (hex) | Hoist | Points Required |
|------|-------------|-------|----------------|
| @Legend | #1A1A2E (obsidian/near-black) | Yes | 6000+ |
| @Archon | #B9F2FF (diamond blue) | Yes | 3000-5999 |
| @Master | #E0115F (ruby) | Yes | 1500-2999 |
| @Sage | #50C878 (emerald) | Yes | 750-1499 |
| @Architect | #FFD700 (gold) | Yes | 300-749 |
| @Builder | #C0C0C0 (silver) | Yes | 100-299 |
| @Scribe | #CD7F32 (bronze) | Yes | 25-99 |
| @Apprentice | #8B7355 (wood brown) | Yes | 0-24 (default on join) |

### Utility Roles (bottom of hierarchy)

| Role | Color | Purpose |
|------|-------|---------|
| @Verified | (no color) | Assigned after onboarding. Grants access to main channels. |
| @Challenger | #FF6B35 (orange) | Opted in to weekly challenges |
| @ShipWithClaude | #00D4AA (teal) | Active in #ShipWithClaude challenge |
| @Notifications | (no color) | Opted in to announcements ping |

### Role Permissions Summary

**@everyone (default, pre-verification):**
- View Channels: Only #welcome, #rules, #verify
- Send Messages: No (everywhere)
- All other permissions: No

**@Verified (after onboarding):**
- View Channels: All public channels
- Send Messages: Yes (in allowed channels)
- Add Reactions: Yes
- Attach Files: Yes
- Embed Links: Yes
- Use External Emojis: Yes
- Connect to voice: Yes

**@Apprentice through @Architect:**
- Same as @Verified (differentiated by leaderboard, not Discord perms)

**@Sage and above (Tier 4+):**
- Access to #inner-circle channel
- Can use threads in #announcements

**@Archon and above (Tier 6+):**
- Manage Messages in community channels (light moderation)
- Access to #archon-council channel

**@Legend (Tier 7):**
- Access to #legends-forge channel
- Can pin messages in community channels

---

## 3. CHANNEL STRUCTURE

### Category: WELCOME HALL
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #rules | Text (read-only) | Everyone | Server rules / code of conduct |
| #welcome | Text (read-only) | Everyone | Auto-welcome messages + server guide |
| #introductions | Text | @Verified | New members introduce themselves |
| #role-select | Text (read-only) | Everyone | Onboarding role selection (or use Discord Onboarding UI) |

### Category: TOWN SQUARE (General Chat)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #general | Text | @Verified | Main chat -- anything goes (on topic) |
| #off-topic | Text | @Verified | Non-code chat, memes, life |
| #show-and-tell | Text | @Verified | Share what you built (screenshots, demos, repos) |
| #wins | Text | @Verified | Celebrate achievements, milestones, tier-ups |

### Category: THE FORGE (Claude Code / Dev Help)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #claude-code-help | Text | @Verified | Q&A for Claude Code usage |
| #prompt-craft | Text | @Verified | Share and discuss prompts, CLAUDE.md configs, workflows |
| #jitneuro-dev | Text | @Verified | JitNeuro framework discussion |
| #bugs-and-issues | Text | @Verified | Bug reports, troubleshooting |
| #code-review | Text | @Verified | Post code for peer review |
| #resources | Text (slow mode 1hr) | @Verified | Links, tutorials, tools (slow mode prevents spam) |

### Category: THE ARENA (Gamification)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #leaderboard | Text (read-only) | @Verified | Bot posts weekly leaderboard updates |
| #challenges | Text | @Verified | Weekly/monthly challenge announcements + submissions |
| #ship-with-claude | Text | @Verified | Daily #ShipWithClaude posts |
| #tier-ups | Text (read-only) | @Verified | Bot announces tier promotions |
| #streaks | Text (read-only) | @Verified | Streak milestones (7d, 14d, 30d) |

### Category: GUILD HALL (Community)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #events | Text (read-only) | @Verified | Upcoming streams, challenges, Forge of Code |
| #feedback | Text | @Verified | Server improvement suggestions |
| #jobs-and-collabs | Text (slow mode 6hr) | @Verified | Job postings, project collaborations |
| #content-corner | Text | @Verified | Share blog posts, videos, articles about Claude Code |

### Category: VOICE CHANNELS
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| The Tavern | Voice | @Verified | General hangout voice chat |
| Pair Programming | Voice | @Verified | Screen share + code together |
| Office Hours | Voice | @Sage+ | Dan's Q&A sessions (Sage+ access) |

### Category: INNER CIRCLE (Tier 4+ Only)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #inner-circle | Text | @Sage, @Master, @Archon, @Legend | Exclusive discussion for Sage+ |
| #early-access | Text | @Architect+ | Preview content 24h before public |
| #archon-council | Text | @Archon, @Legend | Strategy, moderation, governance |
| #legends-forge | Text | @Legend | Legend-only. Co-creation space with Dan. |

### Category: BOT & LOGS (Staff Only)
| Channel | Type | Access | Purpose |
|---------|------|--------|---------|
| #bot-commands | Text | @Sentinel, @Guildmaster | Bot management commands |
| #mod-log | Text | @Sentinel, @Guildmaster | AutoMod/moderation action log |
| #github-feed | Text | @Verified (read), @Guildmaster (write) | GitHub webhook notifications |

---

## 4. BOT SETUP

### 4A. Arcane Bot (Leveling + Gamification)

**Why Arcane over MEE6:**
- Free unlimited role rewards (MEE6 paywalls this)
- Free web leaderboard
- Lower cost for premium ($7/mo vs $12/mo)
- Better anti-spam (1 msg/min XP cooldown)
- Weekly + Monthly leaderboard types included

**Installation:**
1. Go to https://arcane.bot/
2. Click "Add to Server"
3. Select "The Coven -- Claude Code Community"
4. Authorize all permissions (Arcane needs Manage Roles to assign tier roles)
5. After adding, go to Server Settings > Roles and drag the "Arcane" role ABOVE all tier roles

**Configuration (via Arcane Dashboard at https://arcane.bot/dashboard):**

Select your server, then configure:

**Leveling Settings:**
- XP Mode: Random (default)
- Min XP per message: 15
- Max XP per message: 25
- Cooldown: 60 seconds (1 message per minute earns XP)
- No XP Roles: @Guildmaster (staff don't need to level)
- No XP Channels: #bot-commands, #mod-log

**Role Rewards (map to tier thresholds):**

Configure these in Arcane Dashboard > Leveling > Role Rewards:

| Level | Role | Approx Points Equivalent |
|-------|------|------------------------|
| 1 | @Apprentice | 0 (assigned on join) |
| 5 | @Scribe | ~25 points |
| 10 | @Builder | ~100 points |
| 15 | @Architect | ~300 points |
| 25 | @Sage | ~750 points |
| 35 | @Master | ~1500 points |
| 50 | @Archon | ~3000 points |
| 75 | @Legend | ~6000 points |

- Stack Rewards: **Enabled** (members keep all earned roles)
- Announcement Channel: #tier-ups
- Level-up Message: `{user} has ascended to **Level {level}**! New rank: **{reward}**`

**Leaderboard:**
- Enable web leaderboard at arcane.bot (free)
- Enable Weekly leaderboard type
- Link the leaderboard URL in #leaderboard channel description

**Slash Commands Reference:**
- `/level` -- Check your current level and XP
- `/leaderboard` -- View server leaderboard
- `/rewards` -- View available role rewards
- `/xp set @user <amount>` -- (Admin) Set a user's XP
- `/xp add @user <amount>` -- (Admin) Add XP to a user

### 4B. Carl-bot (Reaction Roles + Utilities)

Carl-bot complements Arcane for reaction roles and advanced automod.

**Installation:**
1. Go to https://carl.gg/
2. Click "Invite"
3. Select your server, authorize permissions

**Reaction Roles Setup (for #role-select):**

In the Carl-bot dashboard or via commands:

```
/reactionrole create
```

Create a message in #role-select with these reaction role options:
- Hammer emoji -> @Challenger (opt into challenges)
- Ship emoji -> @ShipWithClaude (opt into daily challenge)
- Bell emoji -> @Notifications (opt into announcement pings)

### 4C. GitHub Bot (Webhook -- No Bot Needed)

See Section 9 for full GitHub integration setup.

---

## 5. ONBOARDING FLOW

### Discord Built-in Onboarding (Community Servers)

1. Server Settings > Community > Onboarding
2. Click "Get Started"

**Default Channels (everyone sees these):**
- #welcome
- #rules
- #general
- #claude-code-help
- #challenges

**Onboarding Questions:**

**Question 1: "What brings you to The Coven?"**
- "I use Claude Code daily" -> adds #prompt-craft, #code-review
- "I'm learning Claude Code" -> adds #claude-code-help, #resources
- "I want to compete in challenges" -> adds @Challenger role, #challenges, #ship-with-claude
- "I'm here for JitNeuro / open source" -> adds #jitneuro-dev

**Question 2: "What do you build with?"**
- "TypeScript / JavaScript" -> (informational, no channel action)
- "Python" -> (informational)
- "Multiple languages" -> (informational)
- "I'm not a coder yet" -> (informational)

**Question 3: "Want challenge notifications?"**
- "Yes, ping me for challenges" -> adds @Challenger role
- "No, I'll check manually" -> (no action)

3. Set Rules Screen: Point to #rules channel
4. Click "Save and Enable"

### Verification Step
After onboarding questions, members automatically get @Verified role (Discord handles this natively with Community Onboarding). The @everyone role has no Send Messages permission, so members must complete onboarding to participate.

Alternative (manual verification with Carl-bot):
- In #verify channel, post a message: "React with the checkmark to accept the rules and get access."
- Carl-bot reaction role: Checkmark -> @Verified

---

## 6. AUTOMOD AND MODERATION

### Discord Built-in AutoMod

Server Settings > AutoMod. Enable these rules:

**Rule 1: Block Spam Content**
- Toggle: ON
- Action: Block message + Send alert to #mod-log
- Applies to all channels

**Rule 2: Commonly Flagged Words**
- Toggle: ON
- Action: Block message + Send alert to #mod-log
- Covers slurs, harassment, explicit content

**Rule 3: Custom Keyword Filter -- "Anti-Promo Spam"**
- Keywords: discord.gg, .gg/, free nitro, earn money fast, click here now, onlyfans, buy followers
- Action: Block message + Timeout member 60 min + Alert #mod-log
- Exempt roles: @Sentinel, @Guildmaster

**Rule 4: Mention Spam**
- Max mentions per message: 5
- Action: Block message + Timeout member 60 min

### Moderation Tiered Response
| Offense | Action | Notes |
|---------|--------|-------|
| First warning | Verbal warning via DM | Carl-bot /warn command |
| Second offense | 1-hour timeout | Carl-bot /mute command |
| Third offense | 24-hour timeout | |
| Severe / repeated | Ban | Only @Sentinel or @Guildmaster |
| Spam bot / raid | Immediate ban | No warnings needed |

---

## 7. WELCOME MESSAGE TEMPLATE

Post this in #welcome as a pinned message (or configure Carl-bot to auto-send on join):

```
Welcome to The Coven, {user}!

You've entered the forge where Claude Code builders earn their rank.

HOW IT WORKS:
-- Chat, help others, and share your builds to earn XP
-- Level up to unlock Guild Ranks: Apprentice -> Scribe -> Builder -> Architect -> Sage -> Master -> Archon -> Legend
-- Compete in weekly challenges for bonus XP and prizes
-- Join #ShipWithClaude to build something every day

QUICK START:
1. Read the #rules
2. Introduce yourself in #introductions
3. Ask questions in #claude-code-help
4. Check your level: /level
5. View the leaderboard: /leaderboard

CHALLENGES:
-- Weekly challenges drop every Monday in #challenges
-- Use #ship-with-claude for daily builds
-- React in #role-select to opt into challenge notifications

RANKS AND REWARDS:
-- Apprentice (Lv 1) -- Leaderboard access
-- Scribe (Lv 5) -- Quick-start PDF guide
-- Builder (Lv 10) -- Free training module + Discord role badge
-- Architect (Lv 15) -- Full training course + early video access
-- Sage (Lv 25) -- Tool license + monthly Q&A access + Inner Circle
-- Master (Lv 35) -- 1:1 coaching session + beta content
-- Archon (Lv 50) -- Annual tool bundle + quarterly mastermind
-- Legend (Lv 75) -- Co-host a video + annual strategy session

LINKS:
-- Leaderboard: [arcane.bot leaderboard URL -- update after setup]
-- JitNeuro GitHub: https://github.com/dstolts/jitneuro
-- YouTube: [Dan's channel URL]

Build with Claude Code. Earn your rank.
```

### Auto-Welcome DM (Carl-bot)

Configure Carl-bot to DM new members:

Carl-bot Dashboard > Welcome > DM Message:

```
Welcome to The Coven!

You just joined the Claude Code builder community. Here's how to get started:

1. Complete the onboarding questions (they should have appeared when you joined)
2. Head to #introductions and say hi
3. Check out #challenges for this week's competition
4. Type /level anytime to see your rank

Questions? Ask in #claude-code-help. We don't bite.

-- The Coven
```

---

## 8. RULES / CODE OF CONDUCT

Post this in #rules as a pinned message. Lock the channel so only @Guildmaster can post.

```
THE GUILD -- CODE OF CONDUCT

1. BE CONSTRUCTIVE
   Help others learn. Answer questions. Share knowledge.
   Criticism of code is welcome. Criticism of people is not.

2. NO SPAM OR SELF-PROMOTION
   No unsolicited DMs, affiliate links, or server invites.
   Share your projects in #show-and-tell or #content-corner -- that is encouraged.
   Repeated low-effort posts ("great!", "nice", single-word spam) may be removed.

3. KEEP IT PROFESSIONAL
   No harassment, hate speech, discrimination, or personal attacks.
   No NSFW content. No doxxing. No threats.
   Political and religious debates belong elsewhere.

4. RESPECT THE CRAFT
   Credit other people's work. Don't claim others' code as your own.
   When sharing AI-generated code, say so.
   Plagiarism in challenge submissions = disqualification + warning.

5. STAY ON TOPIC
   Use channels for their intended purpose.
   Off-topic chat goes in #off-topic.
   Bot commands go in #bot-commands (not general channels).

6. NO GAMING THE SYSTEM
   Attempts to manipulate XP, leaderboard, or tier status through bots,
   alt accounts, or coordinated spam will result in XP reset and possible ban.

7. ASK BEFORE YOU DM
   Don't DM members without permission. Ask in the channel first.
   Exception: moderators may DM for moderation purposes.

8. FOLLOW DISCORD'S TERMS
   Discord Terms of Service and Community Guidelines apply at all times.
   https://discord.com/guidelines

ENFORCEMENT:
-- First offense: Warning
-- Second offense: 1-hour timeout
-- Third offense: 24-hour timeout
-- Severe/repeated: Ban

Moderators (@Sentinel) have final say. Appeals go to @Guildmaster.

By participating in The Coven, you agree to these rules.
```

---

## 9. GITHUB INTEGRATION

### GitHub Webhook to #github-feed Channel

This posts commit, PR, and issue notifications from JitNeuro repos to Discord.

**Step 1: Create Discord Webhook**
1. Go to #github-feed channel settings (gear icon)
2. Click Integrations > Webhooks > New Webhook
3. Name: "GitHub"
4. Channel: #github-feed
5. Copy the Webhook URL

**Step 2: Configure GitHub Webhook**
1. Go to https://github.com/dstolts/jitneuro/settings/hooks
2. Click "Add webhook"
3. Payload URL: paste Discord webhook URL + `/github` at the end
   - Example: `https://discord.com/api/webhooks/123456/abcdef/github`
   - The `/github` suffix is REQUIRED -- without it, messages won't format correctly
4. Content type: `application/json`
5. Secret: leave blank (or set one for verification)
6. Which events: Select "Let me select individual events"
   - Check: Pushes, Pull requests, Issues, Issue comments, Releases, Stars
7. Click "Add webhook"

**Step 3: Verify**
- GitHub sends a ping event immediately
- Check #github-feed for a confirmation message
- If no message appears, verify the URL has `/github` appended

**Repeat for other repos as needed:**
- dstolts/jitneuro
- dstolts/jitai (if desired)
- Any community repos

---

## 10. EXTERNAL LEADERBOARD CONNECTION

The Coven's full gamification system (gamification-spec-01.md) runs on jitai.co/guild with data in SQL Server. Here's how to connect it to Discord.

### Option A: Arcane Leaderboard (Immediate -- No Code)
- Arcane provides a free web leaderboard at arcane.bot
- This tracks Discord-only activity (messages, voice time)
- Link it in #leaderboard channel topic
- Good enough for launch

### Option B: Custom Leaderboard via Discord Webhook (Phase 2)
When the full gamification backend is built (N8N + SQL + jitai.co/guild):

1. Create a webhook in #leaderboard channel (same process as GitHub webhook above)
2. N8N workflow posts weekly leaderboard updates via HTTP POST to the webhook URL:

```json
{
  "content": null,
  "embeds": [{
    "title": "Weekly Leaderboard -- The Coven",
    "description": "Top 10 builders this week:",
    "color": 16766720,
    "fields": [
      {"name": "1. @username", "value": "1,250 pts -- Architect", "inline": false},
      {"name": "2. @username", "value": "980 pts -- Builder", "inline": false}
    ],
    "footer": {"text": "Full leaderboard: jitai.co/guild"}
  }]
}
```

3. Schedule: N8N workflow runs every Monday at 12:00 UTC (matches league reset)
4. The SQL query pulls top performers from the Points table in JitAutomation DB
5. N8N HTTP Request node POSTs the formatted embed to the Discord webhook URL

### Option C: Discord Bot + API (Phase 3 -- Full Integration)
For real-time leaderboard queries (slash commands like `/guild rank @user`):
- Build a custom Discord bot (Node.js + discord.js)
- Bot queries the JitAutomation SQL API endpoint
- Responds with formatted embeds showing rank, points, streak, tier
- This is the long-term goal but not needed for launch

---

## 11. POST-SETUP CHECKLIST

Run through this after completing the setup:

```
[ ] Server created with correct name and icon
[ ] Community features enabled
[ ] All 8 tier roles created with correct colors and hierarchy
[ ] Utility roles created (@Verified, @Challenger, @ShipWithClaude, @Notifications)
[ ] Arcane bot role dragged above all tier roles in hierarchy
[ ] All channel categories and channels created (6 categories, ~25 channels)
[ ] Channel permissions set (locked channels, tier-restricted channels)
[ ] Arcane bot added and configured (XP, role rewards, leaderboard)
[ ] Carl-bot added (reaction roles, welcome DM, moderation)
[ ] Onboarding flow configured (3 questions, default channels)
[ ] @everyone permissions restricted (no Send Messages without @Verified)
[ ] AutoMod rules enabled (spam, flagged words, mention spam, promo filter)
[ ] Rules posted and pinned in #rules
[ ] Welcome message posted and pinned in #welcome
[ ] GitHub webhook configured for jitneuro repo -> #github-feed
[ ] Reaction roles set up in #role-select
[ ] Invite link created (Server Settings > Invites > create permanent link)
[ ] Test: join with an alt account, verify onboarding flow works
[ ] Test: send a message, verify Arcane awards XP
[ ] Test: reach Level 5, verify @Scribe role assigned
```

---

## QUICK REFERENCE -- INVITE LINK

After setup, create a permanent invite link:
1. Server Settings > Invites
2. Or right-click any channel > Invite People > Edit Invite Link > Set to "Never Expire"
3. Use this link in video descriptions, bio links, email footers

Recommended vanity URL (requires server boost): `discord.gg/theguild` or `discord.gg/claudecode`

---

## COST SUMMARY

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Discord server | $0 | Free |
| Arcane bot (free tier) | $0 | Unlimited role rewards, web leaderboard |
| Arcane Premium (optional) | $7/mo | 3 roles per level, hourly top-XP role updates |
| Carl-bot (free tier) | $0 | Reaction roles, welcome messages, basic moderation |
| Carl-bot Premium (optional) | $8/mo | Advanced automod, more embeds |
| Server Boost (optional) | $5-15/mo | Vanity URL, better audio, upload limit |
| **Total (MVP launch)** | **$0** | |
| **Total (with premium bots)** | **$15-30/mo** | |

---

## DISCORD SERVER TEMPLATE REFERENCE

If you want to start from an existing template instead of building from scratch:

- Developer Community template: https://discordtemplates.me/templates/741641321340731512
- Coding community templates: https://discordtemplates.me/tags/coding
- Xenon Bot templates (backup/restore): https://xenon.bot/templates

Note: Templates give you channels and roles but NOT bot configurations. You will still need to set up Arcane and Carl-bot manually per this guide.

---

## LAUNCH SEQUENCE

1. **Day 1 (15 min):** Create server, roles, channels using this guide
2. **Day 1 (10 min):** Add bots, configure Arcane leveling + role rewards
3. **Day 1 (5 min):** Post rules, welcome message, set up onboarding
4. **Day 2:** Add GitHub webhooks, test with alt account
5. **Day 2:** Create invite link, add to YouTube description / jitai.co / linktree
6. **Day 3:** Announce in first video: "Join The Coven -- link in description"
7. **Week 1:** Monitor, adjust XP rates if leveling too fast/slow
8. **Week 2+:** Launch first weekly challenge in #challenges

---

## RESEARCH SOURCES

- Discord Server Setup Guide: https://support.discord.com/hc/en-us/articles/33023827550359
- Discord Advanced Community Setup: https://support.discord.com/hc/en-us/articles/213530048
- Discord Community Onboarding: https://support.discord.com/hc/en-us/articles/11074987197975
- Discord AutoMod FAQ: https://support.discord.com/hc/en-us/articles/4421269296535
- Arcane Bot Documentation: https://docs.arcane.bot/plugins/leveling/
- Arcane Role Rewards: https://docs.arcane.bot/plugins/leveling/setup/role-rewards
- Arcane XP Options: https://docs.arcane.bot/plugins/leveling/setup/xp-options
- GitHub-Discord Webhook: https://gist.github.com/jagrosh/5b1761213e33fc5b54ec7f6379034a22
- Developer Community Best Practices: https://glasskube.dev/blog/discord-setup/
- Discord Moderation Guide: https://discord.com/safety/developing-moderator-guidelines
- Bot Comparison (2026): https://blog.communityone.io/best-discord-bots/
- Leveling Bot Comparison: https://blog.communityone.io/top-level-bots-discord-2025/
