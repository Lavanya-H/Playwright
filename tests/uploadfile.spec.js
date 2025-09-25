import { test, expect } from '@playwright/test';
test.describe('working with uploadfile', async () => {
    test('working with uploadfile', async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles("C:/Users/chara/Downloads/lavi.jpg")
    await page.locator('#file-submit').click()
    await expect(page.locator('#uploaded-files')).toHaveText('lavi.jpg')
    await expect(page.locator('//div[@class="example"]/h3')).toBeVisible('File Uploaded!')
    


    })
})