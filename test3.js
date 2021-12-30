const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {

  // Go to https://www.demoblaze.com/index.html#carouselExampleIndicators
  await page.goto('https://www.demoblaze.com/index.html#carouselExampleIndicators');

  // Click a:has-text("Contact")
  await page.click('a:has-text("Contact")');

  // Click input[type="text"]
  await page.click('input[type="text"]');

  // Double click input[type="text"]
  await page.dblclick('input[type="text"]');

  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'danylokam@gmail.com');

  // Click #recipient-name
  await page.click('#recipient-name');

  // Fill #recipient-name
  await page.fill('#recipient-name', 'aasdasd');

  // Fill textarea
  await page.fill('textarea', 'a');

  // Click textarea
  await page.click('textarea');

  // Fill textarea
  await page.fill('textarea', 'asdasdasdasdasd');

  // Click text=Send message
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Send message');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#carouselExampleIndicators');

});