const { expect } = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');

//This file defines steps for testing the login functionality using Cucumber.js and Playwright

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

//Verify the user is redirected to the homepage
Then('the user should be redirected to the homepage', async function () {
  const page = this.page;
  await expect(page).toHaveURL('http://localhost:3000/');
});

//Check that a specific title is visible on the page
Then('the user should see {string} as the page title', async function (title) {
  const page = this.page;
  await expect(page.locator('h1')).toHaveText(title);
});

//Verify that the user remains on the login page (failed login)
Then('the user should stay on the login page', async function () {
  const page = this.page;
  await expect(page).toHaveURL('http://localhost:3000/login');
});

//Verify that a token is stored in local storage (after successful login)
Then('a token should be stored in local storage', async function () {
  const page = this.page;
  //Access the 'token' item from localStorage in the browser
  const token = await page.evaluate(() => localStorage.getItem('token'));
  console.log('Token found in localStorage:', token);
  expect(token).not.toBeNull();
});

//Verify that the token is removed from local storage (e.g. after logout)
Then('the token should be removed from local storage', async function () {
  const page = this.page;
  const token = await page.evaluate(() => localStorage.getItem('token'));
  console.log('Token removed from localStorage:', token);
  expect(token).toBeNull();
});
