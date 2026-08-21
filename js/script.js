/* ============================================================
   CODENEXA — script.js (engine)
   content.js pe depend karta hai (UI, FEATURES, FAQ, COURSES)
   ============================================================ */

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const STATE = {
  lang: localStorage.getItem('cn_lang') || 'hi'
};

/* ---------- text helper: current language me value ---------- */
const t = obj => (obj && obj[STATE.lang]) ? obj[STATE.lang] : (obj ? obj.en : '');

/* ---------- progress (localStorage) ---------- */
const getProg = () => JSON.parse(localStorage.getItem('cn_progress') || '{}');
const saveProg = p => localStorage.setItem('cn_progress', JSON.stringify(p));
const isDone = (cid, i) => { const p = getProg(); return !!(p[cid] && p[cid].includes(i)); };
const toggleDone = (cid, i) => {
  const p = getProg();
  p[cid] = p[cid] || [];
  const idx = p[cid].indexOf(i);
  if (idx > -1) p[cid].splice(idx, 1); else p[cid].push(i);
  saveProg(p);
};

/* ---------- syntax highlighting ---------- */
const KWS = {
  python: /\b(def|return|if|elif|else|for|while|import|from|as|class|print|True|False|None|and|or|not|in|is|lambda|try|except|with|range|len|int|float|str|list|dict|set|tuple|self|break|continue|pass)\b/g,
  r:      /\b(function|if|else|for|while|repeat|return|library|require|print|cat|TRUE|FALSE|NULL|NA|in|next|break|c|list|data\.frame|mean|sum|length|class|typeof|head|tail|nrow|ncol)\b/g,
  cmd:    /\b(echo|cd|dir|set|if|for|goto|call|pause|cls|del|copy|mkdir|md|type|exit|rem|start|title|color|taskkill|ping|ipconfig|netstat)\b/gi
};

const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function highlight(code, lang) {
  let h = esc(code);
  if (lang === 'cmd') {
    h = h.replace(/(^|\n)\s*(REM|::).*/g, m => m.replace(/REM|::/, 'REM|::').replace(/^((.|\n)*?)(REM|::)/, '')); // safe fallback
    h = h.replace(/(REM .*|::.*)$/gm, '<span class="tok-c">$1</span>');
  } else {
    h = h.replace(/(#[^\n]*)/g, '<span class="tok-c">$1</span>');
  }
  h = h.replace(/("[^"]*"|'[^']*')/g, '<span class="tok-s">$1</span>');
  h = h.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="tok-n">$1</span>');
  const kw = KWS[lang] || KWS.python;
  h = h.replace(kw, '<span class="tok-k">$1</span>');
  return h;
}

/* ---------- language buttons ---------- */
function renderLangButtons() {
  const box = $('#langBox');
  if (!box) return;
  box.innerHTML = '';
  [['en','EN'],['hi','हिं'],['hing','Hing']].forEach(([code, label]) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.className = STATE.lang === code ? 'active' : '';
    b.onclick = () => { STATE.lang = code; localStorage.setItem('cn_lang', code);$$('#app .copy-btn').forEach(b => bindCopy(b, b.closest('.codebox').querySelector('pre').innerText)); applyI18n(); router(); };
    box.appendChild(b);
  });
}

/* ---------- static i18n (index.html ke data-i18n) ---------- */
function applyI18n() {
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (UI[key]) el.textContent = t(UI[key]);
  });
}

/* ---------- copy button ---------- */
function bindCopy(btn, text) {
  btn.onclick = async () => {
    try { await navigator.clipboard.writeText(text); }
    catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
    }
    btn.textContent = t(UI.copied);
    setTimeout(() => btn.textContent = t(UI.copy), 1500);
  };
}

/* ---------- code block renderer ---------- */
function codeBlock(codeObj) {
  if (!codeObj) return '';
  const lang = codeObj.lang || 'python';
  const code = codeObj.text ? t(codeObj.text) : t(codeObj);
  return `
  <div class="codebox">
    <div class="code-head"><span>${lang.toUpperCase()}</span><button class="copy-btn" data-copy>${t(UI.copy)}</button></div>
    <pre>${highlight(code, lang)}</pre>
  </div>`;
}

/* ============================================================
   HOME VIEW
   ============================================================ */
function renderHome() {
  const totalLessons = COURSES.reduce((n, c) => n + c.lessons.length, 0);
  const feat = FEATURES.map(f => `
    <div class="card">
      <div class="ic">${SVG[f.ic] || SVG.check}</div>
      <h3>${t(f.t)}</h3><p>${t(f.d)}</p>
    </div>`).join('');

  const paths = COURSES.map(c => `
    <div class="path" style="--gc:${c.color}" onclick="location.hash='#/l/${c.id}/0'">
      <span class="tag">${t(c.tag)} · ${t(UI.free)}</span>
      <h3>${t(c.title)}</h3>
      <p>${t(c.desc)}</p>
      <div class="meta"><span>${c.lessons.length} ${t(UI.lessons)}</span><span>${c.lessons.reduce((m,l)=>m+(l.mins||5),0)} ${t(UI.min)}</span></div>
    </div>`).join('');

  const faqs = FAQ.map(f => `
    <details>
      <summary>${t(f.q)}</summary>
      <div class="a">${t(f.a)}</div>
    </details>`).join('');

  $('#app').innerHTML = `
  <section class="hero">
    <div class="container">
      <span class="badge">${t(UI.free)} · ${t(UI.tagline)}</span>
      <h1>${t(UI.home_hero_h1)}</h1>
      <p class="sub">${t(UI.sub)}</p>
      <div class="cta-row">
        <a class="btn primary" href="#/l/ml/0">${t(UI.cta_start)}</a>
        <a class="btn ghost" href="#sec-courses">${t(UI.cta_paths)}</a>
      </div>
      <div class="stats">
        <div class="stat"><b>${COURSES.length}</b><span>${t(UI.stat_courses)}</span></div>
        <div class="stat"><b>${totalLessons}</b><span>${t(UI.stat_lessons)}</span></div>
        <div class="stat"><b>3</b><span>${t(UI.stat_langs)}</span></div>
        <div class="stat"><b>₹0</b><span>${t(UI.stat_cost)}</span></div>
      </div>
    </div>
  </section>

  <section class="section" id="sec-features">
    <div class="container">
      <div class="sec-head"><h2>${t(UI.sec_features)}</h2><p>${t(UI.sec_features_sub)}</p></div>
      <div class="cards">${feat}</div>
    </div>
  </section>

  <section class="section" id="sec-courses" style="padding-top:0">
    <div class="container">
      <div class="sec-head"><h2>${t(UI.sec_paths)}</h2><p>${t(UI.sec_paths_sub)}</p></div>
      <div class="paths">${paths}</div>
    </div>
  </section>

  <section class="section faq" id="sec-faq" style="padding-top:0">
    <div class="container">
      <div class="sec-head"><h2>${t(UI.sec_faq)}</h2></div>
      ${faqs}
    </div>
  </section>`;

  $$('.copy-btn').forEach(b => bindCopy(b, b.closest('.codebox').querySelector('pre').innerText));
  applyI18n();
}

