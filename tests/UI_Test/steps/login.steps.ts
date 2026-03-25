import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({ logInPage }, url) => {
  await logInPage.navigateToURL(url);
});

Given('I click on My account', async ({ logInPage }) => {
  await logInPage.clickMYAccount();
});

Given('I enter valid credentials', async ({ logInPage }) => {
  await logInPage.enterEmailAddress(process.env.VALID_EMAIL ?? '');
  await logInPage.enterPassword(process.env.VALID_PASSWORD ?? '');
});

Given(
  'I enter E-Mail Address {string}',
  async ({ logInPage }, emailAddress) => {
    await logInPage.enterEmailAddress(emailAddress);
  }
);

Given('I enter password {string}', async ({ logInPage }, password) => {
  await logInPage.enterPassword(password);
});

When('I click on submit button', async ({ logInPage }) => {
  await logInPage.submitForm();
});

Then('I should verify url contains {string}', async ({ page }, loggedURL) => {
  await expect(page).toHaveURL(new RegExp(loggedURL));
});

Then(
  'I should verify user is not able to login and url contains {string}',
  async ({ page }, unloggedURL) => {
    await expect(page).toHaveURL(new RegExp(unloggedURL));
  }
);
