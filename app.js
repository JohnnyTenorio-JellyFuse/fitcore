'use strict';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════════════════════════ */

const C = {
  accent:    '#FF6B1A',
  accentGlow:'rgba(255,107,26,0.18)',
  orange:    '#FF6B1A',
  blue:      '#ffaa66',
  muted:     '#666666',
  border:    '#2a2a2a',
  danger:    '#ef4444',
  bg:        '#0a0a0a',
  card:      '#111111',
};

const TODAY = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

const FOODS = [
  { name: 'Chicken Breast (4oz)',      cals: 185, protein: 35, carbs:  0, fat:  4, meal: 'Lunch' },
  { name: 'Brown Rice (1 cup)',         cals: 216, protein:  5, carbs: 45, fat:  2, meal: 'Lunch' },
  { name: 'Eggs (2 large)',             cals: 143, protein: 13, carbs:  1, fat: 10, meal: 'Breakfast' },
  { name: 'Greek Yogurt (1 cup)',       cals: 130, protein: 17, carbs:  9, fat:  4, meal: 'Breakfast' },
  { name: 'Banana',                     cals: 105, protein:  1, carbs: 27, fat:  0, meal: 'Snacks' },
  { name: 'Oatmeal (1 cup)',            cals: 166, protein:  6, carbs: 28, fat:  4, meal: 'Breakfast' },
  { name: 'Salmon (4oz)',               cals: 233, protein: 25, carbs:  0, fat: 14, meal: 'Dinner' },
  { name: 'Broccoli (1 cup)',           cals:  55, protein:  4, carbs: 11, fat:  1, meal: 'Dinner' },
  { name: 'Sweet Potato (medium)',      cals: 103, protein:  2, carbs: 24, fat:  0, meal: 'Dinner' },
  { name: 'Protein Shake',             cals: 150, protein: 25, carbs:  5, fat:  3, meal: 'Snacks' },
  { name: 'Almonds (1oz)',             cals: 164, protein:  6, carbs:  6, fat: 14, meal: 'Snacks' },
  { name: 'Avocado (half)',            cals: 120, protein:  2, carbs:  6, fat: 11, meal: 'Lunch' },
  { name: 'Cottage Cheese (1/2 cup)', cals: 110, protein: 13, carbs:  5, fat:  5, meal: 'Breakfast' },
  { name: 'Tuna (can)',                cals: 130, protein: 28, carbs:  0, fat:  2, meal: 'Lunch' },
  { name: 'Apple',                     cals:  95, protein:  0, carbs: 25, fat:  0, meal: 'Snacks' },
  { name: 'White Rice (1 cup)',        cals: 206, protein:  4, carbs: 45, fat:  0, meal: 'Dinner' },
  { name: 'Steak (4oz)',               cals: 250, protein: 26, carbs:  0, fat: 17, meal: 'Dinner' },
  { name: 'Milk (1 cup)',              cals: 122, protein:  8, carbs: 12, fat:  5, meal: 'Breakfast' },
];

const MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

const WORKOUTS = [
  { name: 'Push Day',  icon: '💪', color: '#FF6B1A', duration: '45 min', cals: 280, sets: 'Bench 4x8 | OHP 3x10 | Tricep 3x12' },
  { name: 'Pull Day',  icon: '🏋️', color: '#0ea5e9', duration: '50 min', cals: 310, sets: 'Rows 4x8 | Pull-ups 3x10 | Curls 3x12' },
  { name: 'Leg Day',   icon: '🦵', color: '#10b981', duration: '55 min', cals: 380, sets: 'Squat 4x8 | DL 3x5 | Lunges 3x12' },
  { name: 'Cardio',    icon: '🏃', color: '#f59e0b', duration: '30 min', cals: 250, sets: 'HIIT / Steady State' },
  { name: 'Core',      icon: '🎯', color: '#ef4444', duration: '25 min', cals: 150, sets: 'Planks | Crunches | Leg Raises' },
  { name: 'Rest Day',  icon: '😴', color: '#64748b', duration: '—',      cals:   0, sets: 'Recovery & Mobility' },
];

const SHOP_ITEMS = [
  { id: 1, name: 'Whey Protein Isolate',  desc: '25g protein per serving, ultra-filtered, fast-absorbing',   price: 49.99, emoji: '🥛', category: 'Protein',     badge: 'Best Seller', rating: 4.8 },
  { id: 2, name: 'Creatine Monohydrate',  desc: '5g pure creatine, increases strength & muscle mass',        price: 24.99, emoji: '⚡', category: 'Performance', badge: 'Top Rated',  rating: 4.9 },
  { id: 3, name: 'Pre-Workout Blend',     desc: '200mg caffeine, beta-alanine, citrulline malate',           price: 39.99, emoji: '🔥', category: 'Performance', badge: null,         rating: 4.6 },
  { id: 4, name: 'Multivitamin Pack',     desc: 'Daily essentials: Vitamin D3, K2, Zinc, Magnesium',        price: 29.99, emoji: '💊', category: 'Vitamins',    badge: 'Essential',  rating: 4.7 },
  { id: 5, name: 'Omega-3 Fish Oil',      desc: '2g EPA/DHA, supports heart & joint health',                price: 22.99, emoji: '🐟', category: 'Vitamins',    badge: null,         rating: 4.5 },
  { id: 6, name: 'Bone Density Support',  desc: 'Calcium, Vitamin D3, K2 complex for bone health',          price: 34.99, emoji: '🦴', category: 'Vitamins',    badge: 'New',        rating: 4.4 },
  { id: 7, name: 'BCAA Powder',           desc: '2:1:1 ratio leucine, isoleucine, valine blend',            price: 27.99, emoji: '🧪', category: 'Protein',     badge: null,         rating: 4.3 },
  { id: 8, name: 'Collagen Peptides',     desc: 'Supports joint recovery, skin, hair & nails',              price: 32.99, emoji: '🌱', category: 'Recovery',    badge: null,         rating: 4.6 },
  { id: 9, name: 'Sleep & Recovery',      desc: 'Magnesium glycinate, ashwagandha, melatonin 3mg',          price: 36.99, emoji: '🌙', category: 'Recovery',    badge: 'Fan Fave',   rating: 4.8 },
];

