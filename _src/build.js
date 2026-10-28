// Builds the deployable multilingual site (index.html, ca.html, en.html + SEO files) from src.html
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const OUT = path.join(ROOT, 'vercel');
const BASE = 'https://marchampshire.com';
const URLS = { es: '/', ca: '/ca.html', en: '/en.html' };

const src = fs.readFileSync(path.join(ROOT, 'src.html'), 'utf8');

// --- translations object from the page script
const tStart = src.indexOf('const T = {');
const tEnd = src.indexOf('const nodes =', tStart);
const T = new Function(src.slice(tStart, tEnd) + '; return T;')();

// --- Spanish strings come from the markup itself
function i18nElements(html) {
  const re = /<(\w+)([^>]*?\sdata-i18n="([\w]+)"[^>]*)>([\s\S]*?)<\/\1>/g;
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push({ full: m[0], tag: m[1], attrs: m[2], key: m[3], inner: m[4], index: m.index });
  return out;
}
T.es = {};
for (const e of i18nElements(src)) T.es[e.key] = e.inner;

const META = {
  es: {
    title: 'Psicólogo en Barcelona (Eixample) | Marc Hampshire',
    desc: 'Psicólogo general sanitario en el Eixample y online en toda España. Terapia individual para ansiedad, duelo o autoestima, en castellano, catalán o inglés.',
    locale: 'es_ES', job: 'Psicólogo general sanitario'
  },
  ca: {
    title: 'Psicòleg a Barcelona (Eixample) | Marc Hampshire',
    desc: "Psicòleg general sanitari a l'Eixample i en línia a tot Espanya. Teràpia individual per a ansietat, dol o autoestima, en català, castellà o anglès.",
    locale: 'ca_ES', job: 'Psicòleg general sanitari'
  },
  en: {
    title: 'English-Speaking Psychologist & Therapist in Barcelona | Marc Hampshire',
    desc: 'Native English-speaking licensed psychologist in Barcelona (Eixample) and online across Spain. Therapy in English for expats. Free 15-minute call.',
    locale: 'en_GB', job: 'Licensed health psychologist (Psicólogo General Sanitario)'
  }
};

const strip = s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function jsonLd(lang) {
  const t = T[lang];
  const faq = [];
  for (let n = 1; t['fq' + n]; n++) faq.push({ '@type': 'Question', name: strip(t['fq' + n]), acceptedAnswer: { '@type': 'Answer', text: strip(t['fa' + n]) } });
  const business = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Marc Hampshire Viñamata',
    description: META[lang].desc,
    url: BASE + URLS[lang],
    image: BASE + '/marc.jpg',
    telephone: '+34624080367',
    email: 'terapiaham@gmail.com',
    priceRange: '70 €',
    address: { '@type': 'PostalAddress', streetAddress: 'Carrer de la Diputació 153', postalCode: '08011', addressLocality: 'Barcelona', addressRegion: 'Barcelona', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 41.3837933, longitude: 2.1580657 },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Marc+Hampshire+Psic%C3%B3logo&query_place_id=ChIJhSbvF2-jpBIR5Y-FHlcnc84',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '16:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '15:00', closes: '19:30' }
    ],
    areaServed: [{ '@type': 'City', name: 'Barcelona' }, { '@type': 'Country', name: 'Spain' }],
    availableLanguage: ['es', 'ca', 'en'],
    founder: {
      '@type': 'Person',
      name: 'Marc Hampshire Viñamata',
      jobTitle: META[lang].job,
      image: BASE + '/marc.jpg',
      knowsLanguage: ['en', 'es', 'ca'],
      identifier: 'COPC 30868',
      memberOf: { '@type': 'Organization', name: "Col·legi Oficial de Psicologia de Catalunya" }
    }
  };
  const faqPage = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq };
  return `<script type="application/ld+json">${JSON.stringify(business)}</script>\n<script type="application/ld+json">${JSON.stringify(faqPage)}</script>`;
}

