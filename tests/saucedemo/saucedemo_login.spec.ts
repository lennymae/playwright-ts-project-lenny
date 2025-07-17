import { test, expect } from '@playwright/test';
import saucedemo_loginpage from '../../elements/saucedemo/saucedemo_loginpage.json';

test('Login scenario', async ({ page }) => {
  // Go to login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Fill in login form
  await page.fill(saucedemo_loginpage.usernameInput, 'standard_user');
  await page.fill(saucedemo_loginpage.passwordInput, 'secret_sauce');

  // Click login
  await page.click(saucedemo_loginpage.loginButton);

  // Wait for navigation or specific element that confirms login
  await page.waitForURL('https://www.saucedemo.com/v1/inventory.html');
  await expect(page.locator(saucedemo_loginpage.appLogo)).toBeVisible(); // or another confirmation
});
