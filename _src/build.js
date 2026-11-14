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
    title: 'Psicólogo y psicoterapeuta Gestalt en Barcelona (Eixample) | Marc Hampshire',
    desc: 'Psicólogo general sanitario y psicoterapeuta Gestalt en el Eixample y online. Psicoterapia individual para ansiedad, autoestima, relaciones, duelo o burnout, en castellano, catalán o inglés.',
    locale: 'es_ES', job: 'Psicólogo general sanitario y psicoterapeuta Gestalt'
  },
  ca: {
    title: 'Psicòleg i psicoterapeuta Gestalt a Barcelona (Eixample) | Marc Hampshire',
    desc: "Psicòleg general sanitari i psicoterapeuta Gestalt a l'Eixample i en línia. Psicoteràpia individual per a ansietat, autoestima, relacions, dol o burnout, en català, castellà o anglès.",
    locale: 'ca_ES', job: 'Psicòleg general sanitari i psicoterapeuta Gestalt'
  },
  en: {
    title: 'English-Speaking Psychologist & Gestalt Psychotherapist in Barcelona | Marc Hampshire',
    desc: 'Native English-speaking licensed psychologist and Gestalt psychotherapist in Barcelona (Eixample) and online across Spain. Psychotherapy in English. Free 15-minute call.',
    locale: 'en_GB', job: 'Licensed health psychologist (Psicólogo General Sanitario) and Gestalt psychotherapist'
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
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: 16, bestRating: '5', worstRating: '1' },
    address: { '@type': 'PostalAddress', streetAddress: 'Carrer de la Diputació 153', postalCode: '08011', addressLocality: 'Barcelona', addressRegion: 'Barcelona', addressCountry: 'ES' },
    geo: { '@type': 'GeoCoordinates', latitude: 41.3837933, longitude: 2.1580657 },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Marc+Hampshire+Psic%C3%B3logo&query_place_id=ChIJhSbvF2-jpBIR5Y-FHlcnc84',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '16:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '15:00', closes: '19:30' }
    ],
    areaServed: [{ '@type': 'City', name: 'Barcelona' }, { '@type': 'Country', name: 'Spain' }],
    availableLanguage: ['es', 'ca', 'en'],
    sameAs: ['https://www.doctoralia.es/marc-hampshire/psicologo/barcelona', 'https://www.psychologytoday.com/es/psicologos-psicoterapeutas/marc-hampshire-vinamata-barcelona-bc/1533085', 'https://maps.google.com/?cid=14876277249262587877'],
    knowsAbout: ['Terapia Gestalt', 'Psicoterapia individual', 'Psicoanálisis relacional', 'Gestalt therapy'],
    founder: {
      '@type': 'Person',
      name: 'Marc Hampshire Viñamata',
      jobTitle: META[lang].job,
      image: BASE + '/marc.jpg',
      knowsLanguage: ['en', 'es', 'ca'],
      identifier: 'COPC 30868',
      knowsAbout: ['Terapia Gestalt', 'Psicoterapia', 'Psicoanálisis relacional', 'Gestalt therapy', 'Psychotherapy'],
      alumniOf: { '@type': 'EducationalOrganization', name: 'Institut Gestalt', address: 'Barcelona' },
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
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%237C5E3A' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
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
const CALL = 'https://calendar.app.google/oP3mJpvH2ySd55uu7';
const SVC_URL = f => `${BASE}/${f}`;
const L = {
  en: { home: '/en.html', homeName: 'Marc Hampshire, Psychologist', rating: '5.0 · 16 reviews on Doctoralia', call: 'Free 15-minute call', book: 'Book an in-person session',
        facts: ['COPC registration no. 30868', 'Native English and Spanish', 'In person in Barcelona · online across Spain'],
        fees: 'Fees', seeAll: 'See all sessions and fees', faq: 'Frequently asked questions', locale: 'en_GB', more: 'More about how I can help:',
        articles: 'Articles', idx: 'articles.html', by: 'By Marc Hampshire Viñamata, licensed psychologist (COPC 30868)', pub: 'Published',
        note: 'This article is general information. It is not a diagnosis or a substitute for professional advice.',
        ctaH: 'Want to talk it through?', ctaP: 'Book a free 15-minute call, no commitment. We see what you need and whether I can help.', wa: 'WhatsApp', relH: 'Related' },
  es: { home: '/', homeName: 'Marc Hampshire, Psicólogo', rating: '5,0 · 16 opiniones en Doctoralia', call: 'Llamada gratuita de 15 min', book: 'Reservar sesión presencial',
        facts: ['Colegiado COPC nº 30868', 'Castellano, catalán e inglés', 'En consulta en Barcelona · online en toda España'],
        fees: 'Precio', seeAll: 'Ver todas las sesiones y precios', faq: 'Preguntas frecuentes', locale: 'es_ES', more: 'Más sobre cómo te puedo ayudar:',
        articles: 'Artículos', idx: 'articulos.html', by: 'Por Marc Hampshire Viñamata, psicólogo general sanitario (COPC 30868)', pub: 'Publicado',
        note: 'Este artículo es información general. No es un diagnóstico ni sustituye el consejo de un profesional.',
        ctaH: '¿Quieres hablarlo?', ctaP: 'Reserva una llamada gratuita de 15 minutos, sin compromiso. Vemos qué necesitas y si puedo ayudarte.', wa: 'WhatsApp', relH: 'Relacionado' },
  ca: { home: '/ca.html', homeName: 'Marc Hampshire, Psicòleg', rating: '5,0 · 16 opinions a Doctoralia', call: 'Trucada gratuïta de 15 min', book: 'Reservar sessió presencial',
        facts: ['Col·legiat COPC núm. 30868', 'Català, castellà i anglès', 'Presencial a Barcelona · en línia a tot Espanya'],
        fees: 'Preu', seeAll: 'Veure totes les sessions i preus', faq: 'Preguntes freqüents', locale: 'ca_ES', more: 'Més sobre com et puc ajudar:' }
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
  before = before.replace(new RegExp(`(<a href="[^"]*" hreflang="${lang}" lang="${lang}")`), '$1 aria-current="page"');
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
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%237C5E3A' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
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
const shells = { en: fs.readFileSync(path.join(OUT, 'en.html'), 'utf8'), es: fs.readFileSync(path.join(OUT, 'index.html'), 'utf8'), ca: fs.readFileSync(path.join(OUT, 'ca.html'), 'utf8') };
for (const svc of SERVICES) fs.writeFileSync(path.join(OUT, svc.file), servicePage(svc, shells[svc.lang]));
// --- Legal pages (Spanish)
const LEGAL = require('./legal.js');
function legalPage(pg, shell) {
  const startMain = shell.indexOf('<main id="top">');
  const endMain = shell.indexOf('</main>') + '</main>'.length;
  let before = shell.slice(shell.indexOf('</head>'), startMain);
  before = before.replace(/href="#(\w[\w-]*)"/g, 'href="/#$1"').replace('href="/#top"', 'href="/"').replace(' aria-current="page"', '');
  const style = shell.slice(shell.indexOf('<style>'), shell.indexOf('</style>') + 8);
  const url = `${BASE}/${pg.file}`;
  const headHtml = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(pg.title)}</title>
<meta name="description" content="${esc(pg.desc)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%237C5E3A' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
<script defer src="/_vercel/insights/script.js"></script>
${style}
<style>.legal h2{margin-top:40px;font-size:1.5rem}.legal p,.legal ul{margin-top:14px;max-width:44em}.legal li{margin-top:6px}.legal a{color:var(--ink)}</style>
`;
  const main = `<main id="top">
  <section class="block" style="border-top:0">
    <div class="wrap legal">
      <p class="muted" style="font-size:.9rem"><a href="/">Marc Hampshire, Psicólogo</a> / ${pg.h1}</p>
      <h1>${pg.h1}</h1>
${pg.body}
    </div>
  </section>
</main>`;
  return headHtml + before + main + shell.slice(endMain);
}
for (const pg of LEGAL) fs.writeFileSync(path.join(OUT, pg.file), legalPage(pg, shells.es));

// --- Articles
const ARTICLES = [];
const MONTHS = { en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'] };
const fmtDate = (iso, lang) => { const [y, m, d] = iso.split('-').map(Number); return lang === 'en' ? `${d} ${MONTHS.en[m - 1]} ${y}` : `${d} de ${MONTHS.es[m - 1]} de ${y}`; };
const ARTICLE_CSS = `<style>.article-body{max-width:44em}.article h1{font-size:clamp(2.2rem,5vw,3.6rem);margin-top:14px}.article .lead{font-size:1.2rem;color:var(--muted);margin-top:22px}.article h2{font-size:clamp(1.5rem,3vw,2rem);margin-top:48px}.article-body p{margin-top:16px}.article-body a{color:var(--ink)}.article .areas{margin-top:20px}.article .byline{margin-top:22px;font-size:.9rem;color:var(--muted)}.cta-box{margin-top:56px;padding:clamp(22px,4vw,34px);border:1px solid var(--line);border-radius:20px;background:var(--surface)}.cta-box h2{margin-top:0;font-size:1.6rem}.cta-box .cta-row{margin-top:20px}.article-list{margin-top:36px}.article-list h3 a{text-decoration:none}.article-list h3 a:hover{color:var(--ink)}</style>
`;
function shellParts(shell, t) {
  const startMain = shell.indexOf('<main id="top">');
  const endMain = shell.indexOf('</main>') + '</main>'.length;
  const cStart = shell.indexOf('<section class="block" id="contacto"');
  const contact = shell.slice(cStart, shell.indexOf('</section>', cStart) + '</section>'.length);
  let before = shell.slice(shell.indexOf('</head>'), startMain);
  before = before.replace(/href="#(\w[\w-]*)"/g, `href="${t.home}#$1"`).replace(`href="${t.home}#top"`, `href="${t.home}"`);
  before = before.replace(' aria-current="page"', '');
  return { before, contact, after: shell.slice(endMain), style: shell.slice(shell.indexOf('<style>'), shell.indexOf('</style>') + 8) };
}
function pageHead(lang, t, o) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${o.url}">
<meta property="og:type" content="${o.ogType || 'website'}">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:url" content="${o.url}">
<meta property="og:image" content="${BASE}/marc.jpg">
<meta property="og:locale" content="${t.locale}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Ccircle cx='13' cy='13' r='10.5' fill='none' stroke='%237C5E3A' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='57 66' transform='rotate(-58 13 13)'/%3E%3C/svg%3E">
${o.ld.map(x => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('\n')}
<script defer src="/_vercel/insights/script.js"></script>
`;
}
function renderSections(sections) {
  return sections.map(sec => `      <h2>${sec.h}</h2>\n      ${sec.p ? sec.p.map(x => `<p>${x}</p>`).join('\n      ') : `<ul class="areas">${sec.list.map(([h, p]) => `\n        <li><h3>${h}</h3><p>${p}</p></li>`).join('')}\n      </ul>`}`).join('\n');
}
function articlePage(a, shell) {
  const lang = a.lang, t = L[lang];
  const { before, contact, after, style } = shellParts(shell, t);
  const url = `${BASE}/${a.file}`;
  const crumbLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.homeName, item: BASE + t.home },
    { '@type': 'ListItem', position: 2, name: t.articles, item: `${BASE}/${t.idx}` },
    { '@type': 'ListItem', position: 3, name: a.crumb, item: url }] };
  const articleLd = { '@context': 'https://schema.org', '@type': 'Article', headline: strip(a.h1), description: a.desc, inLanguage: lang, datePublished: a.date, dateModified: a.date,
    image: BASE + '/marc.jpg', mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Marc Hampshire Viñamata', url: BASE + t.home, jobTitle: META[lang].job },
    publisher: { '@type': 'Organization', name: 'Marc Hampshire Viñamata', url: BASE } };
  const related = (a.related || []).map(f => SERVICES.find(o => o.file === f)).filter(Boolean);
  const main = `<main id="top">
  <section class="block" style="border-top:0">
    <div class="wrap article">
      <p class="muted" style="font-size:.9rem"><a href="${t.home}">${t.homeName}</a> / <a href="/${t.idx}">${t.articles}</a> / ${a.crumb}</p>
      <h1>${a.h1}</h1>
      <p class="lead">${a.lead}</p>
      <p class="byline">${t.by} · ${t.pub} ${fmtDate(a.date, lang)}</p>
      <div class="article-body">
${renderSections(a.sections)}
        <p class="muted" style="font-size:.9rem;margin-top:32px">${t.note}</p>
      </div>
      <div class="cta-box">
        <h2>${t.ctaH}</h2>
        <p>${t.ctaP}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="${CALL}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#cal"/></svg><span>${t.call}</span></a>
          <a class="btn btn-ghost" href="https://wa.me/34624080367" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#wa"/></svg><span>${t.wa}</span></a>
        </div>
      </div>
      ${related.length ? `<p class="muted" style="margin-top:28px">${t.relH}: ${related.map(o => `<a href="/${o.file}">${o.crumb}</a>`).join(' · ')}</p>` : ''}
    </div>
  </section>

  ${contact}
</main>`;
  return pageHead(lang, t, { title: a.title, desc: a.desc, url, ogType: 'article', ld: [articleLd, crumbLd] }) + style + '\n' + ARTICLE_CSS + before + main + after;
}
for (const a of ARTICLES) fs.writeFileSync(path.join(OUT, a.file), articlePage(a, shells[a.lang]));
const INDEX = {
  en: { file: 'articles.html', title: 'Articles for Expats and English Speakers in Spain | Marc Hampshire', desc: 'Practical articles on therapy in Spain, finding an English-speaking therapist, insurance and living abroad, by licensed psychologist Marc Hampshire in Barcelona.',
        h1: 'Articles', lead: 'Practical writing on therapy, mental health and living abroad, for English speakers in Barcelona and Spain.' },
  es: { file: 'articulos.html', title: 'Artículos sobre terapia y salud mental | Marc Hampshire', desc: 'Artículos sobre cuándo ir al psicólogo, terapia Gestalt y otros enfoques, por Marc Hampshire, psicólogo general sanitario en Barcelona.',
        h1: 'Artículos', lead: 'Textos sobre terapia y salud mental, escritos desde la consulta.' }
};
for (const [lang, ix] of Object.entries(INDEX)) {
  if (!ARTICLES.some(a => a.lang === lang)) continue;
  const t = L[lang];
  const { before, contact, after, style } = shellParts(shells[lang], t);
  const list = ARTICLES.filter(a => a.lang === lang);
  const url = `${BASE}/${ix.file}`;
  const crumbLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.homeName, item: BASE + t.home }, { '@type': 'ListItem', position: 2, name: t.articles, item: url }] };
  const main = `<main id="top">
  <section class="block" style="border-top:0">
    <div class="wrap article">
      <p class="muted" style="font-size:.9rem"><a href="${t.home}">${t.homeName}</a> / ${t.articles}</p>
      <h1>${ix.h1}</h1>
      <p class="lead">${ix.lead}</p>
      <ul class="areas article-list">${list.map(a => `\n        <li><h3><a href="/${a.file}">${strip(a.h1)}</a></h3><p>${a.desc}</p></li>`).join('')}
      </ul>
    </div>
  </section>

  ${contact}
</main>`;
  fs.writeFileSync(path.join(OUT, ix.file), pageHead(lang, t, { title: ix.title, desc: ix.desc, url, ld: [crumbLd] }) + style + '\n' + ARTICLE_CSS + before + main + after);
}
// body link lists removed: the footer already links every service page
// Link "Con qué te puedo ayudar" items to their service pages
function linkAreas(file, map) {
  const fp = path.join(OUT, file); let h = fs.readFileSync(fp, 'utf8');
  for (const [key, url] of Object.entries(map)) h = h.replace(new RegExp('(<h3 data-i18n="' + key + '">)([^<]+)(</h3>)'), `$1<a href="${url}">$2</a>$3`);
  fs.writeFileSync(fp, h);
}
const ES_AREAS = { a1h: '/psicologo-relaciones-pareja-barcelona.html', a2h: '/psicologo-ansiedad-barcelona.html', a4h: '/psicologo-autoestima-barcelona.html', a5h: '/psicologo-duelo-barcelona.html', a9h: '/psicologo-estres-burnout-barcelona.html' };
const CA_AREAS = { a1h: '/psicologo-relaciones-pareja-barcelona.html', a2h: '/psicologo-ansiedad-barcelona.html', a4h: '/psicologo-autoestima-barcelona.html', a5h: '/psicologo-duelo-barcelona.html', a9h: '/psicologo-estres-burnout-barcelona.html' };
linkAreas('index.html', ES_AREAS); linkAreas('ca.html', CA_AREAS);
linkAreas('en.html', { a2h: '/anxiety-therapy-in-english.html', a5h: '/grief-counselling-in-english.html', a9h: '/burnout-therapy-in-english.html' });


