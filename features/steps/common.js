const { Given, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('the user is logged in', async function () {
  // ✅ Do NOT use arrow function
  const page = this.page;
  await page.goto('http://localhost:3000/login');
  await page.fill('input[id="email-input"]', 'test@maddox123.ai');
  await page.fill('input[id="password-input"]', 'supersecure');
  await page.click('button[type="submit"]');
  await expect(page.locator('h2')).toHaveText('Counter');
});

When('the user clicks the logout button', async function () {
  const page = this.page;
  await page.click('button:text("Logout")');
});