function head(lang) {
  const m = META[lang];
  const alt = Object.entries(URLS).map(([l, u]) => `<link rel="alternate" hreflang="${l}" href="${BASE}${u}">`).join('\n');
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.desc)}">
<link rel="canonical" href="${BASE}${URLS[lang]}">
${alt}
<link rel="alternate" hreflang="x-default" href="${BASE}${URLS.en}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.desc)}">
<meta property="og:url" content="${BASE}${URLS[lang]}">
<meta property="og:image" content="${BASE}/marc.jpg">
<meta property="og:locale" content="${m.locale}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%234F7E6F' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
${jsonLd(lang)}
<script defer src="/_vercel/insights/script.js"></script>
`;
}

function build(lang) {
  let body = src;
  // drop the artifact-only title/description lines
  body = body.replace(/^<title>.*<\/title>\n/, '').replace(/^<meta name="description"[^>]*>\n/, '');
  // translate marked-up text
  if (lang !== 'es') {
    const els = i18nElements(body).reverse();
    for (const e of els) {
      const v = T[lang][e.key];
      if (v === undefined) continue;
      body = body.slice(0, e.index) + `<${e.tag}${e.attrs}>${v}</${e.tag}>` + body.slice(e.index + e.full.length);
    }
  }
  // photo
  body = body.replace('src="__IMG__"', 'src="/marc.jpg"');
  // language switcher becomes real links
  body = body.replace(/<button type="button" id="l-(\w+)" data-lang="\w+" aria-pressed="\w+">(\w+)<\/button>/g,
    (_, l, label) => `<a href="${URLS[l]}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="page"' : ''}>${label}</a>`);
  body = body.replace(/\.lang button\[aria-pressed="true"\]/g, '.lang a[aria-current="page"]').replace(/\.lang button/g, '.lang a');
  // script: fixed page language, no client-side switching
  body = body.replace('document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));\n', '');
  body = body.replace(/let start = location\.hash[\s\S]*?setLang\(start\);/, `setLang("${lang}");`);
  body = body.replace('document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));\n', '');
  body = body.replace('  try{ localStorage.setItem("lang", l); }catch(e){}\n', '');
  // split style (head) from markup (body)
  const i = body.indexOf('</style>') + '</style>'.length;
  return head(lang) + body.slice(0, i) + '\n</head>\n<body>\n' + body.slice(i) + '\n</body>\n</html>\n';
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'index.html'), build('es'));
fs.writeFileSync(path.join(OUT, 'ca.html'), build('ca'));
fs.writeFileSync(path.join(OUT, 'en.html'), build('en'));
try { fs.unlinkSync(path.join(OUT, 'vercel.json')); } catch (e) {}
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`);

// --- Service landing pages (English and Spanish)
const SERVICES = require('./services.js');
const CALL = 'https://calendar.app.google/8UB1FcW1vVtsC4eD9';
const SVC_URL = f => `${BASE}/${f}`;
const L = {
  en: { home: '/en.html', homeName: 'Marc Hampshire, Psychologist', rating: '5.0 · 16 reviews on Doctoralia', call: 'Free 15-minute call', book: 'Book an in-person session',
        facts: ['COPC registration no. 30868', 'Native English and Spanish', 'In person in Barcelona · online across Spain'],
        fees: 'Fees', seeAll: 'See all sessions and fees', faq: 'Frequently asked questions', locale: 'en_GB', more: 'More about how I can help:' },
  es: { home: '/', homeName: 'Marc Hampshire, Psicólogo', rating: '5,0 · 16 opiniones en Doctoralia', call: 'Llamada gratuita de 15 min', book: 'Reservar sesión presencial',
        facts: ['Colegiado COPC nº 30868', 'Castellano e inglés nativos', 'En consulta en Barcelona · online en toda España'],
        fees: 'Precio', seeAll: 'Ver todas las sesiones y precios', faq: 'Preguntas frecuentes', locale: 'es_ES', more: 'Más sobre cómo te puedo ayudar:' }
};
function servicePage(svc, shell) {
  const lang = svc.lang, t = L[lang];
  const startMain = shell.indexOf('<main id="top">');
  const endMain = shell.indexOf('</main>') + '</main>'.length;
  const cStart = shell.indexOf('<section class="block" id="contacto"');
  const contact = shell.slice(cStart, shell.indexOf('</section>', cStart) + '</section>'.length);
  let before = shell.slice(shell.indexOf('</head>'), startMain);
  before = before.replace(/href="#(\w[\w-]*)"/g, `href="${t.home}#$1"`).replace(`href="${t.home}#top"`, `href="${t.home}"`);
  before = before.replace(' aria-current="page"', '');
  // language switcher: point to the equivalent page when there is one
  if (svc.alt) for (const [l, f] of Object.entries(svc.alt)) before = before.replace(new RegExp(`<a href="[^"]*" hreflang="${l}"`), `<a href="/${f}" hreflang="${l}"`);
  const after = shell.slice(endMain);
  const style = shell.slice(shell.indexOf('<style>'), shell.indexOf('</style>') + 8);
  const url = SVC_URL(svc.file);
  const list = sec => sec.list ? `<ul class="areas">${sec.list.map(([h, p]) => `\n        <li><h3>${h}</h3><p>${p}</p></li>`).join('')}\n      </ul>` : '';
  const paras = sec => sec.p ? `<div class="approach">${sec.p.map(x => `<p>${x}</p>`).join('')}</div>` : '';
  const sections = svc.sections.map(sec => `
  <section class="block">
    <div class="wrap">
      <h2>${sec.h}</h2>
      ${sec.p ? `<div style="margin-top:28px">${paras(sec)}</div>` : list(sec)}
    </div>
  </section>`).join('\n');
  const related = SERVICES.filter(o => o.lang === lang && o.file !== svc.file);
  const relatedHtml = `<p class="muted" style="margin-top:28px">${t.more} ${related.map(o => `<a href="/${o.file}">${o.crumb}</a>`).join(' · ')}</p>`;
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: svc.faq.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) };
  const crumbLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.homeName, item: BASE + t.home },
    { '@type': 'ListItem', position: 2, name: svc.crumb, item: url }] };
  const main = `<main id="top">
  <div class="wrap hero">
    <div class="hero-copy">
      <p class="muted" style="font-size:.9rem"><a href="${t.home}">${t.homeName}</a> / ${svc.crumb}</p>
      <h1>${svc.h1}</h1>
      <p class="lead">${svc.lead}</p>
      <a class="rating" href="${t.home}#opiniones"><span class="stars" aria-hidden="true">★★★★★</span><span>${t.rating}</span></a>
      <div class="cta-row">
        <a class="btn btn-primary" href="${CALL}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#cal"/></svg><span>${t.call}</span></a>
        <a class="btn btn-ghost" href="https://calendar.app.google/gUtvc1tR1LRQqWUb9" target="_blank" rel="noopener">${t.book}</a>
      </div>
      <ul class="facts">${t.facts.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>
    <div class="figure">
      <div class="ring">
        <svg class="arc" viewBox="0 0 200 200" aria-hidden="true" style="--len:610;--gap:56"><circle cx="100" cy="100" r="97"/></svg>
        <div class="portrait"><img src="/marc.jpg" alt="Marc Hampshire Viñamata" width="440" height="440" loading="eager"></div>
      </div>
    </div>
  </div>
${sections}
  <section class="block">
    <div class="wrap">
      <h2>${t.fees}</h2>
      <div class="sessions">
        <div class="session"><h3>${svc.price[0]}</h3><span class="price">${svc.price[1]}</span><p>${svc.price[2]}</p></div>
      </div>
      <div class="fine"><p><a href="${t.home}#sesiones">${t.seeAll}</a>.</p>${svc.note ? `<p><strong>${svc.note}</strong></p>` : ''}</div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <h2>${t.faq}</h2>
      <div class="faq">
${svc.faq.map(([q, a]) => `        <details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}
      </div>
      ${relatedHtml}
    </div>
  </section>

  ${contact}
