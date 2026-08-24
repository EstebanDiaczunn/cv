# cv.diaczun.com

CV de Esteban Nicolás Diaczun. **Una sola fuente**: `cv.md` (español) y `cv.en.md` (inglés, misma estructura).
`node build.js` genera `index.html`, `en/index.html` y los PDF (`esteban-diaczun.pdf`, `esteban-diaczun-en.pdf`)
con Chrome headless. Repo `EstebanDiaczunn/cv` → GitHub Pages con `CNAME cv.diaczun.com`.

## Editar

- Frontmatter: `nombre`, `rol`, `ciudad`, `mail`, `web`, `github`, `linkedin`, `pdf`, `otro_idioma`, `otro_url`.
- Cuerpo: `## Sección`, `### Puesto — Empresa`, y justo debajo una línea en cursiva `*fechas · modalidad · stack*`
  que se convierte en la línea de metadatos. Después, viñetas.
- Cambiar algo en los dos idiomas. No inventar logros: si Esteban no lo dijo, no va.
- Sin foto, sin dirección, sin teléfono. No enlazar a la libreta ni a perfiles personales desde acá.

## Publicar

`./publicar.sh "mensaje"` — build + commit + push. Si no hay Chrome, `node build.js --sin-pdf` (los PDF viejos quedan).
