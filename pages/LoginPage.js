class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput = page.locator(
            'input[name="username"]'
        );

        this.passwordInput = page.locator(
            'input[name="password"]'
        );

        this.loginBtn = page.locator(
            'button[type="submit"]'
        );

        this.errorMessage = page.locator(
            '.oxd-alert-content-text'
        );

    }

    async login(username, password, waitForDashboard = true) {

        await this.usernameInput.waitFor({
            state: 'visible',
            timeout: 30000
        });

        await this.usernameInput.fill(username || '');

        await this.passwordInput.fill(password || '');

        await this.loginBtn.click();

        if (waitForDashboard) {
            await this.page.waitForURL(
                '**/dashboard/**',
                {
                    timeout: 60000
                }
            );

            await this.page.waitForLoadState(
                'domcontentloaded'
            );
        }

    }

}

module.exports = LoginPage;