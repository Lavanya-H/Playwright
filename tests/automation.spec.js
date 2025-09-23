import { test, expect } from '@playwright/test';
test.describe('working with alerts', async () => {
test('working with check box', async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    //const checkboxes = ["#checkBoxOption1","#checkBoxOption2","#checkBoxOption3"]
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();

    for (let i = 0; i < count; i++) {
        const checkbox = checkboxes.nth(i);
        const isChecked = await checkbox.isChecked();
        if (!isChecked) {
            await checkbox.check({ force: true });
        }
    }
})
test('working with dropdown', async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('//input[@value="radio1"]').check()
    await expect(page.locator('//input[@value="radio1"]')).toBeChecked()

    await page.getByPlaceholder("Type to Select Countries").fill("reun")
    await page.locator('//div[text()="Reunion"]').hover
    await page.locator('//div[text()="Reunion"]').click({ force: true })

    await page.locator('select[id="dropdown-class-example"]').selectOption("Option2")
    await expect(page.locator('select[id="dropdown-class-example"]')).toHaveAttribute('value', 'Option2')

})
//alerts
test('prompt alert', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await page.locator("#name").fill("lavanya");
    await page.waitForTimeout(5000)

    // Set up the dialog handler *before* the alert is triggered
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Hello lavanya, share this practice page and share your knowledge');
        await dialog.accept();
    });

    
});

})
