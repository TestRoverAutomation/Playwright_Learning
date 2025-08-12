import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

/**
 * this.my_account_Btn = page.getByRole('button', { name: 'My account' });
    this.email_box = page.getByPlaceholder('E-Mail Address');
    this.password_box = page.getByPlaceholder('Password');
    this.submit_btn = page.locator("input[value='Login']");
 */

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({page}, url) => {
  await page.goto(url);
  await page.pause();
});

Given('I click on My account', async ({page}) => {
  await page.getByRole('button', { name: 'My account' }).click();
});

Given('I enter E-Mail Address {string}', async ({page}, emailAddress) => {
  await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
});

Given('I enter password {string}', async ({page}, password) => {
  await page.getByPlaceholder('Password').fill(password);
});

When('I click on submit button', async ({page}) => {
 await page.locator("input[value='Login']").click();
});

Then('I should verify url contains {string}', async ({page}, looged_URL) => {
  await expect(page).toHaveURL(new RegExp(looged_URL));
});

Then('I should verify user is not able to login and url contains {string}', async ({page}, unlooged_URL) => {
  await expect(page).toHaveURL(new RegExp(unlooged_URL));
});