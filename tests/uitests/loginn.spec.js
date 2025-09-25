import { test, expect } from "@playwright/test"
import { loginPage } from "../../pageobject/login.po";

let page,
  login;

test.describe("valid", async () => {

  test.beforeEach(async ({ browser }) => {

    page = await browser.newPage()
    login = new loginPage(page)
    await login.navigate()

  })

  test("login with valid creds", async () => {
    await login.loginwithcreds("Admin", "admin123")
    await login.success()

  })
  test("login with invalid creds", async () => {
    await login.loginwithcreds("Adminn", "admin1234")
    await login.errormsg()

  })
  test("login with valid user name creds", async () => {
    await login.loginwithcreds("Admin", "admin1234")
    await login.errormsg()

  })
  test("login with invalid password creds", async () => {
    await login.loginwithcreds("Admin", "admin1234")
    await login.errormsg()

  })

})