// Site-wide footer links (internal linking): pages in the same language + articles
const LABELS = { es: ['Servicios', 'Artículos'], ca: ['Serveis', null], en: ['Services', 'Articles'] };
for (const f of fs.readdirSync(OUT).filter(f => f.endsWith('.html') && !['couples-therapy-in-english.html', 'review.html'].includes(f))) {
  const fp = path.join(OUT, f); let h = fs.readFileSync(fp, 'utf8');
  const svc = SERVICES.find(o => o.file === f), art = ARTICLES.find(o => o.file === f);
  const lang = f === 'ca.html' ? 'ca' : f === 'en.html' || f === 'articles.html' ? 'en' : svc ? svc.lang : art ? art.lang : 'es';
  const [label, artLabel] = LABELS[lang];
  const pages = SERVICES.filter(o => o.lang === lang);
  const arts = ARTICLES.filter(o => o.lang === lang);
  let nav = `<nav aria-label="${label}" style="flex-basis:100%;line-height:1.9"><b>${label}:</b> ${pages.map(o => `<a href="/${o.file}">${o.crumb}</a>`).join(' · ')}</nav>\n  `;
  if (artLabel && arts.length) nav += `<nav aria-label="${artLabel}" style="flex-basis:100%;line-height:1.9"><b><a href="/${L[lang].idx}">${artLabel}</a>:</b> ${arts.map(o => `<a href="/${o.file}">${o.crumb}</a>`).join(' · ')}</nav>\n  `;
  h = h.replace('<footer>\n', '<footer>\n    ' + nav);
  fs.writeFileSync(fp, h);
}

