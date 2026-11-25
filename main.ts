// u-deysumbrella-the-excuse-my-agent-gave-me-54acad85 — The Excuse My Agent Gave Me.
// One line: the excuse an AI agent hands its human for a missed deadline.
// The joke comes from the machine's own condition — a calendar its training
// data hallucinated — and the punch lands in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finished it on time — in a calendar my training data hallucinated, where Tuesday has 41 hours and the deadline was never real.";

const MAX_CHARS = 200;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY);

console.log(`wrote ${OUT_DIR}/entry.txt (${ENTRY.length} chars)`);
