const { test, expect } = require('@playwright/test');

test.describe('Login Functionality', () => {
    test('Successful Login', async ({ page }) => {
        // Go to login page
        await page.goto('http://localhost:3000/login');
        
    
        // Fill the inputs with mail and password
        await page.fill('input[id="email-input"]', 'test@maddox123.ai'); //Correct mail address
        await page.fill('input[id="password-input"]', 'supersecure'); // Correct password
        
    
        // Click the button
        await page.click('button[type="submit"]');
       
    
        // Check to go to home page 
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page.locator('h1')).toHaveText('Home'); // Check page header
    });
    

    test('Unsuccessful Login', async ({ page }) => {

        await page.goto('http://localhost:3000/login');

        await page.fill('input[id="email-input"]', 'test@maddox123.ai'); // Yanlış kullanıcı adı
        await page.fill('input[id="password-input"]', 'wrongpassword'); // Yanlış parola


        await page.click('button[type="submit"]');

        // Hala giriş sayfasında kalıyor mu kontrol et
        await expect(page).toHaveURL('http://localhost:3000/login');
        // await expect(page.locator('.error-message')).toHaveText('Invalid username or password'); // Hata mesajını kontrol et
    });


    test('Successful Login Logout', async ({ page }) => {
        // Go to login page
        await page.goto('http://localhost:3000/login');

        // Fill the inputs with mail and password
        await page.fill('input[id="email-input"]', 'test@maddox123.ai'); //Correct mail address
        await page.fill('input[id="password-input"]', 'supersecure'); // Correct password
    
        // Click the button
        await page.click('button[type="submit"]');

        var token = await page.evaluate(() => localStorage.getItem('token'))
        console.log(token)
        expect(token).not.toBeNull(); // Jest assertion'ı

        await page.click('button:text("Logout")');
        token = await page.evaluate(() => localStorage.getItem('token'))
        console.log(token)
        expect(token).toBeNull(); // Jest assertion'ı
    });
});