const NAV_IDS = ['dashboard', 'nutrition', 'workouts', 'progress', 'shop', 'profile'];

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */

const S = {
  page: 'dashboard',
  profile: { name: '', weight: '', height: '', age: '', sex: 'male', goal: 'lose', activity: 'moderate', boneDensity: '' },
  foods: [],
  completedWorkouts: [],
  water: 0,
  cart: [],
  weightLog: [],
  nutritionTab: 'library',
  shopTab: 'All',
};

/* ═══════════════════════════════════════════════════════════════
   STORAGE
═══════════════════════════════════════════════════════════════ */

function persist(key, val) {
  try { localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val)); } catch {}
}

function load() {
  try {
    const p  = localStorage.getItem('fc_profile');   if (p)   S.profile = JSON.parse(p);
    const f  = localStorage.getItem('fc_foods');     if (f)   S.foods = JSON.parse(f);
    const w  = localStorage.getItem('fc_workouts');  if (w)   S.completedWorkouts = JSON.parse(w);
    const wa = localStorage.getItem('fc_water');     if (wa)  S.water = parseInt(wa);
    const wl = localStorage.getItem('fc_weightlog'); if (wl)  S.weightLog = JSON.parse(wl);
  } catch {}
}

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */

function calcBMR({ weight, height, age, sex }) {
  if (!weight || !height || !age) return 2000;
  const w = parseFloat(weight), h = parseFloat(height), a = parseInt(age);
  return sex === 'female'
    ? 10*w*0.453592 + 6.25*h*2.54 - 5*a - 161
    : 10*w*0.453592 + 6.25*h*2.54 - 5*a + 5;
}

function calcTDEE(profile) {
  const m = { sedentary:1.2, light:1.375, moderate:1.55, active:1.725, veryActive:1.9 };
  return Math.round(calcBMR(profile) * (m[profile.activity] || 1.375));
}

function calcGoalCals(profile) {
  const t = calcTDEE(profile);
  if (profile.goal === 'lose') return t - 500;
  if (profile.goal === 'gain') return t + 300;
  return t;
}

function calcBMI(weight, height) {
  if (!weight || !height) return null;
  return ((parseFloat(weight) * 703) / (parseFloat(height) ** 2)).toFixed(1);
}

function bmiInfo(bmi) {
  const v = parseFloat(bmi);
  if (v < 18.5) return { label: 'Underweight', color: C.blue };
  if (v < 25)   return { label: 'Normal',      color: C.accent };
  if (v < 30)   return { label: 'Overweight',  color: C.orange };
  return { label: 'Obese', color: C.danger };
}

function compute() {
  const goalCals     = calcGoalCals(S.profile);
  const totalCals    = S.foods.reduce((s, f) => s + f.cals, 0);
  const totalProtein = S.foods.reduce((s, f) => s + f.protein, 0);
  const totalCarbs   = S.foods.reduce((s, f) => s + f.carbs, 0);
  const totalFat     = S.foods.reduce((s, f) => s + f.fat, 0);
  const goalProtein  = Math.round((parseFloat(S.profile.weight) || 150) * 0.8);
  const calPct       = Math.min((totalCals / goalCals) * 100, 100);
  const remaining    = Math.max(goalCals - totalCals, 0);
  const bmi          = calcBMI(S.profile.weight, S.profile.height);
  const bi           = bmi ? bmiInfo(bmi) : null;
  const streak       = S.completedWorkouts.length;
  const cartCount    = S.cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal    = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const todayStr     = new Date().toLocaleDateString();
  const burnedToday  = S.completedWorkouts.filter(w => w.date === todayStr).reduce((s, w) => s + (w.cals || 0), 0);
  return { goalCals, totalCals, totalProtein, totalCarbs, totalFat, goalProtein, calPct, remaining, bmi, bi, streak, cartCount, cartTotal, burnedToday };
}

/* ═══════════════════════════════════════════════════════════════
   UI FRAGMENTS
═══════════════════════════════════════════════════════════════ */

function ring(size, pct, color, bg = C.border, stroke = 10, inner = '') {
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = Math.min(pct / 100, 1) * circ;
  return `<div class="calorie-ring" style="width:${size}px;height:${size}px;flex-shrink:0">
    <svg width="${size}" height="${size}" style="transform:rotate(-90deg);display:block">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${bg}" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${dash} ${circ}"/>
    </svg>
    <div class="ring-center">${inner}</div>
  </div>`;
}

function bar(label, val, max, color, rightLabel = null) {
  const pct = Math.min((val / (max || 1)) * 100, 100);
  const right = rightLabel !== null
    ? rightLabel
    : `<span style="color:${color};font-family:'DM Mono',monospace">${val}</span>`;
  return `<div>
    <div class="progress-bar-label"><span>${label}</span>${right}</div>
    <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%;background:${color}"></div></div>
  </div>`;
}

function statCard(label, val, unit, color, sub = '') {
  return `<div class="stat-card" style="border-top:2px solid ${color}">
    <div class="stat-label">${label}</div>
    <div class="stat-value" style="color:${color}">${val}</div>
    <div class="stat-unit">${unit}</div>
    ${sub ? `<div style="font-size:11px;color:${C.muted};margin-top:6px">${sub}</div>` : ''}
  </div>`;
}

