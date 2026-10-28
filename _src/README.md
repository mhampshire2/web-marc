# Fuente de marchampshire.com

Estos archivos generan las páginas HTML de la raíz del repo. No se publican (ver .vercelignore).

- `src.html`: plantilla de la portada con los textos ES (en el HTML) y los diccionarios CA y EN (objeto i18n al final).
- `services.js`: contenido de las páginas de servicio (ES y EN).
- `build.js`: `node build.js` genera `vercel/*.html`, `sitemap.xml`, etc. Copia esos HTML a la raíz del repo.

Para construir: copia `marc.jpg` del repo junto a estos archivos si hace falta y ejecuta `node build.js` (Node 18+). Los HTML resultantes van a la raíz del repo; Vercel despliega solo al hacer commit en `main`.

Notas: tono clínico-humanista; precio 70 €; NO terapia de pareja; proceso de exploración (3 sesiones) y objetivos en la 4.ª; no inventar datos (forma de pago, plataformas, direcciones) sin confirmación de Marc.
