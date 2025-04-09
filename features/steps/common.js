const { Given, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//This step sets up the initial condition for a test. The goal here is to make sure the user is already logged in.
Given('the user is logged in', async function () {
  const page = this.page;
  await page.goto('http://localhost:3000/login');
  await page.fill('input[id="email-input"]', 'test@maddox123.ai');
  await page.fill('input[id="password-input"]', 'supersecure');
  await page.click('button[type="submit"]');
  await expect(page.locator('h2')).toHaveText('Counter');
});


//This step does after logging in.
When('the user clicks the logout button', async function () {
  const page = this.page;
  await page.click('button:text("Logout")');
});
