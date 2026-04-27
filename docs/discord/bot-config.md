# Bot Configuration -- Arcane, GitHub Webhooks, AutoMod
**Step-by-step configuration for all bot and automation systems**

---

## 1. ARCANE BOT (Leveling + Gamification)

### Installation
1. Go to https://arcane.bot/
2. Click "Add to Server"
3. Select "The Coven -- CovenAI"
4. Authorize all permissions
5. In Server Settings > Roles, drag the "Arcane" role ABOVE all tier roles

### Leveling Settings (Arcane Dashboard > Leveling)

| Setting | Value |
|---------|-------|
| XP Mode | Random |
| Min XP per message | 15 |
| Max XP per message | 25 |
| Cooldown | 60 seconds |
| No XP Roles | @Guildmaster |
| No XP Channels | #bot-commands, #mod-log |

### Role Rewards (Arcane Dashboard > Leveling > Role Rewards)

| Level | Role | Approx Points |
|-------|------|---------------|
| 1 | @Apprentice | 0 (on join) |
| 5 | @Scribe | ~25 |
| 10 | @Builder | ~100 |
| 15 | @Architect | ~300 |
| 25 | @Sage | ~750 |
| 35 | @Master | ~1500 |
| 50 | @Archon | ~3000 |
| 75 | @Legend | ~6000 |

- **Stack Rewards:** Enabled (members keep all earned roles)
- **Announcement Channel:** #tier-ups
- **Level-up Message:**
```
{user} has ascended to Level {level}. New rank: {reward}
```

### Leaderboard
- Enable web leaderboard at arcane.bot (free)
- Enable Weekly leaderboard type
- Copy the leaderboard URL and set it as the #leaderboard channel topic

### Slash Commands Reference

| Command | Description | Access |
|---------|-------------|--------|
| /level | Check your current level and XP | Everyone |
| /leaderboard | View server leaderboard | Everyone |
| /rewards | View available role rewards | Everyone |
| /xp set @user [amount] | Set a user's XP | Admin only |
| /xp add @user [amount] | Add XP to a user | Admin only |

---

## 2. CARL-BOT (Reaction Roles + Utilities)

### Installation
1. Go to https://carl.gg/
2. Click "Invite"
3. Select your server, authorize permissions

### Reaction Roles (for #role-select)

Create a reaction role message in #role-select:

```
/reactionrole create
```

Message content:
```
Pick your roles below.

React with the hammer to join weekly challenges (@Challenger)
React with the ship to join #ShipWithClaude daily builds (@ShipWithClaude)
React with the bell to receive announcement pings (@Notifications)
```

Role mapping:
- Hammer reaction -> @Challenger
- Ship reaction -> @ShipWithClaude
- Bell reaction -> @Notifications

### Welcome DM
Configure in Carl-bot Dashboard > Welcome > DM Message.
See welcome-message.md for the DM text.

---

## 3. GITHUB WEBHOOKS

### Setup (per repo)

**Step 1: Create Discord Webhook**
1. Go to #github-feed channel settings
2. Integrations > Webhooks > New Webhook
3. Name: "GitHub"
4. Channel: #github-feed
5. Copy the Webhook URL

**Step 2: Configure GitHub Webhook**
1. Go to the repo Settings > Webhooks > Add webhook
2. Payload URL: [Discord webhook URL]/github
   - The /github suffix is REQUIRED for correct formatting
3. Content type: application/json
4. Secret: leave blank
5. Events: Select individual events:
   - Pushes
   - Pull requests
   - Issues
   - Issue comments
   - Releases
   - Stars
6. Click "Add webhook"

**Step 3: Verify**
- GitHub sends a ping immediately
- Check #github-feed for a confirmation message
- If no message, verify the URL ends with /github

### Repos to Connect
- dstolts/covenai (primary)
- dstolts/jitneuro (framework)
- Additional community repos as needed

---

## 4. AUTOMOD RULES

Configure in Server Settings > AutoMod.

### Rule 1: Block Spam Content
- **Toggle:** ON
- **Action:** Block message + Send alert to #mod-log
- **Applies to:** All channels

### Rule 2: Commonly Flagged Words
- **Toggle:** ON
- **Action:** Block message + Send alert to #mod-log
- **Covers:** Slurs, harassment, explicit content (Discord's built-in list)

### Rule 3: Custom Keyword Filter -- Anti-Promo Spam
- **Keywords:**
```
discord.gg
.gg/
free nitro
earn money fast
click here now
onlyfans
buy followers
```
- **Action:** Block message + Timeout member 60 min + Alert #mod-log
- **Exempt roles:** @Sentinel, @Guildmaster

### Rule 4: Mention Spam
- **Max mentions per message:** 5
- **Action:** Block message + Timeout member 60 min

---

## 5. MODERATION ESCALATION

| Offense | Action | Tool |
|---------|--------|------|
| First warning | Verbal warning via DM | Carl-bot /warn |
| Second offense | 1-hour timeout | Carl-bot /mute |
| Third offense | 24-hour timeout | Manual or Carl-bot |
| Severe / repeated | Ban | @Sentinel or @Guildmaster only |
| Spam bot / raid | Immediate ban | No warnings needed |
