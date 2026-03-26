const { test, expect } = require('@playwright/test');

test('login should fail with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});