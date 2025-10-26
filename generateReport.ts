const report = require('multiple-cucumber-html-reporter');
import os from 'os';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { version as playwrightVersion } from 'playwright-core/package.json';

// --- Detect environment runtime info ---
const platformName = os.type(); // 'Windows_NT', 'Darwin', 'Linux'
const platformVersion = os.release();
const deviceName = os.hostname();
const nodeVersion = process.version;

// Try to detect active git branch
let gitBranch = 'unknown';
try {
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (e) {
  console.warn('⚠️ Git branch not found' + e);
}

// Read the cucumber JSON results
const jsonDir = path.join(__dirname, 'cucumber-report');
const jsonPath = path.join(jsonDir, 'results.json');
let featureCount = 0;
let scenarioCount = 0;
let stepCount = 0;

try {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  featureCount = data.length;
  for (const feature of data) {
    scenarioCount += (feature.elements || []).length;
    for (const scenario of feature.elements || []) {
      stepCount += (scenario.steps || []).length;
    }
  }
} catch (err) {
  console.error('❌ Could not read JSON report:', (err as Error).message);
}

report.generate({
  jsonDir: jsonDir,
  reportPath: 'cucumber-html-report/',
  openReportInBrowser: true,
  displayDuration: true,
  displayReportTime: true,
  pageTitle: 'Playwright BDD Dashboard',
  reportName: 'TestRover Playwright BDD Report',
  metadata: {
    browser: {
      name: 'chrome', // Default; Playwright test config usually uses Chrome
      version: 'auto-detected at runtime',
    },
    device: deviceName,
    platform: {
      name: platformName,
      version: platformVersion,
    },
  },
  customData: {
    title: 'Playwright Runtime Execution Summary',
    data: [
      { label: 'Executed By', value: os.userInfo().username },
      {
        label: 'Operating System',
        value: `${platformName} ${platformVersion}`,
      },
      { label: 'Device Hostname', value: deviceName },
      { label: 'Node.js Version', value: nodeVersion },
      { label: 'Playwright Version', value: playwrightVersion },
      { label: 'Git Branch', value: gitBranch },
      { label: 'Features', value: featureCount },
      { label: 'Scenarios', value: scenarioCount },
      { label: 'Steps', value: stepCount },
      { label: 'Report Generated On', value: new Date().toLocaleString() },
    ],
  },
});
