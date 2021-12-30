const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/index.html
  await page.goto('https://www.demoblaze.com/index.html');
  // Click text=Nokia lumia 1520
  await page.click('text=Nokia lumia 1520');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2#');
  // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click text=Nokia lumia 1520820Delete >> img
  await page.click('text=Nokia lumia 1520820Delete >> img');
});