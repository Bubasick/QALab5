const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/index.html
  await page.goto('https://www.demoblaze.com/index.html');
  // Click text=PRODUCT STORE Home (current) Contact About us Cart Log in Log out Sign up Previo
  await page.click('text=PRODUCT STORE Home (current) Contact About us Cart Log in Log out Sign up Previo');
  // Click a[role="button"]:has-text("Next")
  await page.click('a[role="button"]:has-text("Next")');
  // Double click a[role="button"]:has-text("Next")
  await page.dblclick('a[role="button"]:has-text("Next")');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#carouselExampleIndicators');
  // Click a[role="button"]:has-text("Next")
  await page.click('a[role="button"]:has-text("Next")');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#carouselExampleIndicators');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  // Click a[role="button"]:has-text("Previous")
  await page.click('a[role="button"]:has-text("Previous")');
  // Click img[alt="Second slide"]
  await page.click('img[alt="Second slide"]');
  // Click img[alt="Second slide"]
  await page.click('img[alt="Second slide"]');
  // Click img[alt="Second slide"]
  await page.click('img[alt="Second slide"]');
  // Click img[alt="Second slide"]
  await page.click('img[alt="Second slide"]');
});