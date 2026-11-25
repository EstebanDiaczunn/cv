---
idioma: en
nombre: Esteban Nicolás Diaczun
rol: AI Engineer · AI products in production
ciudad: Buenos Aires, Argentina · remote
mail: esteban@diaczun.com
web: diaczun.com
github: github.com/EstebanDiaczunn
linkedin: linkedin.com/in/esteban-diaczun
pdf: esteban-diaczun-en.pdf
otro_idioma: Español
otro_url: /
descripcion: Résumé of Esteban Nicolás Diaczun, AI engineer, AI products in production in accounting and healthcare.
---

## Profile

I build AI products and run them in production. Two are mine and live: Rúbrica, an accounting and tax system where agents do the month and the accountant signs off, and Clara, a WhatsApp assistant that books appointments for clinics.

I work by directing AI agents: I write the spec, review every change, verify, and ship. I published NAIKI, the code review standard I use for it. By day, for three years now, healthcare backend at QTECH.


## Own products

### Rúbrica — agent-run accounting and tax system
*2026 — present · [rubrica.ar](https://rubrica.ar) · NestJS, Next.js, PostgreSQL, Drizzle, BullMQ, Redis, MCP*

- Agents run the month for Argentine SMBs: they load invoices from the tax agency (ARCA) and bank statements, categorize, reconcile, and compute VAT, gross income tax and payroll. The accountant reviews and signs.
- Design rule: no amount is ever written by a model. Code computes it and cites the regulation; the model only picks among options the database gives it, with its confidence shown.
- E-invoicing with ARCA authorization codes, validated filing exports, and an MCP server so clients can use their own assistant.
- 3,000+ automated tests, plus independent evaluator agents that score the product on production before each deploy.


### Clara — WhatsApp assistant for clinics
*2025 — present · [clara.net.ar](https://clara.net.ar) · NestJS, Next.js, Prisma, PostgreSQL, Redis, Docker, Claude API*

- Multi-tenant SaaS in production: serves patients over WhatsApp, books appointments and integrates with the clinic's system.
- I designed, built and run it alone: queues, Docker deployment, monitoring and backups.

### NAIKI — code review standard for AI-assisted development
*Open source · [github.com/EstebanDiaczunn/naiki](https://github.com/EstebanDiaczunn/naiki) · Claude Code, Codex, OpenCode*

- Judgment-based review of agent-written code: proportion, domain, honest self-assessment.

## Experience

### Backend Developer — QTECH Soluciones Informáticas
*May 2023 — present · Remote · Laravel, Node.js, SQL Server, MySQL, WebSockets, Azure*

- Led the e-prescription integrations: connectors built from scratch with OSDE, Farmalink, Preserfar, Admifarm and the Ministry of Health bus (PUCO, SISA). They process thousands of prescriptions a day.
- Led the backend of the patient app the company sells to clinic networks. The largest client has 3,000+ active users.
- Gradual migration of the legacy HIS (vanilla PHP, PowerBuilder) to Laravel.
- Real-time appointment caller with WebSockets for healthcare waiting rooms.

### Short contracts — Basisty, Fuentes & Assoc · Extendeal
*December 2022 — March 2023 · Remote · .NET 6, C#, PostgreSQL, Python, FastAPI, AWS*

- REST APIs in .NET 6 with Entity Framework and xUnit tests; web scraping for the pharmaceutical industry with FastAPI and Selenium on AWS.

## Education

- **Programming Technical Degree** — in progress, since 2025.
- **BSc in Systems Analysis**, Instituto Superior N.º 24 — two years completed.

## Skills

- **Backend:** TypeScript, NestJS, Next.js, Node.js, PHP, Laravel, C#, .NET, Python.
- **Data:** PostgreSQL, SQL Server, MySQL, Redis, Drizzle, Prisma, BullMQ.
- **AI:** Claude API, MCP, tool calling, agent systems with evaluators, coding agents (Claude Code), WhatsApp bots (Meta, Twilio).
- **Infrastructure & async:** Docker, AWS, Azure, RabbitMQ, WebSockets.

## Languages

- **Spanish:** native. **English:** intermediate, improving.
