const { expect } = require('@playwright/test');
const { When, Then } = require('@cucumber/cucumber');

When('the user clicks the increment button a random number of times', async function () {
  const page = this.page;
  this.randomNumber = Math.floor(Math.random() * 100) + 1;
  for (let i = 0; i < this.randomNumber; i++) {
    await page.click('button:text("+")');
  }
});

Then('the counter should reflect the correct number of increments', async function () {
  const page = this.page;
  const counterValue = await page.locator('p').textContent();
  console.log('Counter value after incrementing:', counterValue);
  await expect(counterValue).toBe(this.randomNumber.toString());
});

When('the user clicks the reset button', async function () {
  const page = this.page;
  await page.click('button:text("Reset")');
});

Then('the counter should reset to 0', async function () {
  const page = this.page;
  const counterValue = await page.locator('p').textContent();
  console.log('Counter value after reset:', counterValue);
  await expect(counterValue).toBe('0');
});

When('the user clicks the decrement button a random number of times', async function () {
  const page = this.page;
  this.randomNumber = Math.floor(Math.random() * 100) + 1;
  for (let i = 0; i < this.randomNumber; i++) {
    await page.click('button:text("-")');
  }
});

Then('the counter should reflect the correct number of decrements', async function () {
  const page = this.page;
  const counterValue = await page.locator('p').textContent();
  console.log('Counter value after decrementing:', counterValue);
  await expect(counterValue).toBe((-this.randomNumber).toString());
});
