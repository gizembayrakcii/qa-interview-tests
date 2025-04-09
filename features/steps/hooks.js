const { Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

//This file sets up Playwright browser automation for Cucumber scenarios.

//CustomWorld stores the browser, context, and page for use in test steps.
class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.context = null;
  }
}

setWorldConstructor(CustomWorld);

//Before and After hooks to open and close the browser automatically.
Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
