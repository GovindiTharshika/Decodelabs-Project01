# DecodeLabs — Project 1: Responsive Frontend Interface

Industrial Training Kit · Batch 2026 · Powered by DecodeLabs

A fully responsive, accessible, and production-grade frontend web application built using pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no libraries.

---

## 🎯 Project Overview

This is Project 1 of the DecodeLabs Full Stack Development internship program. The goal was to build a complete responsive frontend interface — the "interface phase" — before connecting any backend databases.

The focus: Adaptability over fixed dimensions. Every layout decision was made mobile-first, and expanded outward.

---

## ✨ Features

- ✅ Fully Responsive — works seamlessly on mobile, tablet, and desktop
- ✅ Mobile-First Architecture — built from smallest screen up
- ✅ Semantic HTML5 — proper use of `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- ✅ CSS Grid + Flexbox — Grid for macro layout, Flexbox for components
- ✅ Fluid Typography — using `clamp()` for smooth font scaling
- ✅ Accessible (WCAG) — ARIA labels, keyboard navigation, screen reader support
- ✅ Scroll Reveal Animations — staggered entrance animations via IntersectionObserver
- ✅ Hamburger Menu — animated mobile navigation with toggle state
- ✅ Active Nav Highlighting — tracks current section on scroll
- ✅ Back-to-Top Button — appears on scroll, smooth scroll to top
- ✅ Zero Dependencies — no Bootstrap, no jQuery, no frameworks

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure & Semantic Landmarks |
| CSS3 | Styling, Grid, Flexbox, Animations |
| Vanilla JavaScript | Interactivity & State Management |

---

## 🎨 Design System

**Color Palette (DecodeLabs 2025)**

- Mocha Mousse: `#A5856E` — Primary brand, CTAs, accents
- Ethereal Blue: `#A0D4E0` — Trust, tags, highlights
- Moonlit Grey: `#F2F0EA` — Backgrounds, surfaces
- Ink: `#2B2118` — Body text, headings

**Typography**

- Headlines: `Montserrat` (400, 600, 800)
- Body: `Lora` (400, 600)

(Max 2 font families · Max 3 font weights as per DecodeLabs spec)

---

## 📐 Layout Architecture (Mobile‑First)

```
┌─────────────────────────────────────┐
│           HEADER / NAV (60px)       │  ← Sticky, Flexbox
├─────────────────────────────────────┤
│           HERO SECTION (360px)      │  ← CSS Grid, radial gradients
├─────────────────────────────────────┤
│     FEATURES GRID (3-col desktop)   │  ← CSS Grid, responsive
├────────────────────────┬────────────┤
│   CONTENT GRID         │  SIDEBAR   │  ← Grid + Flexbox
│   (articles/cards)     │  (widgets) │
├────────────────────────┴────────────┤
│        ROADMAP (6 steps)            │  ← Timeline layout
├─────────────────────────────────────┤
│           CTA BANNER                │
├─────────────────────────────────────┤
│       FOOTER (4-col desktop)        │  ← Grid, 20px margin
└─────────────────────────────────────┘
```

**Responsive Breakpoints**

- Mobile First — default styles (single column)
- Tablet — `@media (min-width: 768px)` (2-col grid)
- Desktop — `@media (min-width: 1024px)` (3-col grid)

---

## 🗺️ Execution Roadmap (How I Built It)

Following the DecodeLabs 6-step framework:

1. Discovery — Defined the "How Might We" problem statement
2. Wireframe — Sketched grayscale, mobile-first layouts
3. Semantics — Wrote HTML structure with proper landmark elements
4. Style — Applied CSS Grid, Flexbox, and the 2025 color palette
5. Logic — Added JavaScript interactivity (menu, scroll effects)
6. Audit — Checked Lighthouse scores, WCAG compliance

---

## 🚀 Getting Started

No build tools or server required. Just open the file:

```bash
# Clone the repository
git clone https://github.com/sudhanshu00011/decodelabs-project1.git

# Navigate into the folder
cd decodelabs-project1

# Open in browser (double-click or use terminal)
# macOS
open index.html
# Windows
start index.html
# Linux
xdg-open index.html
```

### Deploy to GitHub Pages

```bash
# 1. Push your code to GitHub
git add .
git commit -m "feat: initial project 1 submission"
git push origin main

# 2. On GitHub choose Settings → Pages → Source: main branch → / (root)
# 3. Your site will be live at:
https://govinditharshika.github.io/Decodelabs-Project01/
```

---

## ♿ Accessibility

This project follows WCAG 2.1 guidelines where possible:

- All images have descriptive `alt` attributes
- Interactive elements have `aria-label` attributes
- Keyboard navigation is supported (Tab, Enter, Escape)
- Color contrast tuned for AA where practical
- Hamburger menu uses `aria-expanded` state
- Landmark roles are present for screen readers

---

## 📊 Performance Targets

- Lighthouse Performance: 90+
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Accessibility Score: 95+

Run Lighthouse in Chrome DevTools → Inspect → Lighthouse tab to audit.

---

## 🧠 Key Learnings

- Semantic HTML matters for accessibility, SEO, and AI parsing
- CSS Grid for macro layouts; Flexbox for component alignment
- Mobile-first design reduces breakpoints and complexity
- `clamp()` enables fluid typography with fewer media queries
- `IntersectionObserver` is more performant than heavy scroll listeners
- Good UX strives to be invisible to the user

---

