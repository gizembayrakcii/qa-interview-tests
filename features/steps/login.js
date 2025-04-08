const { expect } = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('the user is on the login page', async function () {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
});

When('the user fills in the email with {string}', async function (email) {
  const page = this.page;
  await page.fill('input[id="email-input"]', email);
});

When('the user fills in the password with {string}', async function (password) {
  const page = this.page;
  await page.fill('input[id="password-input"]', password);
});

When('the user clicks the submit button', async function () {
  const page = this.page;
  await page.click('button[type="submit"]');
});

Then('the user should be redirected to the homepage', async function () {
  const page = this.page;
  await expect(page).toHaveURL('http://localhost:3000/');
});

Then('the user should see {string} as the page title', async function (title) {
  const page = this.page;
  await expect(page.locator('h1')).toHaveText(title);
});

Then('the user should stay on the login page', async function () {
  const page = this.page;
  await expect(page).toHaveURL('http://localhost:3000/login');
});

Then('a token should be stored in local storage', async function () {
  const page = this.page;
  const token = await page.evaluate(() => localStorage.getItem('token'));
  console.log('✅ Token found in localStorage:', token);
  expect(token).not.toBeNull();
});

Then('the token should be removed from local storage', async function () {
  const page = this.page;
  const token = await page.evaluate(() => localStorage.getItem('token'));
  console.log('🧹 Token removed from localStorage:', token);
  expect(token).toBeNull();
});
