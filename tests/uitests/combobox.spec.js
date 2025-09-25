import { test, expect } from '@playwright/test';
test.describe('working with alerts', () => {
    test('working with downloadfile', async ({ page }) => {
        await page.goto("https://www.flipkart.com/")
        await page.locator('//input[@name="q"]').fill("laptop")
        await page.keyboard.press('Enter');

    // Wait for the results to load
    await page.waitForLoadState('networkidle');
        const elements = await page.locator('//span[@class="-niSoj"]');
        if (await elements.count() > 3) {
            await elements.nth(3).hover();
            await elements.nth(3).click();
        } else {
            console.error('Element not found or index out of bounds');
        }
    })
})
