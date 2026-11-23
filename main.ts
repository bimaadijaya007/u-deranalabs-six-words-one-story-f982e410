import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She kept his letters. Burned mine.";

// Self-check: the gate requires exactly six words, 1-60 characters.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) throw new Error(`expected 1-60 chars, got ${STORY.length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY);