let _notifTimer = null;
function notify(msg) {
  const el = document.getElementById('notification');
  if (!el) return;
  el.textContent = '✅ ' + msg;
  el.style.display = 'block';
  clearTimeout(_notifTimer);
  _notifTimer = setTimeout(() => { el.style.display = 'none'; }, 3000);
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: DASHBOARD
═══════════════════════════════════════════════════════════════ */

function renderDashboard(c) {
  const { goalCals, totalCals, totalProtein, totalCarbs, totalFat, goalProtein, calPct, remaining, bmi, bi, streak, burnedToday } = c;
  const overCals = totalCals > goalCals;
  const ringCol  = overCals ? C.danger : C.accent;

  return `
    <div class="header-bar">
      <div>
        <div class="greeting">Good morning, ${S.profile.name || 'Athlete'} 👋</div>
        <div style="color:${C.muted};font-size:13px;margin-top:4px">${TODAY}</div>
      </div>
      <div class="date-chip">Day ${streak + 1} of your journey</div>
    </div>

    <div class="grid-4" style="margin-bottom:16px">
      ${statCard('Calories Left',  remaining,              'kcal',             C.accent, `Goal: ${goalCals}`)}
      ${statCard('Protein',        totalProtein + 'g',     `/ ${goalProtein}g goal`, '#ffb347', totalProtein >= goalProtein ? '✅ Goal met!' : `${goalProtein - totalProtein}g to go`)}
      ${statCard('Body Weight',    S.profile.weight || '--', 'lbs',            C.blue,   'Update in Progress')}
      ${statCard('Workout Streak', streak,                 'days',             C.orange, streak > 0 ? 'Keep it up! 🔥' : 'Start today!')}
    </div>

    <div class="grid-2" style="margin-bottom:16px">
      <div class="card" style="display:flex;align-items:center;gap:24px">
        ${ring(130, calPct, ringCol, C.border, 10, `<div class="ring-center-num" style="color:${ringCol}">${totalCals}</div><div class="ring-center-lbl">eaten</div>`)}
        <div style="flex:1">
          <div class="card-title">Today's Calories</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${bar('Eaten',     totalCals,    goalCals, C.accent)}
            ${bar('Burned',    burnedToday,  500,      C.orange)}
            ${bar('Remaining', remaining,    goalCals, C.blue)}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Macronutrients</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${bar('Protein', totalProtein, goalProtein,                      '#ffb347', `<span style="font-family:'DM Mono',monospace;color:#ffb347">${totalProtein}g / ${goalProtein}g</span>`)}
          ${bar('Carbs',   totalCarbs,   Math.round(goalCals * 0.45 / 4), C.blue,    `<span style="font-family:'DM Mono',monospace;color:${C.blue}">${totalCarbs}g / ${Math.round(goalCals * 0.45 / 4)}g</span>`)}
          ${bar('Fat',     totalFat,     Math.round(goalCals * 0.25 / 9), C.orange,  `<span style="font-family:'DM Mono',monospace;color:${C.orange}">${totalFat}g / ${Math.round(goalCals * 0.25 / 9)}g</span>`)}
        </div>
        <div class="divider"></div>
        <div style="display:flex;justify-content:space-around;text-align:center">
          ${[
            { label: 'Protein', val: Math.round((totalProtein * 4 / (totalCals || 1)) * 100), color: '#ffb347' },
            { label: 'Carbs',   val: Math.round((totalCarbs   * 4 / (totalCals || 1)) * 100), color: C.blue },
            { label: 'Fat',     val: Math.round((totalFat     * 9 / (totalCals || 1)) * 100), color: C.orange },
          ].map(m => `<div>
            <div style="font-size:20px;font-family:'Barlow Condensed',sans-serif;font-weight:800;color:${m.color}">${m.val}%</div>
            <div style="font-size:10px;color:${C.muted}">${m.label}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:16px">
      <div class="card">
        <div class="card-title">Hydration 💧</div>
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:800;color:${C.blue}">${S.water}</span>
          <span style="color:${C.muted};font-size:13px">/ 8 glasses</span>
        </div>
        <div class="water-drops">
          ${Array.from({ length: 8 }, (_, i) =>
            `<span class="drop ${i < S.water ? 'filled' : ''}" onclick="setWater(${i < S.water ? i : i + 1})">💧</span>`
          ).join('')}
        </div>
        <div style="font-size:12px;color:${C.muted};margin-top:10px">
          ${S.water >= 8 ? '✅ Daily goal achieved!' : `${8 - S.water} glasses remaining`}
        </div>
      </div>

      <div class="card">
        <div class="card-title">Health Metrics</div>
        ${bmi ? `
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <div>
              <div style="font-size:11px;color:${C.muted};text-transform:uppercase;letter-spacing:1px">BMI</div>
              <div style="font-family:'Barlow Condensed',sans-serif;font-size:28px;font-weight:800;color:${bi.color}">${bmi}</div>
              <span class="badge" style="background:${bi.color}22;color:${bi.color}">${bi.label}</span>
            </div>
            ${ring(80, Math.min((parseFloat(bmi) / 40) * 100, 100), bi.color, C.border, 7, `<div style="font-size:11px;font-weight:700;color:${bi.color}">${bmi}</div>`)}
          </div>
          <div class="divider"></div>
          <div style="display:flex;gap:16px">
            ${[['Weight', S.profile.weight + ' lbs'], ['Height', S.profile.height + ' in'], ['Age', S.profile.age + ' yr']].map(([l, v]) =>
              `<div style="text-align:center">
                <div style="font-size:11px;color:${C.muted}">${l}</div>
                <div style="font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px">${v || '--'}</div>
              </div>`
            ).join('')}
          </div>
        ` : `<div style="color:${C.muted};font-size:13px">Complete your profile to see health metrics.</div>`}
      </div>
    </div>

    ${S.foods.length > 0 ? `
      <div class="card">
        <div class="card-title">Today's Food Log</div>
        ${S.foods.slice(-4).map(f => `
          <div class="log-row">
            <div>
              <div class="log-name">${f.name}</div>
              <div class="log-macros">P: ${f.protein}g · C: ${f.carbs}g · F: ${f.fat}g</div>
            </div>
            <div class="log-cals">${f.cals} kcal</div>
          </div>`).join('')}
      </div>` : ''}
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: NUTRITION
═══════════════════════════════════════════════════════════════ */

function renderFoodListItems(search) {
  const filtered = FOODS.filter(f => f.name.toLowerCase().includes((search || '').toLowerCase()));
  return filtered.map((f, i) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid ${C.border}">
      <div>
        <div style="font-size:13px;font-weight:500">${f.name}</div>
        <div style="font-size:11px;color:${C.muted};font-family:'DM Mono',monospace">P:${f.protein}g C:${f.carbs}g F:${f.fat}g</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;color:${C.orange}">${f.cals}</span>
        <select class="input meal-select" id="meal-select-${FOODS.indexOf(f)}" style="padding:4px 6px;font-size:11px;width:auto">
          ${MEALS.map(m => `<option value="${m}" ${m === f.meal ? 'selected' : ''}>${m}</option>`).join('')}
        </select>
        <button class="btn btn-primary btn-sm" onclick="addFoodByIndex(${FOODS.indexOf(f)})">+</button>
      </div>
    </div>`).join('');
}

function renderNutrition(c) {
  const { totalCals, totalProtein, totalCarbs, totalFat, goalCals, goalProtein } = c;
  const tab = S.nutritionTab;

  return `
    <div class="page-title">Nutrition Tracker</div>
    <div class="page-sub">Track your daily food intake and macros</div>

    <div class="grid-4" style="margin-bottom:20px">
      ${[
        { label: 'Calories', val: totalCals,    goal: goalCals,                      color: C.orange },
        { label: 'Protein',  val: totalProtein, goal: goalProtein,                   color: '#ffb347' },
        { label: 'Carbs',    val: totalCarbs,   goal: Math.round(goalCals*0.45/4),   color: C.blue },
        { label: 'Fat',      val: totalFat,     goal: Math.round(goalCals*0.25/9),   color: C.accent },
      ].map(m => `<div class="stat-card">
        <div class="stat-label">${m.label}</div>
        <div class="stat-value" style="color:${m.color};font-size:22px">${m.val}<span style="font-size:13px;color:${C.muted}">/${m.goal}</span></div>
        <div style="margin-top:8px"><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${Math.min((m.val/(m.goal||1))*100,100)}%;background:${m.color}"></div></div></div>
      </div>`).join('')}
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Food Library</div>
        <div class="tab-bar">
          <div class="tab ${tab==='library'?'active':''}" onclick="setNutTab('library')">Library</div>
          <div class="tab ${tab==='custom' ?'active':''}" onclick="setNutTab('custom')">Custom</div>
        </div>

        ${tab === 'library' ? `
          <input class="input" id="food-search" placeholder="🔍 Search foods..." oninput="filterFoods()" style="margin-bottom:12px">
          <div id="food-list" style="max-height:360px;overflow-y:auto;padding-right:4px">
            ${renderFoodListItems('')}
          </div>
        ` : `
          <div class="form-group">
            <label class="form-label">Name</label>
            <input class="input" id="cf-name" placeholder="Food name">
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Calories</label><input class="input" id="cf-cals" type="number" placeholder="0"></div>
            <div class="form-group"><label class="form-label">Protein (g)</label><input class="input" id="cf-protein" type="number" placeholder="0"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Carbs (g)</label><input class="input" id="cf-carbs" type="number" placeholder="0"></div>
            <div class="form-group"><label class="form-label">Fat (g)</label><input class="input" id="cf-fat" type="number" placeholder="0"></div>
          </div>
          <div class="form-group">
            <label class="form-label">Meal</label>
            <select class="input" id="cf-meal">
              ${MEALS.map(m => `<option value="${m}">${m}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="addCustomFood()">Add Custom Food</button>
        `}
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <div class="card-title" style="margin:0">Today's Log</div>
          ${S.foods.length > 0 ? `<button class="btn btn-ghost btn-sm" onclick="clearFoods()">Clear</button>` : ''}
        </div>
        ${S.foods.length === 0
          ? `<div style="color:${C.muted};font-size:13px;text-align:center;padding:40px 0">No foods logged yet.<br><span style="color:${C.accent}">Add food from the library →</span></div>`
          : `<div style="max-height:420px;overflow-y:auto">
              ${MEALS.map(meal => {
                const items = S.foods
                  .map((f, i) => ({ ...f, _idx: i }))
                  .filter(f => (f.meal || 'Snacks') === meal);
                if (items.length === 0) return '';
                const mealCals = items.reduce((s, f) => s + f.cals, 0);
                return `
                  <div class="meal-group">
                    <div class="meal-group-header">
                      <span>${meal}</span>
                      <span class="meal-group-cals">${mealCals} kcal</span>
                    </div>
                    ${items.map(f => `
                      <div class="log-row">
                        <div>
                          <div class="log-name">${f.name}</div>
                          <div class="log-macros">P: ${f.protein}g · C: ${f.carbs}g · F: ${f.fat}g</div>
                        </div>
                        <div style="display:flex;align-items:center;gap:8px">
                          <div class="log-cals">${f.cals}</div>
                          <button style="background:transparent;color:${C.muted};border:none;cursor:pointer;font-size:16px" onclick="removeFood(${f._idx})">×</button>
                        </div>
                      </div>`).join('')}
                  </div>`;
              }).join('')}
             </div>`}
        <div class="divider"></div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:600;font-size:14px">Total</span>
          <span style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:18px;color:${C.orange}">${totalCals} kcal</span>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: WORKOUTS
═══════════════════════════════════════════════════════════════ */

function renderWorkouts() {
  const todayStr  = new Date().toLocaleDateString();
  const todayLogs = S.completedWorkouts.filter(w => w.date === todayStr);
  const burned    = todayLogs.reduce((s, w) => s + (w.cals || 0), 0);

  return `
    <div class="page-title">Workouts</div>
    <div class="page-sub">Log your training sessions</div>

    <div class="grid-4" style="margin-bottom:20px">
      ${statCard('Workouts Today',  todayLogs.length,              '',       C.accent)}
      ${statCard('Calories Burned', burned,                        'kcal',   C.orange)}
      ${statCard('Total Logged',    S.completedWorkouts.length,    '',       C.blue)}
      ${statCard('Streak',          S.completedWorkouts.length + ' days', '', '#ffb347')}
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Workout Programs</div>
        ${WORKOUTS.map((w, i) => `
          <div class="workout-item">
            <div class="workout-icon" style="background:${w.color}22">${w.icon}</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${w.name}</div>
              <div style="font-size:11px;color:${C.muted};margin-top:2px">${w.sets}</div>
              <div style="font-size:11px;color:${C.muted};margin-top:2px;font-family:'DM Mono',monospace">${w.duration} · ${w.cals > 0 ? `~${w.cals} cal` : 'Recovery'}</div>
            </div>
            <button class="btn btn-ghost btn-sm" onclick="logWorkout(${i})">Log</button>
          </div>`).join('')}
      </div>

      <div class="card">
        <div class="card-title">Workout History</div>
        ${S.completedWorkouts.length === 0
          ? `<div style="color:${C.muted};font-size:13px;text-align:center;padding:40px 0">No workouts logged yet.</div>`
          : `<div style="max-height:400px;overflow-y:auto">
              ${[...S.completedWorkouts].reverse().map(w => `
                <div class="workout-item">
                  <div class="workout-icon" style="background:${(w.color||C.accent)}22">${w.icon}</div>
                  <div style="flex:1">
                    <div style="font-weight:600;font-size:13px">${w.name}</div>
                    <div style="font-size:11px;color:${C.muted}">${w.date}</div>
                  </div>
                  ${w.cals > 0 ? `<span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;color:${C.orange};font-size:13px">-${w.cals} cal</span>` : ''}
                </div>`).join('')}
             </div>`}
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: PROGRESS
═══════════════════════════════════════════════════════════════ */

function renderProgress(c) {
  const wLog  = S.weightLog;
  const wMax  = Math.max(...wLog.map(w => w.weight), parseFloat(S.profile.weight) || 180);
  const wMin  = Math.min(...wLog.map(w => w.weight), parseFloat(S.profile.weight) || 140);
  const range = wMax - wMin || 10;
  const weeks = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

  const chartSVG = wLog.length >= 2 ? `
    <div style="position:relative;height:200px;margin-top:8px">
      <svg viewBox="0 0 ${wLog.length*40} 180" style="width:100%;height:100%" preserveAspectRatio="none">
        ${wLog.map((w, i) => {
          const x  = i*40+20;
          const y  = 160 - ((w.weight - wMin) / range) * 140;
          const nw = wLog[i+1];
          const nx = (i+1)*40+20;
          const ny = nw ? 160 - ((nw.weight - wMin) / range) * 140 : y;
          return `${nw ? `<line x1="${x}" y1="${y}" x2="${nx}" y2="${ny}" stroke="${C.accent}" stroke-width="2"/>` : ''}
                  <circle cx="${x}" cy="${y}" r="5" fill="${C.accent}"/>`;
        }).join('')}
      </svg>
      <div style="display:flex;justify-content:space-between;margin-top:8px">
        ${wLog.slice(-6).map(w => `<div style="font-size:10px;color:${C.muted};text-align:center">
          <div style="color:${C.accent};font-weight:700">${w.weight}</div>
          <div>${w.date.split('/').slice(0,2).join('/')}</div>
        </div>`).join('')}
      </div>
    </div>` : `<div style="color:${C.muted};font-size:13px;text-align:center;padding:40px 0">Log at least 2 entries to see your trend.</div>`;

  return `
    <div class="page-title">Progress Tracker</div>
    <div class="page-sub">Monitor your transformation over time</div>

    <div class="grid-4" style="margin-bottom:20px">
      ${statCard('Current Weight',  S.profile.weight ? S.profile.weight + ' lbs' : '--', '',      C.accent)}
      ${statCard('Entries Logged',  wLog.length,                                          '',      C.blue)}
      ${statCard('Workouts Done',   S.completedWorkouts.length,                           '',      '#ffb347')}
      ${statCard('Bone Density',    S.profile.boneDensity ? S.profile.boneDensity + ' g/cm²' : '--', '', C.orange)}
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Log Weight</div>
        <div style="display:flex;gap:10px;margin-bottom:16px">
          <input class="input" id="weight-input" type="number" placeholder="Enter weight (lbs)" onkeydown="if(event.key==='Enter')logWeight()">
          <button class="btn btn-primary" onclick="logWeight()">Log</button>
        </div>
        ${wLog.length > 0 ? `
          <div class="card-title" style="margin-top:16px">Weight History</div>
          <div style="max-height:240px;overflow-y:auto">
            ${[...wLog].reverse().map(w => `
              <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${C.border}">
                <span style="font-size:12px;color:${C.muted}">${w.date}</span>
                <span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;color:${C.accent}">${w.weight} lbs</span>
              </div>`).join('')}
          </div>` : ''}
      </div>

      <div class="card">
        <div class="card-title">Weight Trend</div>
        ${chartSVG}
        <div class="divider"></div>
        <div class="card-title" style="margin-bottom:12px">Weekly Activity</div>
        <div class="chart-bar-wrap">
          ${weeks.map((day, i) => {
            const count = S.completedWorkouts.filter((_, idx) => idx % 7 === i).length;
            const h = Math.max(count * 20, 4);
            return `<div style="flex:1;display:flex;flex-direction:column;align-items:center">
              <div class="chart-bar" style="height:${h}px;background:${count > 0 ? C.accent : C.border};width:100%"></div>
              <div class="chart-bar-label">${day}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: SHOP
═══════════════════════════════════════════════════════════════ */

function renderShop(c) {
  const { cartCount, cartTotal } = c;
  const cats     = ['All', 'Protein', 'Performance', 'Vitamins', 'Recovery'];
  const filtered = S.shopTab === 'All' ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.category === S.shopTab);

  return `
    <div class="page-title">FitCore Shop 🛒</div>
    <div class="page-sub">Premium supplements curated for your goals</div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <div class="tab-bar" style="margin-bottom:0">
        ${cats.map(c => `<div class="tab ${S.shopTab===c?'active':''}" onclick="setShopTab('${c}')">${c}</div>`).join('')}
      </div>
      ${S.cart.length > 0 ? `
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:13px;color:${C.muted}">${cartCount} item${cartCount!==1?'s':''} · <span style="color:${C.accent};font-weight:700">$${cartTotal.toFixed(2)}</span></span>
          <button class="btn btn-primary btn-sm" onclick="checkout()">Checkout</button>
        </div>` : ''}
    </div>

    <div class="shop-grid">
      ${filtered.map(item => `
        <div class="shop-card">
          <div class="shop-img" style="background:${C.border}">${item.emoji}</div>
          <div class="shop-body">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
              <div class="shop-name">${item.name}</div>
              ${item.badge ? `<span class="badge badge-green">${item.badge}</span>` : ''}
            </div>
            <div class="shop-desc">${item.desc}</div>
            <div style="font-size:10px;color:${C.muted};margin-bottom:8px;font-family:'DM Mono',monospace">${'⭐'.repeat(Math.round(item.rating))} ${item.rating}</div>
            <div class="shop-footer">
              <div class="shop-price">$${item.price}</div>
              <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
          </div>
        </div>`).join('')}
    </div>

    ${S.cart.length > 0 ? `
      <div class="card" style="margin-top:20px">
        <div class="card-title">Cart (${cartCount} items)</div>
        ${S.cart.map(item => `
          <div class="log-row">
            <div>
              <div class="log-name">${item.emoji} ${item.name}</div>
              <div class="log-macros">Qty: ${item.qty}</div>
            </div>
            <div style="display:flex;align-items:center;gap:12px">
              <span style="color:${C.accent};font-family:'Barlow Condensed',sans-serif;font-weight:700">$${(item.price*item.qty).toFixed(2)}</span>
              <button style="background:none;border:none;color:${C.muted};cursor:pointer;font-size:16px" onclick="removeFromCart(${item.id})">×</button>
            </div>
          </div>`).join('')}
        <div class="divider"></div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-weight:700">Total</span>
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:20px;color:${C.accent}">$${cartTotal.toFixed(2)}</span>
            <button class="btn btn-primary" onclick="checkout()">Checkout →</button>
          </div>
        </div>
      </div>` : ''}
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: PROFILE
═══════════════════════════════════════════════════════════════ */

function renderProfile(c) {
  const { bmi, bi } = c;
  const p = S.profile;

  const goalLabel = p.goal === 'lose' ? '🔥 Fat Loss' : p.goal === 'gain' ? '💪 Muscle Gain' : '⚖️ Maintenance';
  const goalBadge = p.goal === 'lose' ? 'badge-orange' : p.goal === 'gain' ? 'badge-purple' : 'badge-blue';

  return `
    <div class="page-title">Profile & Settings</div>
    <div class="page-sub">Your personal fitness blueprint</div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title">Personal Info</div>
        ${[
          { key:'name',        label:'Name',                  type:'text',   ph:'Your name' },
          { key:'age',         label:'Age',                   type:'number', ph:'Years' },
          { key:'weight',      label:'Weight (lbs)',          type:'number', ph:'lbs' },
          { key:'height',      label:'Height (inches)',       type:'number', ph:'e.g. 70 for 5\'10"' },
          { key:'boneDensity', label:'Bone Density (g/cm²)', type:'number', ph:'From your doctor (optional)' },
        ].map(f => `
          <div class="form-group">
            <label class="form-label">${f.label}</label>
            <input class="input" id="pf-${f.key}" type="${f.type}" placeholder="${f.ph}" value="${p[f.key] || ''}">
          </div>`).join('')}
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Sex</label>
            <select class="input" id="pf-sex">
              <option value="male"   ${p.sex==='male'   ?'selected':''}>Male</option>
              <option value="female" ${p.sex==='female' ?'selected':''}>Female</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Activity Level</label>
            <select class="input" id="pf-activity">
              <option value="sedentary" ${p.activity==='sedentary'?'selected':''}>Sedentary</option>
              <option value="light"     ${p.activity==='light'    ?'selected':''}>Lightly Active</option>
              <option value="moderate"  ${p.activity==='moderate' ?'selected':''}>Moderately Active</option>
              <option value="active"    ${p.activity==='active'   ?'selected':''}>Very Active</option>
              <option value="veryActive"${p.activity==='veryActive'?'selected':''}>Extremely Active</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Fitness Goal</label>
          <select class="input" id="pf-goal">
            <option value="lose"     ${p.goal==='lose'    ?'selected':''}>Lose Weight</option>
            <option value="maintain" ${p.goal==='maintain'?'selected':''}>Maintain Weight</option>
            <option value="gain"     ${p.goal==='gain'    ?'selected':''}>Build Muscle</option>
          </select>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="saveProfile()">Save Profile</button>
      </div>

      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="card-title">My Stats</div>
          ${bmi ? `
            <div style="display:flex;flex-direction:column;gap:14px">
              ${[
                ['BMI',                      `<span style="font-family:'Barlow Condensed',sans-serif;font-weight:700;color:${bi.color}">${bmi} — ${bi.label}</span>`],
                ['Maintenance Calories',     `<span style="font-family:'DM Mono',monospace;color:${C.accent}">${calcTDEE(p)} kcal</span>`],
                ['Goal Calories',            `<span style="font-family:'DM Mono',monospace;color:${C.orange}">${calcGoalCals(p)} kcal</span>`],
                ['Protein Goal',             `<span style="font-family:'DM Mono',monospace;color:#ffb347">${Math.round((parseFloat(p.weight)||150)*0.8)}g / day</span>`],
                ['Goal',                     `<span class="badge ${goalBadge}">${goalLabel}</span>`],
                ...(p.boneDensity ? [['Bone Density', `<span style="font-family:'DM Mono',monospace;color:${C.blue}">${p.boneDensity} g/cm²</span>`]] : []),
              ].map(([label, val]) => `
                <div style="display:flex;justify-content:space-between;align-items:center">
                  <span style="color:${C.muted};font-size:13px">${label}</span>${val}
                </div>`).join('')}
            </div>` : `<div style="color:${C.muted};font-size:13px">Complete your profile to see calculated stats.</div>`}
        </div>

        <div class="card" style="background:linear-gradient(135deg,${C.card} 0%,#1a0e00 100%);border-color:${C.accent}55">
          <div class="card-title" style="color:${C.accent}">AI Recommendations</div>
          <div style="display:flex;flex-direction:column;gap:10px;font-size:13px">
            ${[
              p.goal==='lose' ? '💡 Aim for a 500 calorie deficit to lose ~1 lb/week' : p.goal==='gain' ? '💡 Eat in a slight surplus and prioritize progressive overload' : '💡 Consistency is key for maintaining weight',
              `💪 Target ${Math.round((parseFloat(p.weight)||150)*0.8)}g protein daily for optimal muscle maintenance`,
              '💧 Drink at least 8 glasses of water daily',
              '😴 7-9 hours of sleep is critical for recovery & hormone balance',
              '🦴 Consider Calcium + Vitamin D3 for bone density support',
            ].map(tip => `<div style="padding:8px 12px;background:${C.accentGlow};border-radius:8px;border-left:2px solid ${C.accent};line-height:1.5">${tip}</div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   RENDER: MODAL (first-run profile setup)
═══════════════════════════════════════════════════════════════ */

function renderModal() {
  const p = S.profile;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-title">⚡ Set Up Your Profile</div>
    <p style="color:${C.muted};font-size:13px;margin-bottom:20px">Tell FitCore about yourself so we can calculate your personalized calorie and macro goals.</p>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Your Name</label><input class="input" id="m-name" placeholder="Name" value="${p.name||''}"></div>
      <div class="form-group"><label class="form-label">Age</label><input class="input" type="number" id="m-age" placeholder="Age" value="${p.age||''}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Weight (lbs)</label><input class="input" type="number" id="m-weight" placeholder="lbs" value="${p.weight||''}"></div>
      <div class="form-group"><label class="form-label">Height (inches)</label><input class="input" type="number" id="m-height" placeholder="e.g. 70" value="${p.height||''}"></div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Sex</label>
        <select class="input" id="m-sex">
          <option value="male" ${p.sex==='male'?'selected':''}>Male</option>
          <option value="female" ${p.sex==='female'?'selected':''}>Female</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Activity</label>
        <select class="input" id="m-activity">
          <option value="sedentary" ${p.activity==='sedentary'?'selected':''}>Sedentary</option>
          <option value="light" ${p.activity==='light'?'selected':''}>Light</option>
          <option value="moderate" ${p.activity==='moderate'?'selected':''}>Moderate</option>
          <option value="active" ${p.activity==='active'?'selected':''}>Very Active</option>
          <option value="veryActive" ${p.activity==='veryActive'?'selected':''}>Extreme</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Primary Goal</label>
      <select class="input" id="m-goal">
        <option value="lose" ${p.goal==='lose'?'selected':''}>🔥 Lose Weight</option>
        <option value="maintain" ${p.goal==='maintain'?'selected':''}>⚖️ Maintain</option>
        <option value="gain" ${p.goal==='gain'?'selected':''}>💪 Build Muscle</option>
      </select>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="btn btn-ghost" style="flex:1" onclick="closeModal()">Skip</button>
      <button class="btn btn-primary" style="flex:2" onclick="saveFromModal()">Let's Go! 🚀</button>
    </div>
  `;
  document.getElementById('modal').style.display = 'flex';
}

/* ═══════════════════════════════════════════════════════════════
   RENDER ORCHESTRATOR
═══════════════════════════════════════════════════════════════ */

function render() {
  const c   = compute();
  const map = {
    dashboard: () => renderDashboard(c),
    nutrition:  () => renderNutrition(c),
    workouts:  () => renderWorkouts(),
    progress:  () => renderProgress(c),
    shop:      () => renderShop(c),
    profile:   () => renderProfile(c),
  };
  document.getElementById('main-content').innerHTML = (map[S.page] || map.dashboard)();
  updateChrome(c);
}

function updateChrome(c) {
  // Sidebar + bottom nav active state
  NAV_IDS.forEach(id => {
    const active = id === S.page;
    const si = document.getElementById('nav-' + id);
    const bi = document.getElementById('bnav-' + id);
    if (si) si.className = 'nav-item' + (active ? ' active' : '');
    if (bi) bi.className = 'bottom-nav-item' + (active ? ' active' : '');
  });

  // Cart badge on sidebar
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = c.cartCount;
    badge.style.display = c.cartCount > 0 ? 'inline' : 'none';
  }

  // Streak
  const sv = document.getElementById('streak-val');
  if (sv) sv.textContent = `🔥 ${c.streak} day${c.streak !== 1 ? 's' : ''}`;
}

/* ═══════════════════════════════════════════════════════════════
   ACTIONS
═══════════════════════════════════════════════════════════════ */

function navigate(page) {
  S.page = page;
  render();
  window.scrollTo(0, 0);
}

function setWater(n) {
  S.water = n;
  persist('fc_water', String(n));
  render();
}

function addFoodByIndex(idx) {
  const select = document.getElementById('meal-select-' + idx);
  const meal = select ? select.value : FOODS[idx].meal;
  S.foods.push({ ...FOODS[idx], meal });
  persist('fc_foods', S.foods);
  notify('Added ' + FOODS[idx].name);
  // Only re-render the log panel, keep search input intact
  const log = document.getElementById('main-content');
  if (log) render();
}

function addCustomFood() {
  const name    = (document.getElementById('cf-name')?.value    || '').trim();
  const cals    = parseInt(document.getElementById('cf-cals')?.value    || 0);
  const protein = parseInt(document.getElementById('cf-protein')?.value || 0);
  const carbs   = parseInt(document.getElementById('cf-carbs')?.value   || 0);
  const fat     = parseInt(document.getElementById('cf-fat')?.value     || 0);
  const meal    = document.getElementById('cf-meal')?.value || 'Snacks';
  if (!name) return;
  S.foods.push({ name, cals, protein, carbs, fat, meal });
  persist('fc_foods', S.foods);
  notify('Added ' + name);
  render();
}

function removeFood(idx) {
  S.foods.splice(idx, 1);
  persist('fc_foods', S.foods);
  render();
}

function clearFoods() {
  S.foods = [];
  persist('fc_foods', S.foods);
  notify('Food log cleared');
  render();
}

function filterFoods() {
  const search = document.getElementById('food-search')?.value || '';
  const list   = document.getElementById('food-list');
  if (list) list.innerHTML = renderFoodListItems(search);
}

function setNutTab(tab) {
  S.nutritionTab = tab;
  render();
}

function logWorkout(idx) {
  const w = WORKOUTS[idx];
  S.completedWorkouts.push({ ...w, date: new Date().toLocaleDateString() });
  persist('fc_workouts', S.completedWorkouts);
  notify(`🔥 ${w.name} logged!${w.cals > 0 ? ' +' + w.cals + ' cals burned' : ''}`);
  render();
}

function logWeight() {
  const val = parseFloat(document.getElementById('weight-input')?.value || '');
  if (!val) return;
  S.weightLog.push({ date: new Date().toLocaleDateString(), weight: val });
  S.profile.weight = String(val);
  persist('fc_weightlog', S.weightLog);
  persist('fc_profile', S.profile);
  notify(`Weight logged: ${val} lbs`);
  render();
}

function setShopTab(tab) {
  S.shopTab = tab;
  render();
}

function addToCart(id) {
  const item = SHOP_ITEMS.find(i => i.id === id);
  if (!item) return;
  const ex = S.cart.find(x => x.id === id);
  if (ex) ex.qty++;
  else S.cart.push({ ...item, qty: 1 });
  notify(item.name + ' added to cart');
  render();
}

function removeFromCart(id) {
  S.cart = S.cart.filter(x => x.id !== id);
  render();
}

function checkout() {
  if (S.cart.length === 0) return;
  const total = S.cart.reduce((s, i) => s + i.price * i.qty, 0);
  S.cart = [];
  notify(`🎉 Order placed! Total: $${total.toFixed(2)}`);
  render();
}

function saveProfile() {
  const get = id => document.getElementById(id)?.value || '';
  S.profile = {
    name:        get('pf-name'),
    age:         get('pf-age'),
    weight:      get('pf-weight'),
    height:      get('pf-height'),
    boneDensity: get('pf-boneDensity'),
    sex:         get('pf-sex'),
    activity:    get('pf-activity'),
    goal:        get('pf-goal'),
  };
  persist('fc_profile', S.profile);
  notify('Profile saved!');
  render();
}

function saveFromModal() {
  const get = id => document.getElementById(id)?.value || '';
  S.profile = {
    ...S.profile,
    name:     get('m-name'),
    age:      get('m-age'),
    weight:   get('m-weight'),
    height:   get('m-height'),
    sex:      get('m-sex'),
    activity: get('m-activity'),
    goal:     get('m-goal'),
  };
  persist('fc_profile', S.profile);
  closeModal();
  render();
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */

function init() {
  load();
  render();
  if (!S.profile.weight) renderModal();
}

init();
