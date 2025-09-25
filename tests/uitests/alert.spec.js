import { test, expect } from '@playwright/test';
test.describe('working with alerts', async () => {
    test('working with alerts - simple alert', async ({ page }) => {
        await page.waitForTimeout(5000)
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        await page.locator('//button[text()="Click for JS Confirm"]').click()
        await page.waitForTimeout(4000)
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
        });
    })
   
     test('working with alerts - confirm alert', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
      await page.locator('//button[text()="Click for JS Confirm"]').click()
        await page.waitForTimeout(4000)
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            await dialog.dismiss();
        })
})
      test('working with alerts - prompt alert', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
      
        await page.waitForTimeout(4000)
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS prompt');
             await page.waitForTimeout(4000)
            await dialog.accept("MaruthiPrasad PC");
        })
        await page.locator('//button[text()="Click for JS Prompt"]').click()
})
})