const today = new Date().toISOString().slice(0, 10);
const langUrls = Object.values(URLS).map(u => `  <url>\n    <loc>${BASE}${u}</loc>\n    <lastmod>${today}</lastmod>\n${Object.entries(URLS).map(([l, x]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}${x}"/>`).join('\n')}\n  </url>`);
const svcUrls = SERVICES.map(svc => `  <url>\n    <loc>${BASE}/${svc.file}</loc>\n    <lastmod>${today}</lastmod>\n${svc.alt ? [`    <xhtml:link rel="alternate" hreflang="${svc.lang}" href="${BASE}/${svc.file}"/>`, ...Object.entries(svc.alt).map(([l, f]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${f}"/>`)].join('\n') + '\n' : ''}  </url>`);
const plainUrl = f => `  <url>\n    <loc>${BASE}/${f}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
const extraUrls = ['supervision-terapeutas.html'].map(plainUrl);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${langUrls.concat(svcUrls, extraUrls).join('\n')}\n</urlset>\n`);
// llms.txt: plain-language summary for AI assistants and crawlers
const llmsList = lang => SERVICES.filter(o => o.lang === lang).map(o => `- [${o.crumb}](${BASE}/${o.file}): ${o.desc}`).join('\n');
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# Marc Hampshire Viñamata, psychologist and Gestalt psychotherapist in Barcelona

> Licensed health psychologist (Psicólogo General Sanitario, COPC 30868) and Gestalt psychotherapist. Individual psychotherapy in English, Spanish or Catalan, in person in the Eixample (Barcelona) and online across Spain. English is one of his native languages. He does not offer couples therapy: individual therapy only.

- Address: Carrer de la Diputació 153, 08011 Barcelona (also works at Clínica ART, Carrer de la Diputació 176)
- Hours: Tuesday to Thursday 16:00-21:00, Friday 15:00-19:30
- Price: 70 EUR per individual session (first three sessions last one hour, then 45-50 minutes). Invoice for every session.
- Free 15-minute introductory call: https://calendar.app.google/oP3mJpvH2ySd55uu7
- Phone and WhatsApp: +34 624 08 03 67
- Approach: Gestalt psychotherapy and relational psychoanalysis. Process of exploration (three exploratory sessions, goals in the fourth), usually medium to long term. Not a quick-fix or technique-based approach.
- Training: Institut Gestalt de Barcelona (3 years of training and 3 years of observation in therapy groups); Master in General Health Psychology.

## Main pages
- [Home (Spanish)](${BASE}/): psicólogo y psicoterapeuta Gestalt en Barcelona
- [Home (English)](${BASE}/en.html): English-speaking psychologist and Gestalt psychotherapist in Barcelona
- [Home (Catalan)](${BASE}/ca.html): psicòleg i psicoterapeuta Gestalt a Barcelona

## English
${llmsList('en')}
${ARTICLES.filter(a => a.lang === 'en').map(a => `- [${a.crumb}](${BASE}/${a.file}): ${a.desc}`).join('\n')}

## Español
${llmsList('es')}
${ARTICLES.filter(a => a.lang === 'es').map(a => `- [${a.crumb}](${BASE}/${a.file}): ${a.desc}`).join('\n')}

## Català
${llmsList('ca')}
`);
console.log('built', fs.readdirSync(OUT).join(', '));
