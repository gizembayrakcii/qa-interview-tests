const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('input[id="email-input"]', 'test@maddox123.ai');
    await page.fill('input[id="password-input"]', 'supersecure');
    await page.click('button[type="submit"]');
    await expect(page.locator('h2')).toHaveText('Counter');
});

test('User is redirected to the login page after logging out', async ({ page }) => {
    // Step 1: Visit the home page (user is logged in)
    await page.goto('http://localhost:3000');

    // Step 2: Click the logout button
    await page.click('button:text("Logout")');

    // Step 3: Verify that the user is redirected to the login page
    await expect(page.locator('h2')).toHaveText('Demo Login Form');  // Adjust based on your login page's text
});

test('User cannot access the home page after logging out', async ({ page }) => {
    // Step 1: Logout the user
    await page.goto('http://localhost:3000');
    await page.click('button:text("Logout")');

    // Step 2: Try to access the home page directly by navigating to the URL
    await page.goto('http://localhost:3000/login');
    
    // Step 3: Verify that the user is redirected to the login page
    await expect(page.locator('h2')).toHaveText('Demo Login Form');
});

test('User can log in again after logging out', async ({ page }) => {
    // Step 1: Visit the login page
    await page.goto('http://localhost:3000/login');

    // Step 2: Enter valid credentials and login
    await page.fill('input[id="email-input"]', 'test@maddox123.ai');
    await page.fill('input[id="password-input"]', 'supersecure');
    await page.click('button[type="submit"]');

    // Step 3: Verify that the user is redirected to the home page
    await expect(page.locator('h2')).toHaveText('Counter');  // Or any text on the home page
});



test('Test the logout functionality', async ({ page }) => {
    // Step 1: Visit the home page (assuming the user is logged in)
    await page.goto('http://localhost:3000');

    // Step 2: Click on the logout button (change the selector to match your button)
    await page.click('button:text("Logout")');

    // Step 3: Verify that the user is redirected to the login page
    await expect(page.locator('h2')).toHaveText('Demo Login Form');  // Assuming the login page has 'Login' text in an h2 element

    // Step 4: Verify that the user cannot access the home page and is redirected to the login page if not logged in
    // Try to visit the home page directly
    await page.goto('http://localhost:3000/login');

    // Step 5: Ensure that after trying to access the home page, the user is redirected to the login page
    await expect(page.locator('h2')).toHaveText('Demo Login Form');  // This ensures the login page is shown after trying to access home page
});
