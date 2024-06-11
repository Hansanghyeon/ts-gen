#!/usr/bin/env node

import { Plop, run } from 'plop';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const plopfilePath = `${__dirname}/plopfile.js`;

Plop.launch(
  {
    cwd: process.cwd(),  // 현재 작업 디렉토리에서 Plop 실행
    configPath: plopfilePath,
    require: [],
    completion: 'plop',
  },
  run
);