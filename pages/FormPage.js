const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class FormPage extends BasePage {

    constructor(page) {

        super(page);

        // Login Form Fields (OrangeHRM login page)
        this.usernameInput = page.locator('input[name="username"]');

        this.passwordInput = page.locator('input[name="password"]');

        this.loginButton = page.locator('button[type="submit"]');

        // Validation Error Messages
        this.validationErrors = page.locator(
            '.oxd-input-field-error-message'
        );

        // Forgot Password Link
        this.forgotPasswordLink = page.locator(
            '.orangehrm-login-forgot-header'
        );

        // PIM Add Employee Form Fields
        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        }).first();

        // Toast Notification
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async submitLoginForm(username, password) {

        await expect(this.usernameInput).toBeVisible({
            timeout: 30000
        });

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }

    async submitEmptyLoginForm() {

        await expect(this.loginButton).toBeVisible({
            timeout: 30000
        });

        await this.loginButton.click();

    }

    async verifyValidationErrors() {

        await expect(this.validationErrors.first()).toBeVisible({
            timeout: 10000
        });

    }

    async submitAddEmployeeForm(firstName, middleName, lastName) {

        await expect(this.firstNameInput).toBeVisible({
            timeout: 30000
        });

        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.fill(lastName);

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = FormPage;