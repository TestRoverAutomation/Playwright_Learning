#!/usr/bin/env node
const glob = require('glob');
const { execSync } = require('child_process');

const files = glob.sync('tests/**/*.feature', { absolute: true });

if (files.length === 0) {
  console.log('⚠️  No feature files found.');
  process.exit(0);
}

try {
  execSync(`npx gherkin-lint ${files.join(' ')}`, { stdio: 'inherit' });
} catch {
  process.exit(1);
}
