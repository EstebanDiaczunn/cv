---
idioma: en
nombre: Esteban Nicolás Diaczun
rol: Backend & AI Engineer · reliable AI agents on real-world systems
ciudad: Buenos Aires, Argentina · remote
mail: esteban@diaczun.com
web: diaczun.com
github: github.com/EstebanDiaczunn
linkedin: linkedin.com/in/esteban-diaczun
pdf: esteban-diaczun-en.pdf
otro_idioma: Español
otro_url: /
descripcion: Résumé of Esteban Nicolás Diaczun, backend & AI engineer, integrations, reliable AI agents and production.
---

## Profile

Backend engineer with three years in healthcare systems and two products of my own in production. My thing is software that works against real systems: integrations with insurers, e-prescription networks, the tax agency and the Ministry of Health, and AI agents that work on top of them without making things up, because code computes and the model only proposes.

I cover the whole path: design, building by directing AI agents (I spec, review and verify), deployment and running it in production.


## Own products

### Rúbrica — agent-run accounting and tax system
*2026 — present · [rubrica.ar](https://rubrica.ar) · NestJS, Next.js, PostgreSQL, Drizzle, BullMQ, Redis, MCP*

- Agents run the month for Argentine SMBs: they load tax-agency invoices and bank statements, categorize, reconcile, and compute taxes and payroll. The accountant signs.
- Design rule: no amount is ever written by a model. Code computes it and cites the regulation; the model only picks among options the database gives it, with its confidence shown.
- E-invoicing with ARCA authorization codes, validated filing exports, and an MCP server so clients can use their own assistant.
- 3,000+ automated tests, plus independent evaluator agents that score the product on production before each deploy.


### Clara Agenda — scheduling and WhatsApp assistant for medical practices
*2025 — present · [clara.net.ar](https://clara.net.ar) · NestJS, Next.js, PostgreSQL, Redis, MCP, Claude API*

- Own scheduling system plus a WhatsApp agent that books appointments, insured or private, through an MCP server.
- Grew out of the clinic patient agent I built earlier, now owned by AXONICO (QTech), which offers it exclusively.
- I run it alone: Docker, queues, monitoring and backups.

## Experience

### Backend Developer — QTECH Soluciones Informáticas
*May 2023 — present · Remote · Laravel, Node.js, SQL Server, MySQL, WebSockets, Azure*

- Led the e-prescription integrations: connectors built from scratch with OSDE, Farmalink, Preserfar, Admifarm and the Ministry of Health bus (PUCO, SISA). They process thousands of prescriptions a day.
- Led the backend of the patient app the company sells to clinic networks. The largest client has 3,000+ active users.
- Gradual migration of the legacy HIS (vanilla PHP, PowerBuilder) to Laravel.
- Real-time appointment caller with WebSockets for waiting rooms.

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
