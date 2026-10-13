/**
 * Test verifikasi integritas aturan SKILL.md dan dokumentasi pendukung.
 */
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert";

const skillPath = path.resolve(process.cwd(), "SKILL.md");
assert.ok(fs.existsSync(skillPath), "SKILL.md harus ada di root");

const skillContent = fs.readFileSync(skillPath, "utf8");

// Memastikan kata kunci krusial ekosistem modern ada di SKILL.md
const requiredTokens = [
  "Tailwind CSS v4",
  "ignoreDeprecations",
  "useActionState",
  "AbortController",
  "Cockpit",
  "oklch",
  "noUnusedLocals",
];

for (const token of requiredTokens) {
  const found = skillContent.toLowerCase().includes(token.toLowerCase());
  assert.ok(found, `SKILL.md harus memuat token kepatuhan: "${token}"`);
}

console.log("Semua pengujian integritas aturan lolos.");
