const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {

  // Go to https://www.demoblaze.com/index.html
  await page.goto('https://www.demoblaze.com/index.html');

  // Click text=Laptops
  await page.click('text=Laptops');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');

  // Click text=Sony vaio i5
  await page.click('text=Sony vaio i5');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=8');

  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=8#');

  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');

  // Click text=About us × >> [aria-label="Close"]
  await page.click('text=About us × >> [aria-label="Close"]');

});