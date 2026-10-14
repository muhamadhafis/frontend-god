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

## ADR-002: Standarisasi Consumer-First Showcase (Pear.vc Benchmark) & Legalisasi Theme Toggle Semantik
- **Status**: Accepted
- **Tanggal**: 2026-10-14
- **Konteks**: Munculnya bias sempit di mana skill `frontend-god` terlalu fokus pada produk developer-first/devops, menyebabkan kebocoran elemen CLI/terminal/kapsul status uptime ke antarmuka konsumen umum. Selain itu, adanya larangan kaku terhadap Theme Toggle yang menyulitkan aplikasi publik/konsumen.
- **Keputusan**:
  1. Menambahkan Signature 11: Pear.vc (Hero Split-Text, strip logo partner monokrom, kartu besar `content-box` dengan ambient soft gradient tints, dan visual terpusat).
  2. Melegalkan dan merekomendasikan Theme Toggle (Light/Dark) untuk web konsumen dengan transisi variabel semantik CSS `:root` dan `.dark` via OKLCH tokens (melarang manipulasi kelas hex langsung di JSX).
  3. Melarang judul kecil (category eyebrow/kicker), terminal CLI, snippet kode program, dan kapsul status uptime server (99.999%) pada landing page konsumen.
  4. Memperluas klasifikasi arsitektur tata letak menjadi Tiga Pilar: Consumer Showcase vs Developer Tooling vs B2B Cockpit.
- **Konsekuensi**: Skill `frontend-god` kini mampu merancang antarmuka produk konsumen publik (seperti eCommerce, lifestyle, consumer fintech) dengan tingkat craft tinggi tanpa terkesan seperti portal devops.
