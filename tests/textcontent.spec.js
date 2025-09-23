import { test, expect } from '@playwright/test';

test('Verify Login with Valid credentials', async ({ page }) => {

    await page.goto('https://www.flipkart.com/')
   // await expect(page.locator("//span[text()='Mobiles & Tablets']")).toHaveText("Mobiles & Tablets")
//    page.locator('//span[text()="Fashion"]').hover()
//    const textvalue = await page.locator(`//a[text()="Men's T-Shirts"]`).textContent({force : true})
//    console.log(textvalue)
//   page.locator('//span[text()="Fashion"]').hover()
   const value = await page.locator(`//div[@id="container"]/../div[5]/div`).allTextContents()
   console.log(value)
})

//textcontent:get the text and save it to some variable 
//alltextcontent:get the texts

