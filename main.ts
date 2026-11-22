import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Late light comes in low through the kitchen window and settles on the floor, where the cat is asleep on a folded sweater, one paw over its eyes. The kettle has gone quiet. Nothing here needs an answer, and the light is in no hurry to leave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
