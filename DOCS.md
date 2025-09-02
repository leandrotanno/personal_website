# Project Documentation and Change Log

This document explains the structure of the project, the key files, and all changes made in this session.

## Top-level
- index.html — App entry HTML; sets title, meta description, and favicon.
- package.json — scripts (dev/build/server), pnpm as package manager.
- tailwind.config.ts, postcss.config.js, client/global.css — styling and print rules.

## Client application (client/)
- App.tsx — Router + providers; routes: `/` and `/resume`.
- components/Layout.tsx — Global layout: header/nav, theme toggle, footer, decorative background.
  - Print: header/background/footer are hidden via `.no-print`. Background div also has `no-print`.
- components/ui/logo.tsx — SVG Logo and LogoText used in header.
- components/ui/terminal.tsx — Terminal animation component.
  - Props: `commands` (array of TerminalCommand), `config` (timings, height), `onComplete` (callback at end).
  - Behavior: flattens commands into a single sequence, prints lines with jitter, auto-scrolls.
  - StrictMode guard: avoids double-run in dev (skips first effect pass) and clears lines before start.
  - Start is delayed two RAF ticks for stable mount; calls `onComplete` on the last line.
- components/DashboardViz.tsx — Single dashboard section with 6 compact charts (Recharts).
  - Charts: Feature importance (Bar), Survivors by sex (Pie), Survivors by class (Bar), Age distribution (Bar), Survivors by embark port (Pie), Fare distribution (Area).
  - Styling: unified tooltip style (violet background, light text), transparent hover cursor, legends with light text.
  - Layout: 3x2 responsive grid inside a single "dashboard" card.
- pages/Index.tsx + sections/HeroSection.tsx — Landing hero, name, terminal (left), dashboard (right).
  - Uses a 12-col grid: terminal spans 5, dashboard spans 7.
  - Shows a skeleton dashboard until the terminal completes.
  - Runs a single script (training) to sync with the dashboard reveal.
  - Delay after completion is controlled in `onComplete` (setTimeout) for precise timing.
- pages/Resume.tsx — Print-first resume page.
  - Header: photo placeholder (enlarged), two info cards, print-friendly colors.
  - Experience: card with bullet points and badges.
  - Skills: badges (no bars).
  - Ferramentas: chips ready to host SVG logos (ToolChip uses a gradient avatar + label).
  - Print helpers: `.print-card`, `.print-no-border`, `.avoid-break`, `print-muted`.

## Utilities (client/utils)
- utils/constants.ts — Core data/config.
  - profileData, skills (with tools), projects, social links.
  - terminalCommands: includes the Titanic training, jupyter, git commit, etc.
  - terminalConfig (current):
    - stepDelay: 28, stepVariation: 18, commandPause: 140, startDelay: 25,
    - terminalHeight: 440px, maxLines: 18.

## Key Changes (this session)
1. Hero + Dashboard
   - Consolidated 6 charts into a single dashboard section (right column), compact grid 3x2.
   - Aligned terminal and dashboard in the same row; terminal height tuned for visual balance.
   - Charts appear strictly after terminal completion; skeleton shown until then.
   - Tooltip/legend colors unified; removed white hover block on bars; full city names for ports.
2. Terminal animation
   - Accelerated timings via terminalConfig; kept readability.
   - Triggered `onComplete` exactly at the last printed line.
   - DEV StrictMode guard to prevent duplicate runs; lines cleared at start; two-RAF start stabilization.
   - Runs a single script via HeroSection (memoized `singleScript`).
3. Resume (print-friendly)
   - New layout inspired by the provided references; A4 print optimized.
   - Removed heavy borders/shadows in print; forced white background/black text.
   - Replaced progress bars with skill badges and a separate Ferramentas section (chips, ready for SVG logos).
   - Enlarged photo and reduced header card density to feature the avatar.
4. Branding
   - Added favicon (public/favicon.svg) and Logo/LogoText components; header updated.

## Where to edit what
- Terminal speed/height: client/utils/constants.ts (terminalConfig).
- Terminal sequence: client/utils/constants.ts (terminalCommands). HeroSection restricts it to one command.
- Reveal timing: client/sections/HeroSection.tsx (`onComplete` setTimeout).
- Charts/data/layout: client/components/DashboardViz.tsx.
- Tooltip/legend style: DashboardViz `tooltipStyle` and Legend wrapperStyle.
- Print look: client/global.css `@media print` rules; resume cards/structure in client/pages/Resume.tsx.
- Header/nav/theme: client/components/Layout.tsx.

## Notes
- Package manager: pnpm (see package.json).
- Deployment: use Netlify/Vercel MCP if needed (not configured here).
