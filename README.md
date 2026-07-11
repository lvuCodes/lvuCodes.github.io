# lvuCodes.github.io

Personal site built with [Vite](https://vite.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org), deployed to GitHub Pages.

**Live:** https://lvucodes.github.io

## Local development

```bash
npm install       # first time only
npm run dev       # dev server with hot reload at http://localhost:5173
npm run build     # type-check (tsc) + production build into dist/
npm run preview   # serve the built dist/ locally to sanity-check it
```

## Code quality

```bash
npm run lint          # oxlint — fast static analysis
npm run format        # prettier — rewrite files to the canonical style
npm run format:check  # prettier — report formatting issues without writing (used in CI-style checks)
```

- **Linting:** [oxlint](https://oxc.rs) (ships with the Vite template).
- **Formatting:** [Prettier](https://prettier.io), configured in [`.prettierrc.json`](.prettierrc.json). oxlint doesn't format, so the two are complementary.
- **Types:** strict TypeScript via the `tsconfig.*.json` files; `npm run build` fails on type errors.

## Deployment

Deployment is automatic. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`: it installs, builds, and publishes `dist/` to GitHub Pages. Build artifacts are never committed — `dist/` is gitignored.

Edit loop: change files under `src/` → `git commit` → `git push`. The site rebuilds and redeploys in about a minute.

## Notes

- This is a GitHub Pages **user site** served at the domain root, so Vite's `base` stays `/` (the default). No base-path configuration is needed.
- If client-side routing is added later (e.g. React Router), Pages needs a `404.html` fallback (or hash routing) for deep links to resolve on refresh.