/* ============================================================
   COURSE / LESSON VIEW
   ============================================================ */
function renderCourse(cid, idx) {
  const course = COURSES.find(c => c.id === cid);
  if (!course) { renderHome(); return; }
  idx = Math.max(0, Math.min(idx || 0, course.lessons.length - 1));
  const lesson = course.lessons[idx];

  const side = `
  <aside class="sidebar">
    <div class="side-head">
      <h3>${t(course.title)}</h3>
      <small>${t(UI.your_progress)}</small>
      <div class="prog-bar"><i id="progFill"></i></div>
    </div>
    <ul class="lessons">${course.lessons.map((l, i) => `
      <li><a href="#/l/${cid}/${i}" class="${i === idx ? 'active' : ''} ${isDone(cid, i) ? 'done' : ''}">
        <span class="num">${isDone(cid, i) ? '✓' : (i + 1)}</span>${t(l.title)}
      </a></li>`).join('')}
    </ul>
  </aside>`;

  const prev = idx > 0 ? `<a class="btn ghost" href="#/l/${cid}/${idx - 1}">${t(UI.prev)}</a>` : '<span class="btn ghost" style="opacity:.35;pointer-events:none"></span>';
  const next = idx < course.lessons.length - 1 ? `<a class="btn primary" href="#/l/${cid}/${idx + 1}">${t(UI.next)}</a>` : '<span class="btn primary" style="opacity:.35;pointer-events:none"></span>';

  const theory = (lesson.theory || []).map(p => `<p>${t(p)}</p>`).join('');
  const code = codeBlock(lesson.code);
  const output = lesson.output ? `
    <div class="codebox">
      <div class="code-head"><span>${t(UI.output)}</span></div>
      <pre>${esc(t(lesson.output))}</pre>
    </div>` : '';
  const exer = lesson.exercise ? `<div class="exercise"><b>${t(UI.exercise)}</b><p>${t(lesson.exercise)}</p></div>` : '';

  $('#app').innerHTML = `
  <div class="container course-wrap">
    ${side}
    <main class="lesson-main">
      <div class="breadcrumb"><a href="#/">CodeNexa</a> / <a href="#/l/${cid}/0">${t(course.title)}</a> / ${t(lesson.title)}</div>
      <h1>${t(lesson.title)}</h1>
      <div class="meta-row">
        <span class="chip">${t(course.tag)}</span>
        <span class="chip">${lesson.mins || 5} ${t(UI.min)}</span>
        <span class="chip">${t(UI.free)}</span>
      </div>
      <div class="theory">${theory}</div>
      ${code}
      ${output}
      ${exer}
      <div class="complete-wrap">
        <button class="btn ${isDone(cid, idx) ? 'done-btn' : 'ghost'}" id="doneBtn">
          ${isDone(cid, idx) ? t(UI.done_y) : t(UI.done)}
        </button>
      </div>
      <div class="lesson-nav">${prev}${next}</div>
    </main>
  </div>`;

  // progress bar + complete button
  const done = getProg()[cid] || [];
  const fill = $('#progFill');
  if (fill) fill.style.width = (done.length / course.lessons.length * 100) + '%';
  const btn = $('#doneBtn');
  if (btn) btn.onclick = () => { toggleDone(cid, idx); renderCourse(cid, idx); };

  applyI18n();
}

/* ============================================================
   ROUTER
   ============================================================ */
function router() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'l' && parts[1]) renderCourse(parts[1], parseInt(parts[2] || '0', 10));
  else if (parts[0] === 'c' && parts[1]) renderCourse(parts[1], 0);
  else renderHome();
  window.scrollTo(0, 0);

  // active nav link
  $$('.nav-links a').forEach(a => a.classList.remove('active'));
  const cur = parts[0] === 'c' || parts[0] === 'l' ? parts[1] : '';
  if (cur) {
    const link = $(`.nav-links a[href="#/c/${cur}"]`);
    if (link) link.classList.add('active');
  }
}

/* ---------- init ---------- */
window.addEventListener('hashchange', router);
$('#burger').addEventListener('click', () => $('#navLinks').classList.toggle('open'));
document.addEventListener('click', e => {
  if (e.target.closest('[data-faq]')) {
    setTimeout(() => {
      const el = $('#sec-faq');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
});

renderLangButtons();
router();
