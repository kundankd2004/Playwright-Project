const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class ProfilePage extends BasePage {

    constructor(page) {

        super(page);

        // Profile Dropdown Menu
        this.profileMenu = page.locator(
            '.oxd-userdropdown-tab'
        );

        this.profileMenuName = page.locator(
            '.oxd-userdropdown-name'
        );

        // Dropdown Options
        this.aboutOption = page.getByText('About');

        this.supportOption = page.getByText('Support');

        this.changePasswordOption = page.getByText('Change Password');

        this.logoutOption = page.getByText('Logout');

        // My Info Page Fields
        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.employeeIdInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        // Save Button
        this.saveButton = page.locator(
            '(//button[@type="submit"])[1]'
        );

        // Profile Image
        this.profileImage = page.locator(
            '.orangehrm-edit-employee-image'
        );

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async clickProfileMenu() {

        await expect(this.profileMenu).toBeVisible({
            timeout: 30000
        });

        await this.profileMenu.click();

    }

    async getProfileName() {

        await expect(this.profileMenuName).toBeVisible({
            timeout: 30000
        });

        return await this.profileMenuName.textContent();

    }

    async clickAbout() {

        await this.clickProfileMenu();

        await expect(this.aboutOption).toBeVisible({
            timeout: 10000
        });

        await this.aboutOption.click();

    }

    async clickChangePassword() {

        await this.clickProfileMenu();

        await expect(this.changePasswordOption).toBeVisible({
            timeout: 10000
        });

        await this.changePasswordOption.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async logout() {

        await this.clickProfileMenu();

        await expect(this.logoutOption).toBeVisible({
            timeout: 10000
        });

        await this.logoutOption.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async updateProfile(firstName, middleName, lastName) {

        await expect(this.firstNameInput).toBeVisible({
            timeout: 30000
        });

        await this.firstNameInput.clear();
        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.clear();
        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.clear();
        await this.lastNameInput.fill(lastName);

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

    async verifyProfileImageVisible() {

        await expect(this.profileImage).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = ProfilePage;