import { test, expect } from '@playwright/test';

test('working with links', async ({ page }) => {
 await page.waitForTimeout(6000)
    await page.goto("https://www.wikipedia.org/")
   // await expect.soft(page.locator("//a")).toHaveCount(371)
    await page .click('//span[text()="Commons"]')
    await expect(page).toHaveURL("https://commons.wikimedia.org/wiki/Main_Page")
    await page.goBack()
    await page.waitForTimeout(5000)
    await page.goForward()
   
})