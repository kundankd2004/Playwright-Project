const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginBtn = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text');
    }

    async login(user, pass) {

        await this.fill(this.username, user);

        await this.fill(this.password, pass);

        await this.click(this.loginBtn);
    }
}

module.exports = LoginPage;