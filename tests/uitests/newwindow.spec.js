import { test, expect } from '@playwright/test';
test.describe('working with new window', async () => {
    test('working with alerts - simple alert', async ({ page }) => {
        await page.waitForTimeout(5000)
        await page.goto("https://the-internet.herokuapp.com/windows")
        await page.locator('//div[@class="example"]/a').click()
        const newPagePromise = page.waitForEvent('popup')
        const newPage = await newPagePromise
        await newPage.waitForLoadState()
        await expect(newPage.locator('.example>h3')).toHaveText('New Window')
        const textvalue = await newPage.locator('.example>h3').textContent()
        console.log("text on page", textvalue)
    })
})
