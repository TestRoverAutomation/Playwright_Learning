import { createBdd } from 'playwright-bdd';
import { AxeBuilder } from '@axe-core/playwright';
import type { AxeResults } from 'axe-core';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

let accessibilityScanResults: AxeResults;

Given('I navigate to the ecommerce homepage', async ({ page, baseURL }) => {
  if (!baseURL) {
    throw new Error('Base URL is not defined');
  }
  await page.goto(baseURL);
});

Given(
  'I navigate ecommerce  to {string}',
  async ({ page, baseURL }, url: string) => {
    if (!baseURL) {
      throw new Error('Base URL is not defined');
    }
    await page.goto(baseURL + url);
  }
);

When('I run accessibility scan', async ({ page }) => {
  accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
    .analyze();
});

When(
  'I scan the main header section for accessibility issues',
  async ({ page }) => {
    accessibilityScanResults = await new AxeBuilder({ page })
      .include('#main-header')
      .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
      .analyze();
  }
);

When(
  'I scan the navigation header section for accessibility issues',
  async ({ page }) => {
    accessibilityScanResults = await new AxeBuilder({ page })
      .include('#main-navigation')
      .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
      .analyze();
  }
);

When('I scan the footer section for accessibility issues', async ({ page }) => {
  accessibilityScanResults = await new AxeBuilder({ page })
    .include('.footer')
    .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
    .analyze();
});

When('I scan the main content for accessibility issues', async ({ page }) => {
  accessibilityScanResults = await new AxeBuilder({ page })
    .include('#common-home')
    .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
    .analyze();
});

Then('there should be no accessibility violations', async ({}) => {
  // Violations index, Violations Rule id, Violations impact, Violations description //helpurl
  // Violations Element index, Violations selector, Violations html
  const violations = accessibilityScanResults.violations;
  console.log(
    '\n=======================Accesibility Scan Reaport=====================\n'
  );
  if (violations.length > 0) {
    console.log(`Total Violations = ${violations.length}`);

    violations.forEach((v, violationsIndex) => {
      console.log(`Violations = ${violationsIndex + 1}`);
      console.log(`Rule id = ${v.id}`);
      console.log(`Impact = ${v.impact}`);
      console.log(`Description = ${v.description}`);
      console.log(`Helpurl = ${v.helpUrl}`);

      console.log('\nAffected Elements: \n');

      v.nodes.forEach((node, elementIndex) => {
        console.log(`Element ${elementIndex + 1}`);
        console.log(` Selector : ${node.target}`);
        console.log(` HTML : ${node.html}\n`);
      });
      console.log(
        '---------------------------------------------------------------------\n'
      );
    });
  } else {
    console.log(`No accessibility Violations found on this page`);
  }
  expect(accessibilityScanResults.violations.length).toBe(0);
});
