# Product Requirements Document (PRD) — Frontend God

## Ringkasan Proyek
`frontend-god` adalah skill coding agent untuk Senior Frontend & Design Engineer (Staff Level) pada ekosistem React & Next.js. Skill ini bertugas menghasilkan antarmuka modern berkualitas tinggi bebas "AI slop" dengan standar Linear, Vercel, Stripe, Resend, Cursor, Mercury, Ramp, Attio, PostHog, dan Anthropic.

## Target Rilis: Consumer & Editorial Showcase (Pear.vc Benchmark)
Memperluas kapabilitas skill ke arah antarmuka berorientasi konsumen publik dan etalase editorial:
1. **Style Signature 11 (Pear.vc)**: Split-text hero, strip logo monokrom, kartu besar `content-box` bergradien lembut, visual/fotografi resolusi tinggi terpusat, teks $\le 12$ kata.
2. **Dual-Mode Theme Toggle**: Melegalkan tombol Theme Toggle (Light/Dark) di navbar dengan transisi variabel semantik CSS `:root` dan `.dark` via OKLCH tokens.
3. **Pembersihan Elemen Devops di Web Konsumen**: Melarang judul kecil (category eyebrow/kicker), terminal CLI, snippet kode program, dan kapsul status server (uptime 99.999%) pada antarmuka publik consumer.
4. **Three-Pillar Layout Architecture**: Klasifikasi baku antara Consumer Showcase vs Developer Tooling vs B2B Cockpit.

## Target Rilis Sebelumnya: Modern Stack Resilience
Memperluas dan mempertajam aturan skill agar tangguh menghadapi ekosistem modern:
1. Tooling & Build: Vite + TypeScript 5.8+/6.x + Tailwind CSS v4 + shadcn CLI v4.
2. React 19 & Runtime: useActionState, useOptimistic, useTransition, AbortController, Hydration guard.
3. Layout & Density: Dual-mode layout (Marketing vs B2B Cockpit), densitas tinggi, overflow defense, tema OKLCH konsisten.
4. Interaksi & Aksesibilitas: Keyboard traversal, tooltips truncation, tactile clipboard feedback.
5. Verifikasi Otomatis: Zero unused variables, build check sebelum turn berakhir.
