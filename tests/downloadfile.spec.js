import { test, expect } from '@playwright/test';
test.describe('working with alerts', async () => {
    test('working with downloadfile', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/download")
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[@href="download/test.txt"]').click()
        ]);
        const suggestedFilename = download.suggestedFilename();
        const filepath = 'tests/download/' + suggestedFilename;
        await download.saveAs(filepath);
        expect(fstat.existsSync(filepath)).toBeTruthy()//whether file is download or not
    })
    test('working with multiple files download', async ({ page }) => {
        await page.waitForTimeout(6000)
        await page.goto("https://the-internet.herokuapp.com/download")
        const filenames = ["hagcamp.png", "SomeFile.txt"]
        for (const filename of filenames) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${filename}`).click()

            ]);
            const suggestedFilename = download.suggestedFilename();
            const filepath = 'tests/download/' + suggestedFilename;
            await download.saveAs(filepath);
        }


    })
})
