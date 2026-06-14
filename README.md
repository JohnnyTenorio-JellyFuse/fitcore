# FitCore — AI Fitness OS

A local-first fitness tracking web app built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no npm dependencies — just a static server and the browser.

Dashboard · Nutrition · Workouts · Progress · Shop · Profile

---

## Why this exists

This started as a personal tool for tracking daily nutrition, workouts, water intake, and weight progress during a structured fat-loss program. It's included here as an example of building a multi-view single-page app without any framework — just a state object, a render function, and event delegation.

---

## Run website

Live demo: https://fitcore-swart.vercel.app/

---

## Project Structure

```
fitcore/
├── index.html   — static shell (sidebar, nav, modal placeholder)
├── style.css    — all styles
├── app.js       — all state, render functions, and event handlers
├── server.js    — zero-dependency static server
├── package.json
└── README.md
```

---

## Architecture

No React, no npm, no build step. The app uses a simple render pattern:

- **State** lives in a plain JS object `S` at the top of `app.js`
- **`render()`** re-renders only `<main id="main-content">` — the sidebar is static HTML
- **Actions** (button clicks, form submits) update `S`, call `persist()` to localStorage, then call `render()`
- **Forms** are read at submit time — no reactive binding, no re-render on every keystroke

The food search (`filterFoods()`) is a partial update — it only re-renders the food list div, not the whole page, so the search input keeps focus.

---

## Editing Guide

| File | What to change |
|---|---|
| `app.js` | `C` object (colors), `FOODS` array, `WORKOUTS` array, `SHOP_ITEMS` array |
| `style.css` | Layout, typography, responsive breakpoints |
| `index.html` | Sidebar nav items, page title, meta tags |

### Add a food to the database

```js
{ name: 'Your Food', cals: 200, protein: 20, carbs: 10, fat: 8 },
```

### Add a workout program

```js
{ name: 'Shoulder Day', icon: '🏋️', color: '#8b5cf6', duration: '45 min', cals: 260, sets: 'OHP 4x8 | Lateral 3x12 | Rear Delt 3x15' },
```

---

## Data Persistence

All data saves to `localStorage` automatically on every action:

| Key | Data |
|---|---|
| `fc_profile` | Name, weight, height, age, goal, activity |
| `fc_foods` | Today's food log |
| `fc_workouts` | Completed workout history |
| `fc_water` | Today's water intake |
| `fc_weightlog` | Weight tracking history |

To reset: open browser DevTools → Application → Local Storage → delete keys starting with `fc_`.
