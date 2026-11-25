// Writes one funny tech-support line to /output/entry.txt: the agent
// logs the issue as a priority ticket while reassuring the customer
// it is already fixed — emotionally, at least.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I completely understand, and I've logged this as a priority ticket — number 482910 — which means it will be looked at in three to five business days, but emotionally, it's already fixed.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`entry line must be 1-199 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
