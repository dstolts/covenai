# Contributing to CovenAI

CovenAI is open source and welcomes contributions from anyone who wants to build a better community engagement framework.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/covenai.git`
3. Install dependencies: `cd app && pnpm install`
4. Create a feature branch: `git checkout -b feature/your-feature`
5. Run the dev server: `pnpm dev`

## Development

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **Package manager:** pnpm

### Project Structure

```
app/
  src/
    app/         # App Router pages (each folder = route)
    components/  # Shared UI components
    lib/         # Shared utilities, data, types
  public/        # Static assets
```

### Code Standards

- TypeScript strict mode -- no `any` types
- Tailwind CSS for all styling (no CSS modules, no styled-components)
- Server components by default, `"use client"` only when needed
- ASCII only in all user-facing text (no emojis)
- Dark theme only (no light mode)

### Commit Messages

Use clear, imperative-mood messages:
- `feat: add weekly challenge submission form`
- `fix: correct tier point thresholds`
- `docs: update README with deployment steps`

## Pull Requests

1. Keep PRs focused -- one feature or fix per PR
2. Include a description of what changed and why
3. Ensure `pnpm build` passes with no errors
4. Update tests if applicable

## Earning CovenAI Points

Every contribution earns points in the CovenAI tier system:

| Contribution | Points |
|-------------|--------|
| Bug fix PR merged | 25 |
| New feature PR merged | 50 |
| Major feature PR merged | 100 |
| Valid issue filed | 10 |
| Issue reproduced/triaged | 15 |
| Documentation improvement | 15 |

## Questions?

- Open a GitHub Discussion for questions
- Join our Discord for real-time chat
- Check the [gamification spec](docs/gamification-spec-01.md) for system details

## Code of Conduct

Be respectful, constructive, and inclusive. We're builders who lift other builders.
