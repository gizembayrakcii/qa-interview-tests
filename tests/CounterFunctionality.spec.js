const { test, expect } = require('@playwright/test');

const randomNumber = Math.floor(Math.random() * (100)) + 1;

test.describe('Counter Functionality', () => {

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('input[id="email-input"]', 'test@maddox123.ai');
    await page.fill('input[id="password-input"]', 'supersecure');
    await page.click('button[type="submit"]');
    await expect(page.locator('h2')).toHaveText('Counter');
});

test('Increase counter', async ({ page }) => {
    
    await page.goto('http://localhost:3000');

    let numberOfClick = 0;
    
    for(let i = 0; i<randomNumber; i++)
    {
        await page.click('button:text("+")');
        numberOfClick ++;
    }

    console.log(await page.locator('p').textContent());
    await expect(page.locator('p')).toHaveText(numberOfClick.toString()); // Check page header

});


test('Reset counter', async ({ page }) => 
{
    for(let i = 0; i<randomNumber; i++)
    {
            await page.click('button:text("+")');
    }

    console.log('P elements text value before clicking reset button ', await page.locator('p').textContent());

    await page.click('button:text("Reset")');

    await expect(page.locator('p')).toHaveText('0'); // Check page header
});



test('Decrease counter', async ({ page }) => {

    await page.goto('http://localhost:3000');

    let numberOfClick = 0;
    
    for(let i = 0; i<randomNumber; i++)
    {
        await page.click('button:text("-")');
        numberOfClick --;
    }

    console.log(await page.locator('p').textContent());
    await expect(page.locator('p')).toHaveText(numberOfClick.toString()); // Check page header

});

});
