# DOE Framework - CovenAI - Guardrails

## Identity
This project operates under the DOE framework (Directive Orchestration Execution).
See project passport in root CLAUDE.md for what this project IS.

## Trust Zones (PRE-LAUNCH -- ALL GREEN)
Everything is GREEN until we go live. No production users, no risk.

| Zone | Actions | Behavior |
|------|---------|----------|
| GREEN | ALL actions including push, schema, deploy, dependencies | Execute freely |

**NOTE:** Tighten trust zones before production launch. Add YELLOW/RED gates for push-to-main, DB migrations, and production deploy once live.

## Quality Standards
- ASCII only (no emojis, no special characters)
- Fix root cause (never skip, disable, or bypass functionality)
- Test before commit (tsc --noEmit for TypeScript, run tests)
- Always use "CovenAI" as one word (not "Coven AI")
- Dark theme by default, mobile-first

## Context Loading
- Read root CLAUDE.md for project identity and key paths
- Read D:\Code\.claude\engrams\covenai-context.md for deeper detail
- Read brain (MEMORY.md) for cross-project business context
