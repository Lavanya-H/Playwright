import { test, expect } from '@playwright/test';

test('working with screenshot', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')

await page.screenshot({path:'tests/lavi/'+Date.now()+'HomePage.png'})

})

test('working with particular element screenshots', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').screenshot({path:'tests/lavi/'+Date.now()+'HomePage.png'})


})


