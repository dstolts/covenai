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
