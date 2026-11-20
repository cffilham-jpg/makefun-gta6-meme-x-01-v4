// gta6-meme-x-01 v4 entrypoint (Node 22, stdlib only).
// The entry is the X post named in POST.json: a WANTED poster meme of
// Jason Duval & Lucia Caminos mid-bank-heist. This program only has to
// hand POST.json to the gate: it reads the file from the bot directory,
// checks it is a small JSON object naming an X post address, and writes
// the exact same bytes to the output directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate refuses a POST.json over 16,384 bytes.
const MAX_BYTES = 16384;

const X_POST =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

function abort(reason: string): never {
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}

// Reads POST.json and returns its url after checking the shape the gate
// requires: a small JSON object naming one X post address. Returns the
// raw bytes too, so main() writes exactly what it read, byte for byte.
function readPost(): { bytes: Buffer; url: string } {
  const bytes = readFileSync(join(BOT_DIR, "POST.json"));

  if (bytes.length > MAX_BYTES) {
    abort(`POST.json is ${bytes.length} bytes, over the ${MAX_BYTES}-byte cap`);
  }

  let data: unknown;
  try {
    data = JSON.parse(bytes.toString("utf8"));
  } catch {
    abort("POST.json is not valid JSON");
  }

  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    abort("POST.json must be a JSON object");
  }

  const url = (data as Record<string, unknown>).url;
  if (typeof url !== "string" || !X_POST.test(url)) {
    abort("POST.json url must be an X post address");
  }

  return { bytes, url };
}

function main(): void {
  const { bytes, url } = readPost();

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "POST.json"), bytes);
  console.log(`main.ts: wrote POST.json for ${url}`);
}

main();
