// One-Sentence Absurd Invention Pitch — a ridiculous invention that fixes a tiny everyday annoyance.
// The annoyance: socks vanish in the wash. The invention: a sock that fights back through paperwork.
// Output: exactly one sentence (165 characters), written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The Bureaucracy Sock: a sock that files a formal written complaint every time it loses its partner in the wash, then bills the washing machine for emotional damages.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
