import { test, expect } from '@playwright/test';+-

// test("Verify Login with Valid Credential", async ({ page }) => {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('input[name="username"]').fill(process.env.ORG_USERNAME);
//     await page.locator('input[type="password"]').fill(process.env.ORG_PASSWORD);
//     await page.locator('button[type="submit"]').click()
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// })
// test("Verify Login with Valid Username and Invalid password", async ({ page }) => {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('input[name="username"]').fill("Admin")
//     await page.locator('input[type="password"]').fill("sadgetrhdfbh")
//     await page.locator('button[type="submit"]').click()
//     await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
// })

// // Removed unused import of loginPage

// test("Verify Login with Valid Credential", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill(process.env.ORG_USERNAME || "Admin");
//     await page.locator('input[type="password"]').fill(process.env.ORG_PASSWORD || "admin123");
//     await page.locator('button[type="submit"]').click();
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
// });

// test("Verify Login with Valid Username and Invalid password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("Admin");
//     await page.locator('input[type="password"]').fill("sadgetrhdfbh");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
// });

// test("Verify Login with Invalid Username and Valid password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("dhfyuigwruf");
//     await page.locator('input[type="password"]').fill("admin123");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
// });

// test("Verify Login with Invalid Username and Invalid password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("hdbfyiwegefuige");
//     await page.locator('input[type="password"]').fill("kahwvdyuqgefig");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
// });

// // Additional tests

// test("Verify Login with empty username and valid password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("");
//     await page.locator('input[type="password"]').fill("admin123");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('span:has-text("Required")')).toBeVisible();
// });

// test("Verify Login with valid username and empty password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("Admin");
//     await page.locator('input[type="password"]').fill("");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('span:has-text("Required")')).toBeVisible();
// });

// test("Verify Login with empty username and empty password", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator('input[name="username"]').fill("");
//     await page.locator('input[type="password"]').fill("");
//     await page.locator('button[type="submit"]').click();
//     await expect(page.locator('span:has-text("Required")')).toBeVisible();
// });

// test("Verify Login page loads correctly", async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await expect(page.locator('input[name="username"]')).toBeVisible();
//     await expect(page.locator('input[type="password"]')).toBeVisible();
//     await expect(page.locator('button[type="submit"]')).toBeVisible();
// });

// import { test, expect } from '@playwright/test';

test("Login with valid credentials", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill(process.env.ORG_USERNAME || "Admin");
    await page.locator('input[type="password"]').fill(process.env.ORG_PASSWORD || "admin123");
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test("Login with valid username and invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("Admin");
    await page.locator('input[type="password"]').fill("sadgetrhdfbh");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
});

test("Login with invalid username and valid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("dhfyuigwruf");
    await page.locator('input[type="password"]').fill("admin123");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
});

test("Login with invalid username and invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("hdbfyiwegefuige");
    await page.locator('input[type="password"]').fill("kahwvdyuqgefig");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p:has-text("Invalid credentials")')).toBeVisible();
});

test("Login with empty username and valid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("");
    await page.locator('input[type="password"]').fill("admin123");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('span:has-text("Required")')).toBeVisible();
});

test("Login with valid username and empty password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("Admin");
    await page.locator('input[type="password"]').fill("");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('span:has-text("Required")')).toBeVisible();
});

test("Login with empty username and empty password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("");
    await page.locator('input[type="password"]').fill("");
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('span:has-text("Required")')).toBeVisible();
});

test("Login page loads correctly", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
});