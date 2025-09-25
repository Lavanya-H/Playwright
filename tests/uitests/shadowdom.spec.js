import{ test, expect } from '@playwright/test';

test('working with Shodow DOM',async ({page})=>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator("#input").fill('maths')
    await page.keyboard.press('Enter')
    //await page.waitForTimeout(4000)
    // await page.reload()
    // await page.keyboard.press("F5")
})