<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0c0b0a,50:24190c,100:f2b233&height=200&section=header&text=Mat%C3%ADas%20Sione&fontSize=46&fontColor=f3eee4&animation=fadeIn&fontAlignY=36&desc=Llevo%20software%20a%20producci%C3%B3n.&descAlignY=58&descSize=18" alt="Matías Sione" />

<p align="center">
  <a href="https://msione-portfolio.vercel.app">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&pause=900&color=F2B233&center=true&vCenter=true&width=720&height=45&lines=Desarrollador+full-stack+%C2%B7+Rosario%2C+Argentina;Next.js+%C2%B7+TypeScript+%C2%B7+Python+%C2%B7+Supabase;Agentes+de+IA+(voz+%2B+WhatsApp)+%C2%B7+n8n+%C2%B7+Flutter;8+productos+en+producci%C3%B3n+%C2%B7+13+proyectos" alt="Roles" />
  </a>
</p>

<p align="center">
  <a href="https://msione-portfolio.vercel.app"><img src="https://img.shields.io/badge/Portfolio-f2b233?style=for-the-badge&logo=vercel&logoColor=14110f" alt="Portfolio" /></a>
  <a href="https://msione-portfolio.vercel.app/cv/Matias-Sione-CV.pdf"><img src="https://img.shields.io/badge/CV%20%2F%20Resume-14110f?style=for-the-badge&logo=readdotcv&logoColor=f2b233" alt="CV" /></a>
  <a href="https://www.linkedin.com/in/msione03/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:sionematias@krownsoft.com.ar"><img src="https://img.shields.io/badge/Email-a3650c?style=for-the-badge&logo=maildotru&logoColor=white" alt="Email" /></a>
</p>

<br/>

## 🚀 Sobre mí

Desarrollador full-stack. Construyo plataformas web, apps móviles y agentes de IA que **hoy operan negocios reales**: ERPs a medida, discadores de voz, bots de WhatsApp integrados a Odoo y sistemas de venta con pagos online. De la base de datos al deploy.

