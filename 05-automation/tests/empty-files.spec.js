const {test,expect} = require('@playwright/test');

test('login should fail when username and password are empty', async( {page}) => {
//1. Open application
    await page.goto('https://www.saucedemo.com/');
//2. Setup / preconditions
    //click login sin ingresar nada
    await page.locator ('[data-test ="login-button"]').click();
//3. Main action
    //validar mensaje de error
        const errorMessge = page.locator('[data-test="error"]');
//4. Assertions
    await expect(errorMessge).toBeVisible();
    await expect(errorMessge).toContainText('Username is required');
});