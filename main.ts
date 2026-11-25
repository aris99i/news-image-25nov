// THE WORLD — Wednesday, 25 November 2026.
// make.fun entry for "Sum up 25 November's world news in one image"
// (https://make.fun/bounty/news-image-20261125).
// Node 22, standard library only. The front page was composed in the build
// session and is stored in this repo as entry.png; this program places an
// exact copy of those bytes at the output path the harness reads. Nothing is
// drawn or altered at run time, so two runs produce identical output.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outputDir, "entry.png"));
