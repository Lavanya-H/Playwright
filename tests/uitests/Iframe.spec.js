const { test, expect } = require('@playwright/test');
//const fs=require('fs')
//const path=require('path')
test.describe('working with iframes', () => {
    test('working with iframe', async ({ page }) => {
    await page.goto("https://jqueryui.com/checkboxradio/")
    const checkbox=await page.frameLocator('//iframe[@class="demo-frame"]').locator('label[for="checkbox-1"]').click()

    });
});