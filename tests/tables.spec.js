import { test, expect } from '@playwright/test'

test('working with tables', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator('//table')).toHaveCount(3)
    await expect(page.locator('(//table[@id="product"])[1]/tbody/tr')).toHaveCount(11)
    const rowcount = await page.$$('(//table[@id="product"])[1]/tbody/tr')
    await expect(rowcount.length).toBe(11)
})