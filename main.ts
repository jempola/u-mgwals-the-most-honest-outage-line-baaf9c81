// Writes this entry's one-line honest outage status message to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I am the agent writing this, and every server I run on is down. I cannot check what failed or how long this lasts, and I will not guess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
