#!/usr/bin/env node
// cv.diaczun.com — un cv.md (y cv.en.md) → página + PDF. Uso: node build.js [--sin-pdf]
const fs = require("fs"), path = require("path"), { execFileSync } = require("child_process");
const { marked } = require("marked"); const matter = require("gray-matter");
const RAIZ = __dirname, SITIO = "https://cv.diaczun.com";
const CHROME = ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find(fs.existsSync);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function render(archivo, salida, ruta) {
  const { data: d, content } = matter(fs.readFileSync(path.join(RAIZ, archivo), "utf8"));
  let html = marked.parse(content);
  // "<h3>…</h3><p><em>meta</em></p>" → línea de metadatos
  html = html.replace(/(<\/h3>\s*)<p><em>([\s\S]*?)<\/em><\/p>/g, '$1<p class="meta">$2</p>');
  const base = ruta === "/" ? "./" : "../";
  const pagina = `<!doctype html>
<html lang="${d.idioma}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(d.nombre)} — ${esc(d.rol)}</title>
<meta name="description" content="${esc(d.descripcion)}">
<meta name="author" content="${esc(d.nombre)}">
<meta name="color-scheme" content="light dark">
<link rel="canonical" href="${SITIO}${ruta}">
<meta property="og:title" content="${esc(d.nombre)} — ${esc(d.rol)}">
<meta property="og:description" content="${esc(d.descripcion)}">
<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500&display=swap">
<link rel="stylesheet" href="${base}style.css">
</head>
<body>
<nav class="barra"><a href="${base}${d.pdf}" download>PDF</a><a href="${d.otro_url}" hreflang="${d.idioma === "es" ? "en" : "es"}">${esc(d.otro_idioma)}</a><a href="https://diaczun.com">diaczun.com</a></nav>
<main class="hoja">
<header class="cab">
  <div class="id"><svg class="mono" viewBox="0 0 100 100" aria-hidden="true"><defs><mask id="ojo"><rect width="100" height="100" fill="#fff"/><path d="M38 50q12 12 24 0" fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"/></mask></defs><path d="M26 18h26a32 32 0 0 1 0 64H26z" fill="currentColor" mask="url(#ojo)"/></svg><div><h1>${esc(d.nombre)}</h1><p class="rol">${esc(d.rol)} · ${esc(d.ciudad)}</p></div></div>
  <div class="contacto"><a href="mailto:${d.mail}">${d.mail}</a><br><a href="https://${d.web}">${d.web}</a><br><a href="https://${d.github}">${d.github}</a><br><a href="https://${d.linkedin}">${d.linkedin}</a></div>
</header>
${html}
</main>
</body>
</html>
`;
  const abs = path.join(RAIZ, salida);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, pagina);
  return { d, abs };
}

function pdf(htmlAbs, pdfRel) {
  if (!CHROME) { console.log("  (sin Chrome: no genero " + pdfRel + ")"); return; }
  const out = path.join(RAIZ, pdfRel);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", "--virtual-time-budget=6000", "--no-pdf-header-footer", "--print-to-pdf=" + out, "file://" + htmlAbs], { stdio: "ignore", timeout: 60000 });
  console.log("  " + pdfRel + " (" + Math.round(fs.statSync(out).size / 1024) + " KB)");
}

fs.copyFileSync(path.join(RAIZ, "src/style.css"), path.join(RAIZ, "style.css"));
const es = render("cv.md", "index.html", "/");
const en = render("cv.en.md", "en/index.html", "/en/");
console.log("cv.diaczun.com: index.html, en/index.html");
if (!process.argv.includes("--sin-pdf")) { pdf(es.abs, es.d.pdf); pdf(en.abs, en.d.pdf); }
