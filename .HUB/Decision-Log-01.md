# CovenAI Decision Log
**Session:** covenai-build
**Created:** 2026-03-24
**Context:** Dan AFK, full autonomous decision-making authority granted.

All decisions logged here for Dan's review on return.

## Decisions

### D001 - Decision Log Structure (2026-03-24 02:50)
**Decision:** Create this decision log at .HUB/Decision-Log-01.md
**Reasoning:** Dan requested all decisions be logged in a reviewable markdown. This is the standard DOE location.
**Impact:** Low -- documentation only.

### D002 - Git Init Before Scaffold (2026-03-24 02:50)
**Decision:** Initialize git repo and push to GitHub before scaffolding Next.js
**Reasoning:** Clean git history -- initial commit with docs/specs, then scaffold commit, then feature commits. Easier to review.
**Impact:** Low -- ordering only.

### D003 - Lovable Prompt as Standalone Doc (2026-03-24 02:50)
**Decision:** Write Lovable prompt as docs/lovable-prompt-01.md rather than embedding in Hub
**Reasoning:** Dan will copy-paste it into Lovable. Standalone file is easier to find and paste from.
**Impact:** Low -- file location.

### D004 - Discord Content as Ready-to-Paste Package (2026-03-24 02:50)
**Decision:** Create Discord content as individual ready-to-paste files (channel descriptions, welcome message, rules, etc.) rather than one monolithic guide
**Reasoning:** Dan can paste each piece directly into Discord. Faster setup, less context switching.
**Impact:** Medium -- affects how Discord setup is executed.

### D005 - Scaffold Next.js During This Session (2026-03-24 02:50)
**Decision:** Scaffold the full Next.js 16 project with placeholder pages now, even though Phase 1 landing page will be via Lovable
**Reasoning:** Phase 2 needs the codebase. Getting the skeleton in place now means Dan can review structure. Lovable output can be integrated into the existing scaffold later.
**Impact:** Medium -- creates the codebase structure.

### D006 - Social Media Content Package (2026-03-24 02:50)
**Decision:** Write all social media bios and profile content for @covenai accounts
**Reasoning:** Dan needs consistent branding across platforms. Having copy ready means he just creates accounts and pastes.
**Impact:** Low -- content prep.

### D007 - Work on uat Branch (2026-03-24 03:10)
**Decision:** Push to uat branch instead of master. Global hook blocks master push as RED zone.
**Reasoning:** CovenAI CLAUDE.md says ALL GREEN pre-launch, but the global branch-protection hook doesn't differentiate per-repo. Working on uat follows DOE protocol and Dan can merge to master on return.
**Impact:** Low -- standard DOE workflow.

### D008 - App Subdirectory for Next.js (2026-03-24 03:10)
**Decision:** Scaffold Next.js in D:\Code\CovenAI\app\ subdirectory rather than root
**Reasoning:** Root contains docs/, assets/, .HUB/, automation/, and other non-app content. Keeping the Next.js app in app/ keeps the repo clean and allows docs/assets to exist at root level without polluting the app.
**Impact:** Medium -- affects deploy config (Vercel root directory = app/).

### D009 - Imagen 4 for Image Generation (2026-03-24 03:15)
**Decision:** Use Google Imagen 4 (imagen-4.0-generate-001 via google-genai SDK) for all brand assets
**Reasoning:** Only available image API key. Gemini 2.0 Flash model was deprecated; Imagen 4 is current. Generated 13 total assets: 2 logos, 8 tier badges, 1 social banner, 1 OG image, 1 year badge. Estimated cost ~$0.87. All assets match brand spec (gold/purple/slate palette, medieval-meets-code aesthetic, no occult imagery).
**Impact:** Low -- asset generation, excellent quality.

### D010 - GitHub Repo Made Public (2026-03-24 03:10)
**Decision:** Created github.com/dstolts/covenai as public repo
**Reasoning:** CovenAI is explicitly open source per brand identity. Public from day one aligns with "Open Source, Open Knowledge" value.
**Impact:** Medium -- public visibility from start.

### D011 - N8N Domain Monitor Uses GoDaddy + RDAP (2026-03-24 03:10)
**Decision:** Domain price monitor workflow uses GoDaddy Appraisal API + RDAP WHOIS lookup
**Reasoning:** Free APIs, no additional credentials needed. GoDaddy provides price estimates, RDAP provides registration status and expiry. Alert only triggers on status changes (domain drops, price changes).
**Impact:** Low -- monitoring only.

### D012 - MIT License (2026-03-24 03:20)
**Decision:** Use MIT license for the CovenAI repo
**Reasoning:** Most permissive common OSS license. Aligns with "Open Source, Open Knowledge" value. Matches the project's positioning as a deployable framework anyone can use.
**Impact:** Low -- standard for OSS projects.

### D013 - Azure SQL Schema in covenai Schema (2026-03-24 03:20)
**Decision:** Use `covenai` schema within existing JitAutomation database rather than a separate database
**Reasoning:** Consistent with Dan's existing infrastructure pattern. All projects share the JitAutomation DB on DEVINFRAVM, separated by schema. Avoids new DB provisioning.
**Impact:** Medium -- database architecture decision. Dan reviews and runs the migration.

### D014 - Discord Content as 8 Separate Files (2026-03-24 03:20)
**Decision:** Created 8 individual Discord setup files (server-description, channel-descriptions, welcome-message, rules, role-descriptions, onboarding-flow, bot-config, announcement-templates)
**Reasoning:** Each file is paste-ready for the specific Discord section. Faster setup than reading a monolithic guide and extracting pieces.
**Impact:** Low -- content organization.

### D015 - GitHub Issue/PR Templates with Points (2026-03-24 03:25)
**Decision:** Created bug report, feature request, and PR templates that mention CovenAI point values
**Reasoning:** Reinforces the gamification system from the very first contribution touchpoint. Contributors see point values before submitting.
**Impact:** Low -- contributor experience.
