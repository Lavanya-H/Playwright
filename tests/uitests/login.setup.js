import { test as setup, expect } from "@playwright/test"

setup("authenticate", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.locator('button[type="submit"]').click()
    expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await page.context().storageState()//store all cokkies and data
    await page.context().storageState({ path: ".auth/user.json" })//

})