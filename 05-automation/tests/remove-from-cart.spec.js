const { test, expect } = require('@playwright/test');

test('user can remove a product from the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Agregar producto
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verificar badge en carrito
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toBeVisible();
  await expect(cartBadge).toHaveText('1');

  // Quitar producto
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  // Verificar que el badge desaparece
  await expect(cartBadge).toHaveCount(0);
});