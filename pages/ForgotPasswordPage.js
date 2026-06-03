const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class ForgotPasswordPage extends BasePage {

    constructor(page) {

        super(page);

        // Forgot Password Link on Login Page
        this.forgotPasswordLink = page.locator(
            '.orangehrm-login-forgot-header'
        );

        // Reset Password Page Header
        this.resetPasswordHeader = page.locator(
            '.orangehrm-forgot-password-title'
        );

        // Username Input
        this.usernameInput = page.locator(
            'input[name="username"]'
        );

        // Reset Password Button
        this.resetButton = page.getByRole('button', {
            name: 'Reset Password'
        });

        // Cancel Button
        this.cancelButton = page.getByRole('button', {
            name: 'Cancel'
        });

        // Success Message
        this.successMessage = page.locator(
            '.orangehrm-forgot-password-title'
        );

        this.successDescription = page.locator(
            '.orangehrm-forgot-password-title + p'
        );

    }

    async clickForgotPasswordLink() {

        await expect(this.forgotPasswordLink).toBeVisible({
            timeout: 30000
        });

        await this.forgotPasswordLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async submitResetRequest(username) {

        await expect(this.usernameInput).toBeVisible({
            timeout: 30000
        });

        await this.usernameInput.fill(username);

        await this.resetButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifyResetSuccess() {

        await expect(this.successMessage).toBeVisible({
            timeout: 30000
        });

    }

    async clickCancel() {

        await expect(this.cancelButton).toBeVisible({
            timeout: 30000
        });

        await this.cancelButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifyResetPageVisible() {

        await expect(this.resetPasswordHeader).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = ForgotPasswordPage;
