 const {test , expect} = require ('@playwright/test');

 test('user sees an empty cart when no products were added' , async ({page}) =>{
    // 1. Open application
            await page.goto('https://www.saucedemo.com/');

    // 2. Setup / preconditions
        // login -> el usuario necesita estar logeado para acceder al carrito
            await page.locator('[data-test="username"]').fill('standard_user');
            await page.locator('[data-test="password"]').fill('secret_sauce');
            await page.locator('[data-test="login-button"]').click();

    // 3. Main action
        //situarnos en carrito de compras
            await page.locator('.shopping_cart_link').click();
        // intentar la compra sin productos agregados
            await expect(page).toHaveURL(/cart/);

            await page.locator('[data-test="checkout"]').click();

    // 4. assertions 
            await expect(page).toHaveURL(/checkout-step-one/);

});
 
