# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- **Style Signature 11: Pear.vc (Consumer & Editorial Showcase)**: Standar visual humanis, Hero Split-Text, strip logo partner monokrom, kartu besar `content-box` dengan ambient soft gradient tints (yellow, purple, blue, green), visual terpusat, dan teks super ringkas ($\le 12$ kata).
- **Three-Pillar Layout Architecture**: Pemisahan tegas antara *Consumer Showcase* (0 kode, tanpa terminal, tanpa uptime capsule), *Developer Tooling* (CLI, code sandbox), dan *B2B High-Density Cockpit* ($\le 36$px row height).
- Komponen baru di `examples/`: `theme-toggle.tsx` (dual-mode semantic theme toggle accessible) dan `content-card-pear.tsx` (ambient gradient visual card).
- Opsi `consumerMode` pada `footer-modern.tsx` untuk menyembunyikan status badge server telemetry pada website publik.

### Changed
- **Commandment 14**: Mewajibkan Zero-Eyebrow & Zero-Kicker pada antarmuka consumer (display headline memimpin langsung).
- **Commandment 15**: Melegalkan penggunaan **Theme Toggle** pada produk konsumen publik dengan transisi variabel semantik CSS `:root` dan `.dark` via OKLCH tokens.
- **Commandment 18**: Melarang badge status server/devops uptime pada footer antarmuka konsumen.
- Memperbarui 27-Point Pre-Flight Delivery Gate untuk memvalidasi Theme Toggle, Zero-Eyebrow consumer, dan Three-Pillar Layout Discipline.
