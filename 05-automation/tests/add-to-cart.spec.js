const { test, expect } = require('@playwright/test');

test('user can add a product to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verificar que estamos en productos
  await expect(page).toHaveURL(/inventory/);

  // Agregar producto al carrito
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verificar badge del carrito
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toBeVisible();
  await expect(cartBadge).toHaveText('1');
});