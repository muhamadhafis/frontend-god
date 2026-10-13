# Known Issues & Troubleshooting

## 1. Error TS5101: Option 'baseUrl' is deprecated (TypeScript 5.8+)
- **Gejala**: `npm run build` atau `tsc -b` gagal dengan error TS5101 saat menginisialisasi shadcn di Vite.
- **Solusi**: Tambahkan `"ignoreDeprecations": "6.0"` pada `compilerOptions` di `tsconfig.json` atau migrasi alias ke `package.json#imports` (`#/*`).

## 2. shadcn CLI Init Crash di Vite Modular (tsconfig.app.json)
- **Gejala**: `npx shadcn@latest init` gagal mendeteksi path alias `@/*`.
- **Solusi**: Pastikan root `tsconfig.json` memiliki mapping alias atau tunjuk konfigurasi path secara eksplisit.

## 3. Tailwind CSS v4 @apply Custom Utilities Issue
- **Gejala**: `@apply` gagal mengenali custom utility classes saat file `tailwind.config.js` usang dibuat.
- **Solusi**: Hindari pembuatan file config legacy; definisikan seluruh token di CSS via `@theme`.
