# Architecture Decision Log (ADR)

## ADR-001: Standarisasi Ekosistem Modern & Fine-Tuning Skill Frontend God
- **Status**: Accepted
- **Tanggal**: 2026-10-13
- **Konteks**: Munculnya deprecation pada TypeScript 5.8+ (`baseUrl`), arsitektur CSS-first Tailwind CSS v4 (@theme), isu alias path pada shadcn CLI v4 di Vite modular, serta kebutuhan densitas tinggi pada dashboard B2B.
- **Keputusan**:
  1. Menetapkan penanganan `ignoreDeprecations: "6.0"` atau `package.json#imports` untuk tooling TS modern.
  2. Melarang pembuatan `tailwind.config.js` di proyek Tailwind v4.
  3. Memisahkan paradigma layout: Marketing Mode (airy) vs Cockpit/Dashboard Mode (high density $\le 36$px row).
  4. Menetapkan aturan kepatuhan token semantik OKLCH untuk sistem tema (Light/Dark).
  5. Menambahkan aturan hook React 19 (`useActionState`, `useOptimistic`, `useTransition`), AbortController, dan hydration guard.
  6. Menetapkan self-healing verification: zero unused variables dan build checks sebelum penyelesaian turn.
- **Konsekuensi**: Kode antarmuka yang dihasilkan lebih tahan terhadap build failure dan memiliki ergonomi tinggi pada konteks enterprise/SaaS.
