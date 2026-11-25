// Worst fix entry: writes one commit message to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'fix typo in the delete query: it now deletes everything, correctly spelled';

// Even a doomed fix deserves its message filed in the right place.
function entryFile(dir: string): string {
  return join(dir, 'entry.txt');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(entryFile(outDir), line + '\n', 'utf8');
