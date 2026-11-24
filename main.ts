// Say What Actually Broke — make.fun entry
// Writes one single-line error message to /output/entry.txt.
// The line names the real failure (expired TLS certificate), tells the
// user what to do next, and admits the embarrassing truth with a joke.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Our security certificate expired yesterday. Your data is safe, our calendar isn't. Renewing now, try again in 10 minutes.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Fail loudly
// instead of writing an entry the judge would never see.
if (!ENTRY.trim() || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(
    `Invalid entry: ${ENTRY.length} chars, multiline=${ENTRY.includes("\n")}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
