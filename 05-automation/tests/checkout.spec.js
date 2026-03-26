const { test, expect } = require('@playwright/test');

test('user can complete checkout process', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Agregar producto
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Ir al carrito
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);

  // Checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one/);

  // Completar formulario
  await page.locator('[data-test="firstName"]').fill('Natanael');
  await page.locator('[data-test="lastName"]').fill('Alderete');
  await page.locator('[data-test="postalCode"]').fill('1663');

  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL(/checkout-step-two/);

  // Finalizar compra
  await page.locator('[data-test="finish"]').click();

  // Validar mensaje final
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});