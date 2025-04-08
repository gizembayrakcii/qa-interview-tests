const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Then('the user should see the login page', async function () {
  const page = this.page;
  await expect(page.locator('h2')).toHaveText('Demo Login Form');
});

When('the user navigates to the login page directly', async function () {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
});

When('the user logs in again with email {string} and password {string}', async function (email, password) {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
  await page.fill('input[id="email-input"]', email);
  await page.fill('input[id="password-input"]', password);
  await page.click('button[type="submit"]');
});

Then('the user should see the home page', async function () {
  const page = this.page;
  await expect(page.locator('h2')).toHaveText('Counter');
});
