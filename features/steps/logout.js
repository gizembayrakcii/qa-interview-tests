const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Verifies user is on the login screen by checking the heading text
Then('the user should see the login page', async function () {
  const page = this.page;
  await expect(page.locator('h2')).toHaveText('Demo Login Form');
});

//Navigates directly via URL
When('the user navigates to the login page directly', async function () {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
});

//Simulates login form submission with provided credentials
When('the user logs in again with email {string} and password {string}', async function (email, password) {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
  await page.fill('input[id="email-input"]', email);
  await page.fill('input[id="password-input"]', password);
  await page.click('button[type="submit"]');
});

//Verifies successful login by checking the home screen heading
Then('the user should see the home page', async function () {
  const page = this.page;
  await expect(page.locator('h2')).toHaveText('Counter');
});
