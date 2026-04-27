# Discord Onboarding Flow
**Configure in Server Settings > Community > Onboarding**

---

## Default Channels (Everyone Sees These After Onboarding)

- #welcome
- #rules
- #general
- #claude-code-help
- #challenges

---

## Onboarding Questions

### Question 1: "What brings you to The Coven?"

| Answer | Action |
|--------|--------|
| "I use Claude Code daily" | Adds #prompt-craft, #code-review |
| "I am learning Claude Code" | Adds #claude-code-help, #resources |
| "I want to compete in challenges" | Adds @Challenger role, #challenges, #ship-with-claude |
| "I am here for JitNeuro / open source" | Adds #jitneuro-dev |

Allow multiple selections: Yes

### Question 2: "What do you build with?"

| Answer | Action |
|--------|--------|
| "TypeScript / JavaScript" | Informational only |
| "Python" | Informational only |
| "Multiple languages" | Informational only |
| "I am not a coder yet" | Informational only |

Allow multiple selections: No
Purpose: Community insight. No channel or role changes.

### Question 3: "Want challenge notifications?"

| Answer | Action |
|--------|--------|
| "Yes, notify me when challenges drop" | Adds @Challenger role |
| "No, I will check manually" | No action |

Allow multiple selections: No

---

## Rules Screen

Point to #rules channel. Discord displays this as part of the onboarding wizard.

---

## Verification

After completing onboarding, members automatically receive @Verified role.
This unlocks Send Messages permission across all public channels.

Without @Verified, members can only view #welcome, #rules, and #role-select.

---

## Alternative Manual Verification (Carl-bot)

If Discord's built-in onboarding is not available or you prefer manual verification:

1. Create a #verify channel visible to @everyone
2. Post this message:

```
Welcome to The Coven.

To gain access to the server, react to this message with a checkmark.
By reacting, you confirm you have read and agree to the rules in #rules.
```

3. Configure Carl-bot reaction role: Checkmark reaction -> @Verified role
4. After verification, #verify becomes read-only (members already have the role)
