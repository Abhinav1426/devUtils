# Dependency Upgrade & Security Fixes — 2026-11-05

Commit: `b40705d` on `develop` — *fix(deps): upgrade all dependencies and resolve security vulnerabilities*

## Summary

| Check | Before | After |
| --- | --- | --- |
| `npm audit` | 10 moderate vulnerabilities | **0 vulnerabilities** |
| `npm run lint` | Broken (`next lint` removed in Next 16, `.eslintrc` unsupported in ESLint 10) | Passes |
| `tsc --noEmit` | Fails (TS 6/7 deprecations, React 19 `JSX` namespace) | Passes |
| `npm run build` | Styling broken (Tailwind 3 config on Tailwind 4) | Passes, all 9 routes prerendered |

## 1. Security vulnerability fixed

### minimatch — GHSA-g3hv-75wg-m249 (moderate)

- **Issue:** Denial of service via "globparts amplification" (ReDoS) in `minimatch` `7.0.0 – 11.0.0`.
- **Pulled in by:** `eslint@10` → `@eslint/config-array`, and `eslint-config-next` → `typescript-eslint` → `@typescript-eslint/typescript-estree`.
- **Fix:** Added an npm override in `package.json` forcing the patched version:

  ```json
  "overrides": {
    "minimatch@>=7.0.0 <11.0.1": "^11.0.4"
  }
  ```

- **Why not `npm audit fix --force`:** it would have downgraded ESLint to 9.x. The override fixes the vulnerability while keeping ESLint 10.
- The `minimatch@3.1.5` copies used by `eslint-plugin-import`, `eslint-plugin-react` and `eslint-plugin-jsx-a11y` are outside the affected range and were left alone.

## 2. Dependency versions

| Package | Old (main) | New |
| --- | --- | --- |
| next | 16.2.4 | 16.4.5 |
| eslint-config-next | 16.2.4 | 16.4.5 |
| react / react-dom | 19.2.5 | 19.3.1 |
| eslint | 10.2.1 | 10.14.0 |
| tailwindcss | 4.2.2 | 4.3.4 |
| @tailwindcss/postcss | — | 4.3.4 (new) |
| autoprefixer | 10.5.0 | removed (built into Tailwind v4) |
| postcss | 8.5.10 | 8.5.32 |
| daisyui | ^5.5.19 | ^5.7.50 |
| typescript | 6.0.3 | 6.0.3 (kept — see below) |
| @types/node | 25.6.0 | 26.6.6 |
| @types/react / @types/react-dom | 19.2.14 / 19.2.3 | 19.3.0 / 19.3.0 |
| react-icons | ^5.6.0 | ^5.7.0 |
| tailwind-merge | ^3.5.0 | ^3.7.0 |

**TypeScript held at 6.0.3 (not 7.0.2):** `typescript-eslint` only supports `typescript <6.1.0`, and TS 7 is the native (Go) rewrite with a different API that Next.js type-checking and ESLint tooling don't support yet.

`package-lock.json` was fully regenerated.

## 3. Tailwind CSS v4 migration

The previous upgrade moved Tailwind 3 → 4 without migrating the config, so styles weren't being generated correctly.

- `postcss.config.js`: plugin `tailwindcss` + `autoprefixer` → `@tailwindcss/postcss`.
- `src/app/globals.css`: `@tailwind base/components/utilities` → `@import "tailwindcss"`, plus CSS-first config.
- `tailwind.config.ts` deleted; its settings moved into `globals.css`:
  - Custom range breakpoints kept exactly via `@custom-variant`:
    - `sm` 200–767px, `md` 768–1300px, `laptop` 1201–1572px, `lg` ≥1301px
  - Default border color restored to gray-200 (v4 changed it to `currentColor`).
- Renamed utilities in components:
  - `shadow-sm` → `shadow-xs`
  - `rounded-sm` → `rounded-xs`
  - `outline-none` → `outline-hidden`
  - `flex-grow` → `grow`

## 4. daisyUI v5 migration

- Configured via `@plugin "daisyui" { themes: light --default, dark, black, dracula; }` in `globals.css`.
- `tabs-lifted` → `tabs-lift` (`src/components/tabPanel.tsx`).
- `select-bordered` removed (selects are bordered by default in v5).
- `label` / `label-text` changed / removed in v5 → replaced with equivalent utilities
  (`flex select-none items-center justify-between px-1 py-2` and `text-sm`) to keep the old look.

## 5. ESLint migration

- `.eslintrc.json` → `eslint.config.mjs` (flat config, same `next/core-web-vitals` rules).
- `npm run lint` script: `next lint` → `eslint .` (`next lint` was removed in Next 16).
- New `react-hooks` v7 (React Compiler) rule fixes:
  - `baseNumberConverter` & `stringCaseConverter`: moved the `useEffect` below the function it calls; added `react-hooks/set-state-in-effect` to the existing disable comment (behavior unchanged).
  - `themeContext.tsx`: targeted disable for the `setIsMounted(true)` hydration guard (theme is read from `localStorage`).
  - `navBar.tsx`: removed an unused `eslint-disable` comment.

## 6. TypeScript / React 19 fixes

- `copyButton.tsx`, `pageHeadding.tsx`, `tabPanelText.tsx`: `JSX.Element` → `React.JSX.Element` (React 19 types removed the global `JSX` namespace).
- `tsconfig.json`: `target` `es5` → `ES2017` (`es5` is deprecated in TS 6; Next compiles with SWC so this only affects type-checking). Next.js also auto-set `jsx: react-jsx` and added `.next/dev/types/**/*.ts` to `include`.

## 7. How it was verified

1. Lockfile resolved with `npm install --package-lock-only --ignore-scripts` and audited **before** installing anything.
2. Confirmed no package in the tree has an install script, then installed with `npm ci`.
3. `npm audit` → 0 vulnerabilities.
4. `npx eslint .` → clean. `npx tsc --noEmit` → clean.
5. `npm run build` → success; all routes prerendered statically.
6. Inspected built CSS: custom breakpoints, all 4 daisyUI themes and renamed classes present.
7. `next start` smoke test: all `/utilities/*` routes return 200, `/` → 308 redirect to `/utilities`, unknown route → 404, CSS served.

## Known remaining warnings (not vulnerabilities)

- npm peer-dependency warnings: `eslint-plugin-import`, `eslint-plugin-jsx-a11y` and `eslint-plugin-react` (bundled by `eslint-config-next`) don't yet declare ESLint 10 support. Lint runs fine; these will clear when those plugins release updates.
- No in-browser visual check was done — worth a quick click-through of each utility page and the theme toggle.
