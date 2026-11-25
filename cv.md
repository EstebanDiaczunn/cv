---
idioma: es
nombre: Esteban Nicolás Diaczun
rol: AI Engineer · productos con IA en producción
ciudad: Buenos Aires, Argentina · remoto
mail: esteban@diaczun.com
web: diaczun.com
github: github.com/EstebanDiaczunn
linkedin: linkedin.com/in/esteban-diaczun
pdf: esteban-diaczun.pdf
otro_idioma: English
otro_url: /en/
descripcion: CV de Esteban Nicolás Diaczun, AI engineer, productos con IA en producción en contabilidad y salud.
---

## Perfil

Construyo productos con IA y los pongo en producción. Dos son míos y están andando: Rúbrica, un sistema contable y fiscal donde los agentes hacen el mes y el contador firma, y Clara Agenda, turnos con un asistente de WhatsApp para consultorios chicos.

Trabajo dirigiendo agentes de IA: escribo la especificación, reviso cada cambio, verifico y despliego. Publiqué NAIKI, el estándar de code review que uso para eso. De día, hace tres años, backend de sistemas de salud en QTECH.


## Productos propios

### Rúbrica — sistema contable y fiscal con agentes
*2026 — actualidad · [rubrica.ar](https://rubrica.ar) · NestJS, Next.js, PostgreSQL, Drizzle, BullMQ, Redis, MCP*

- Los agentes hacen el mes de una PyME argentina: cargan comprobantes de ARCA y extractos del banco, imputan, concilian y liquidan IVA, Ingresos Brutos y sueldos. El contador revisa y firma.
- Regla de diseño: ningún importe lo escribe un modelo. Lo calcula el código con la norma citada; el modelo sólo elige entre opciones que le da la base, con la confianza a la vista.
- Factura electrónica con CAE de ARCA, archivos para presentar validados y servidor MCP para que el cliente use su propio asistente.
- Más de 3.000 pruebas automáticas y agentes evaluadores independientes que miden el producto sobre producción antes de desplegar.


### Clara Agenda — turnos y asistente de WhatsApp para consultorios
*2025 — actualidad · [clara.net.ar](https://clara.net.ar) · NestJS, Next.js, PostgreSQL, Redis, MCP, Claude API*

- Agenda propia y un agente que atiende a los pacientes por WhatsApp y da turnos, con obras sociales y particulares, a través de un servidor MCP.
- Sale del agente de pacientes para clínicas que construí y le vendí a AXONICO (QTech), que lo vende con exclusividad.

### NAIKI — estándar de code review para desarrollo con IA
*Open source · [github.com/EstebanDiaczunn/naiki](https://github.com/EstebanDiaczunn/naiki) · Claude Code, Codex, OpenCode*

- Revisa con criterio lo que escribe un agente: proporción, dominio y autoevaluación honesta.

## Experiencia

### Backend Developer — QTECH Soluciones Informáticas
*Mayo 2023 — actualidad · Remoto · Laravel, Node.js, SQL Server, MySQL, WebSockets, Azure*

- Lideré las integraciones de receta electrónica: conectores desde cero con OSDE, Farmalink, Preserfar, Admifarm y el Bus del Ministerio de Salud (PUCO, SISA). Procesan miles de recetas por día.
- Lideré el backend de la app de pacientes que la empresa vende a redes de clínicas. El cliente más grande supera los 3.000 usuarios activos.
- Migración gradual del HIS legado (PHP plano, PowerBuilder) a Laravel.
- Llamador de turnos en tiempo real con WebSockets para salas de espera.

### Contratos cortos — Basisty, Fuentes & Assoc · Extendeal
*Diciembre 2022 — marzo 2023 · Remoto · .NET 6, C#, PostgreSQL, Python, FastAPI, AWS*

- APIs REST en .NET 6 con Entity Framework y pruebas con xUnit; scraping para la industria farmacéutica con FastAPI y Selenium sobre AWS.

## Educación

- **Tecnicatura en Programación** — en curso, desde 2025.
- **Licenciatura en Análisis de Sistemas**, Instituto Superior N.º 24 — dos años cursados.

## Habilidades

- **Backend:** TypeScript, NestJS, Next.js, Node.js, PHP, Laravel, C#, .NET, Python.
- **Datos:** PostgreSQL, SQL Server, MySQL, Redis, Drizzle, Prisma, BullMQ.
- **IA:** Claude API, MCP, tool calling, sistemas de agentes con evaluadores, agentes de código (Claude Code), bots de WhatsApp (Meta, Twilio).
- **Infraestructura y asincronía:** Docker, AWS, Azure, RabbitMQ, WebSockets.

## Idiomas

- **Español:** nativo. **Inglés:** intermedio, en curso.
