// Genera assets/contributions.svg con el calendario de contribuciones en la paleta "Marino".
// Sin dependencias: fetch a la API GraphQL de GitHub + SVG a mano.
import { writeFileSync, mkdirSync } from "node:fs";

const LOGIN = process.env.GH_LOGIN || "Tariima";
const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) throw new Error("GH_TOKEN missing");

const query = `query($login:String!){ user(login:$login){ contributionsCollection{ contributionCalendar{ totalContributions weeks{ contributionDays{ date contributionCount weekday } } } } } }`;
const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json", "User-Agent": "contributions-svg" },
  body: JSON.stringify({ query, variables: { login: LOGIN } }),
});
const json = await res.json();
if (!json.data) throw new Error("GraphQL error: " + JSON.stringify(json.errors || json));
const cal = json.data.user.contributionsCollection.contributionCalendar;
const weeks = cal.weeks;

/* ---- paleta Marino ---- */
const BG = "#070b18", BORDER = "#1a2340", EMPTY = "#141c33", TEXT = "#93a0c2", ACCENT = "#7b96ff";
const LEVELS = ["#141c33", "#2b3a75", "#4159b3", "#5f7ae0", "#7b96ff"];
const max = Math.max(1, ...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)));
const level = (n) => (n === 0 ? 0 : n >= max * 0.75 ? 4 : n >= max * 0.5 ? 3 : n >= max * 0.25 ? 2 : 1);

/* ---- geometría ---- */
const CELL = 11, GAP = 3, STEP = CELL + GAP;
const LEFT = 34, TOP = 30, PAD = 16;
const W = LEFT + weeks.length * STEP + PAD;
const H = TOP + 7 * STEP + 34;

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const DAYS = { 1: "Lun", 3: "Mié", 5: "Vie" };

let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="10">`;
out += `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${BG}" stroke="${BORDER}"/>`;

// meses: una etiqueta por cambio de mes, sin pisarse (mínimo 3 semanas entre etiquetas)
const labels = [];
let lastMonth = -1;
weeks.forEach((w, i) => {
  const m = new Date(w.contributionDays[0].date + "T00:00:00Z").getUTCMonth();
  if (m !== lastMonth) { labels.push({ i, m }); lastMonth = m; }
});
labels.forEach((l, k) => {
  const next = labels[k + 1];
  if (next && next.i - l.i < 3) return; // la semana parcial del inicio se solaparía con el mes siguiente
  out += `<text x="${LEFT + l.i * STEP}" y="${TOP - 10}" fill="${TEXT}">${MONTHS[l.m]}</text>`;
});

// días
for (const [d, label] of Object.entries(DAYS)) {
  out += `<text x="${PAD - 8}" y="${TOP + d * STEP + CELL - 2}" fill="${TEXT}">${label}</text>`;
}

// celdas
weeks.forEach((w, i) => {
  w.contributionDays.forEach((d) => {
    const x = LEFT + i * STEP, y = TOP + d.weekday * STEP;
    out += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="2.5" fill="${LEVELS[level(d.contributionCount)]}"><title>${d.date}: ${d.contributionCount}</title></rect>`;
  });
});

// leyenda + total
const ly = TOP + 7 * STEP + 18;
out += `<text x="${LEFT}" y="${ly}" fill="${TEXT}">${cal.totalContributions} contribuciones en el último año</text>`;
const lx = W - PAD - 5 * (CELL + 3) - 44;
out += `<text x="${lx - 34}" y="${ly}" fill="${TEXT}">menos</text>`;
LEVELS.forEach((c, i) => {
  out += `<rect x="${lx + i * (CELL + 3)}" y="${ly - CELL + 1}" width="${CELL}" height="${CELL}" rx="2.5" fill="${c}"/>`;
});
out += `<text x="${lx + 5 * (CELL + 3) + 4}" y="${ly}" fill="${ACCENT}">más</text>`;
out += `</svg>`;

mkdirSync("assets", { recursive: true });
writeFileSync("assets/contributions.svg", out);
console.log(`ok: ${weeks.length} semanas, ${cal.totalContributions} contribuciones, max/día ${max}`);
