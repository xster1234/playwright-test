const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.norwegian.no/
  await page.goto('https://www.norwegian.no/');

  // Click text=Godta alle >> nth=1
  await page.locator('text=Godta alle').nth(1).click();

  // Click text=Forretningsreiser >> nth=1
  await page.locator('text=Forretningsreiser').nth(1).click();
  await page.waitForURL('https://www.norwegian.no/forretningsreiser/');

  // Click text=Se fordelene og inngå avtale
  await page.locator('text=Se fordelene og inngå avtale').click();
  await page.waitForURL('https://www.norwegian.no/forretningsreiser/bedriftsavtale/');

  // Click text=Våre billettyper
  await page.locator('text=Våre billettyper').click();
  await page.waitForURL('https://www.norwegian.no/booking/bestillingsinformasjon/billettyper/');

  // Click text=Søk Logg inn >> a >> nth=2
  await page.locator('text=Søk Logg inn >> a').nth(2).click();
  await page.waitForURL('https://www.norwegian.no/');

  // ---------------------
  await context.close();
  await browser.close();
})();