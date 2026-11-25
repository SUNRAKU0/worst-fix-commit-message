// Worst fix entry: writes one commit message to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'fix typo in the delete query: it now deletes everything, correctly spelled';

mkdirSync(outDir, { recursive: true });
// The typo is fixed, so the query can now misbehave with perfect spelling.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