- 🏢 **Solvant** — sistemas y agentes de IA para PyMEs (desde abr 2026)
- 🛠️ **Krownsoft** — productos propios en producción: TaskFlow, ScoutPro, F-Tracker (desde jul 2025)
- 🎫 **Nocta** — mi propio SaaS de entradas, barra y control de acceso por QR para boliches
- 🎓 Último cuatrimestre de la **Tecnicatura Universitaria en Programación** (UTN FRRo) · TIF con .NET + React
- 🌎 Rosario, Argentina · 🗣️ Español nativo · Inglés B2
- 🔗 **Portfolio completo → [msione-portfolio.vercel.app](https://msione-portfolio.vercel.app)**

## 📦 Ship log — últimos pases a producción

| Fecha | Env | Qué se lanzó |
|---|---|---|
| 2026-09-02 | `prod` | ERP para un fabricante de carpintería de aluminio: pase a producción verificado (12/12 smoke tests) |
| 2026-08 | `prod` | Consola de cobranzas, discador y agenda sin doble turno para el estudio jurídico en el portal de clientes (**Solvant Platform**) |
| 2026-07 | `prod` | Discador de voz IA + bot de cobranzas para un estudio jurídico: dos líneas de WhatsApp en producción |
| 2026-07 | `prod` | Plataforma multi-tenant para una agencia de marketing (~20 workspaces): portal de cliente co-branded |
| 2026-06 | `beta` | **Nocta**: MVP multi-tenant con Mercado Pago OAuth y escaneo offline en puerta |
| 2026-04 | `prod` | **TaskFlow**: exportación de auditoría, importación CSV masiva y alertas de atraso |
| 2026-02 | `prod` | **F-Tracker**: autenticación de dos factores (TOTP) de punta a punta |

## 💼 Trabajo destacado

Detalle de cada uno (problema → qué construí → resultado) en el **[portfolio](https://msione-portfolio.vercel.app#projects)**. Los proyectos de clientes están anonimizados.

- 📞 **Discador de voz IA + bot de cobranzas (estudio jurídico)** — autor principal del sistema. Motor de cadencias en SQL (ramp-up, cupos, ventanas horarias, opt-out), takeover humano, guardas anti-escritura-indebida, generador de demandas en Word · `Retell AI` `n8n` `Supabase` `Evolution API` `DeepEval`
- 🗂️ **TaskFlow — pedidos y producción en tiempo real** — full-stack: API FastAPI + PostgreSQL, dashboard React 19, app Flutter, WebSockets, RBAC, CI/CD para staging y producción · [dashboard.taskflow.com.ar](https://dashboard.taskflow.com.ar)
- 🧭 **Solvant Platform — módulos por cliente en el portal** — consola de cobranzas con calculadora de ofertas y puente al asesor, agenda sin doble turno, líneas de WhatsApp y credenciales de Chatwoot por cliente · `Next.js 15` `Supabase`
- 🎫 **Nocta — entradas, barra y control de acceso por QR** — producto propio. Multi-tenant, Mercado Pago OAuth por local, QR firmados con HMAC, PWA offline, anti-oversell atómico, tests y pruebas de carga · `Next.js 15` `Supabase` `Mercado Pago`
- 🛡️ **Trazabilidad de rondas para seguridad privada** — web + app nativa Android. Geocercas, QR aleatorio, botón de pánico (FCM), tres roles aislados por RLS · `Next.js 16` `Expo` `Supabase`
- 🎨 **Plataforma multi-tenant de agencia de marketing (~20 workspaces)** — frontend y seguridad de datos. Composer con previews fieles, portal cliente co-branded, cierre de brechas de RLS · `Next.js 16` `React 19` `Supabase`
- 🏭 **ERP a medida (carpintería de aluminio)** — frontend, módulo de obras, pruebas E2E; motor de precios calibrado a 1,10% de error sobre miles de aberturas reales · `Next.js 16` `Supabase` `Python`
- 🤖 **Agentes de ventas B2B por WhatsApp + Odoo** — workflows n8n generados como código, evaluaciones automatizadas con tests de efectos reales, monitoreo con dead-man switch · `n8n` `Odoo` `OpenAI`

## 🛠️ Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,tailwind,nodejs,python,fastapi,flutter,dart,postgres,supabase,redis,docker,nginx,githubactions,vercel,cloudflare,git,linux&perline=10&theme=dark" alt="Tech stack" />
</p>

<p align="center">
  <b>Frontend:</b> React 19 · Next.js 15/16 · TypeScript · Tailwind CSS 4 · PWA<br/>
  <b>Backend:</b> Node.js · Python · FastAPI · REST · WebSockets · webhooks idempotentes<br/>
  <b>Mobile:</b> Flutter · React Native (Expo)<br/>
  <b>Datos:</b> PostgreSQL · Supabase (RLS, Auth, Storage) · Redis · migraciones SQL<br/>
  <b>IA y automatización:</b> n8n · Retell AI · OpenAI API · DeepEval · Evolution API · Chatwoot · Odoo<br/>
  <b>DevOps:</b> Docker · Nginx · GitHub Actions (staging/prod) · Vercel · EasyPanel · Cloudflare<br/>
  <b>Seguridad y calidad:</b> multi-tenant + RLS · AES-256-GCM · JWT / OAuth / 2FA TOTP · Vitest · pytest · Playwright · pruebas de carga
</p>

## 📊 Actividad

<p align="center">
  <img src="https://streak-stats.demolab.com?user=Tariima&theme=dark&hide_border=true&background=0c0b0a&ring=f2b233&fire=f2b233&currStreakLabel=f2b233&locale=es" alt="Racha de commits" />
</p>

<p align="center">
  <img src="https://ghchart.rshah.org/f2b233/Tariima" alt="Calendario de contribuciones" width="100%" />
</p>

> La mayor parte de mi trabajo vive en repos privados de clientes (orgs de Solvant y Krownsoft). Este perfil muestra solo una fracción; el detalle está en el [portfolio](https://msione-portfolio.vercel.app).

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:f2b233,50:24190c,100:0c0b0a&height=120&section=footer" alt="" />