</main>`;
  const alts = svc.alt ? [`<link rel="alternate" hreflang="${lang}" href="${url}">`, ...Object.entries(svc.alt).map(([l, f]) => `<link rel="alternate" hreflang="${l}" href="${SVC_URL(f)}">`)].join('\n') + '\n' : '';
  const headHtml = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(svc.title)}</title>
<meta name="description" content="${esc(svc.desc)}">
<link rel="canonical" href="${url}">
${alts}<meta property="og:type" content="website">
<meta property="og:title" content="${esc(svc.title)}">
<meta property="og:description" content="${esc(svc.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${BASE}/marc.jpg">
<meta property="og:locale" content="${t.locale}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%234F7E6F' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
<script type="application/ld+json">${JSON.stringify(faqLd)}</script>
<script type="application/ld+json">${JSON.stringify(crumbLd)}</script>
<script defer src="/_vercel/insights/script.js"></script>
${style}
`;
  return headHtml + before + main + after;
}
fs.writeFileSync(path.join(OUT, 'couples-therapy-in-english.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Marc Hampshire, Psychologist</title><meta name="robots" content="noindex"><link rel="canonical" href="${BASE}/en.html"><meta http-equiv="refresh" content="0; url=/en.html"></head><body><p><a href="/en.html">Marc Hampshire, English-speaking psychologist in Barcelona</a></p></body></html>\n`);
const REVIEW = 'https://search.google.com/local/writereview?placeid=ChIJhSbvF2-jpBIR5Y-FHlcnc84';
fs.writeFileSync(path.join(OUT, 'review.html'), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Reseña · Marc Hampshire</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${REVIEW}"><script>location.replace(${JSON.stringify(REVIEW)})</script></head><body><p><a href="${REVIEW}">Dejar una reseña en Google / Leave a Google review</a></p></body></html>\n`);
// internal links from the main pages to the service pages
function addLinks(file, lang) {
  const fp = path.join(OUT, file); let h = fs.readFileSync(fp, 'utf8');
  const a = h.indexOf('<section class="block" id="ayuda">'); const u = h.indexOf('</ul>', a) + 5;
  const pages = SERVICES.filter(o => o.lang === lang);
  const label = { es: 'Más información:', ca: 'Més informació:', en: 'Read more:' }[file === 'ca.html' ? 'ca' : lang];
  h = h.slice(0, u) + `\n      <p class="muted" style="margin-top:28px">${label} ${pages.map(o => `<a href="/${o.file}">${o.crumb}</a>`).join(' · ')}</p>` + h.slice(u);
  fs.writeFileSync(fp, h);
}
const shells = { en: fs.readFileSync(path.join(OUT, 'en.html'), 'utf8'), es: fs.readFileSync(path.join(OUT, 'index.html'), 'utf8') };
for (const svc of SERVICES) fs.writeFileSync(path.join(OUT, svc.file), servicePage(svc, shells[svc.lang]));
addLinks('en.html', 'en'); addLinks('index.html', 'es'); addLinks('ca.html', 'es');
// Link "Con qué te puedo ayudar" items to their service pages
function linkAreas(file, map) {
  const fp = path.join(OUT, file); let h = fs.readFileSync(fp, 'utf8');
  for (const [key, url] of Object.entries(map)) h = h.replace(new RegExp('(<h3 data-i18n="' + key + '">)([^<]+)(</h3>)'), `$1<a href="${url}">$2</a>$3`);
  fs.writeFileSync(fp, h);
}
const ES_AREAS = { a2h: '/psicologo-ansiedad-barcelona.html', a5h: '/psicologo-duelo-barcelona.html' };
linkAreas('index.html', ES_AREAS); linkAreas('ca.html', ES_AREAS);
linkAreas('en.html', { a2h: '/anxiety-therapy-in-english.html', a5h: '/grief-counselling-in-english.html', a9h: '/burnout-therapy-in-english.html' });


// Site-wide footer links to service pages (internal linking)
for (const f of fs.readdirSync(OUT).filter(f => f.endsWith('.html') && !['couples-therapy-in-english.html', 'review.html'].includes(f))) {
  const fp = path.join(OUT, f); let h = fs.readFileSync(fp, 'utf8');
  const svc = SERVICES.find(o => o.file === f);
  const lang = f === 'ca.html' ? 'ca' : (f === 'en.html' || (svc && svc.lang === 'en')) ? 'en' : 'es';
  const label = { es: 'Servicios', ca: 'Serveis', en: 'Services' }[lang];
  const order = lang === 'en' ? [...SERVICES.filter(o => o.lang === 'en'), ...SERVICES.filter(o => o.lang === 'es')] : [...SERVICES.filter(o => o.lang === 'es'), ...SERVICES.filter(o => o.lang === 'en')];
  const nav = `<nav aria-label="${label}" style="flex-basis:100%;line-height:1.9"><b>${label}:</b> ${order.map(o => `<a href="/${o.file}"${o.lang !== lang && !(lang === 'ca' && o.lang === 'es') ? ` hreflang="${o.lang}"` : ''}>${o.crumb}</a>`).join(' · ')}</nav>\n  `;
  h = h.replace('<footer>\n', '<footer>\n    ' + nav);
  fs.writeFileSync(fp, h);
}

const today = new Date().toISOString().slice(0, 10);
const langUrls = Object.values(URLS).map(u => `  <url>\n    <loc>${BASE}${u}</loc>\n    <lastmod>${today}</lastmod>\n${Object.entries(URLS).map(([l, x]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}${x}"/>`).join('\n')}\n  </url>`);
const svcUrls = SERVICES.map(svc => `  <url>\n    <loc>${BASE}/${svc.file}</loc>\n    <lastmod>${today}</lastmod>\n${svc.alt ? [`    <xhtml:link rel="alternate" hreflang="${svc.lang}" href="${BASE}/${svc.file}"/>`, ...Object.entries(svc.alt).map(([l, f]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${f}"/>`)].join('\n') + '\n' : ''}  </url>`);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${langUrls.concat(svcUrls).join('\n')}\n</urlset>\n`);
console.log('built', fs.readdirSync(OUT).join(', '));
