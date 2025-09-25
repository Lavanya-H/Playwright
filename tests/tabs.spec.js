import { test, expect } from '@playwright/test';

test('working with tabs', async ({ page }) => {
 
    await page.goto("https://www.flipkart.com/")
    await page.locator('//input[@name="q"]').fill("iphone")
    await page.locator('//input[@name="q"]').press("Enter")
//    const [newTab] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator("//div[text()='Apple iPhone 16 Pro Max (Black Titanium, 256 GB)']").click()
//    ]);
//    await expect(newTab).toHaveURL(/iphone-16-pro-max-black-titanium-256-gb/);
//    const newphone=await newTab.locator('//h1[@class="_6EBuvT"]/span').textContent()
//    console.log(newphone)

     //or other method we can use 

     const newPagePromise =page.waitForEvent('popup')
     const newPage =await newPagePromise
     await newPage.waitForLoadState()
     page.locator("//div[text()='Apple iPhone 16 Pro Max (Black Titanium, 256 GB)']").click()



})


