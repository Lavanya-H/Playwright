
import { test } from '@playwright/test';
import { loginPage } from "../../pageobject/login.po";
import { addemployeepage } from "../../pageobject/admin.po";


test.describe("verify login functionality", async () => {

    let page;
    let login;
    let addemployee;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        login = new loginPage(page);
        addemployee = new addemployeepage(page);
        await login.navigate();
        await login.loginwithcreds("Admin", "admin123");
        await login.success();
        await addemployee.navigateToPIM();
        await addemployee.navigateToaddemployee();
    })

    test("verify add employee with valid data", async () => {
        await addemployee.addEmployee("laali", "lavi");
        await addemployee.verifySuccessMsg();
    })

    test("verify add employee with invalid data", async () => {
        await addemployee.addEmployee("", "");
        await addemployee.verifyError();
    })

})
