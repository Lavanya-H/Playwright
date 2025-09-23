import{test,expect} from "@playwright/test"

exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page
        this.userinput = page.locator('input[placeholder="Username"]')
        this.passwordinput = page.locator('input[placeholder="Password"]')
        this.btn = page.locator('button[type="submit"]')
        this.succes = page.locator('//p[text()="Time at Work"]')
        this.error = page.locator('//p[text()="Invalid credentials"]')
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async loginwithcreds(username, password) {
        await this.userinput.fill(username)
        await this.passwordinput.fill(password)
        await this.btn.click()
    }
    async success() {
        await expect(this.succes).toBeVisible()
    }
    async errormsg() {
        await expect(this.error).toBeVisible()
    }


}