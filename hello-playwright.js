const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page on wiki
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/Main_Page');

  // Click div[role="main"] >> text=semi-professional
  await page.locator('div[role="main"] >> text=semi-professional').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/Semi-professional_sports#United_Kingdom_of_Great_Britain_and_Northern_Ireland');

  // Click div[role="main"] >> text=National League
  await page.locator('div[role="main"] >> text=National League').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/National_League_(division)');

  // Click #toc >> text=History
  await page.locator('#toc >> text=History').click();
  await page.waitForURL('https://en.wikipedia.org/wiki/National_League_(division)#History');

  // ---------------------
  await context.close();
  await browser.close();
})();