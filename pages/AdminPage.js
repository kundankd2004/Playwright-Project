const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class AdminPage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.adminMenu = page.locator(
            '//span[text()="Admin"]'
        ).first();

        // Top Bar Header
        this.adminHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Sub Menus
        this.userManagementMenu = page.getByRole('link', {
            name: 'User Management'
        });

        this.jobMenu = page.getByRole('link', {
            name: 'Job '
        });

        this.organizationMenu = page.getByRole('link', {
            name: 'Organization'
        });

        this.qualificationsMenu = page.getByRole('link', {
            name: 'Qualifications'
        });

        // Search Fields
        this.usernameSearchInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        this.userRoleDropdown = page.locator(
            '.oxd-select-text'
        ).first();

        this.statusDropdown = page.locator(
            '.oxd-select-text'
        ).nth(1);

        this.employeeNameInput = page.locator(
            '//input[@placeholder="Type for hints..."]'
        );

        // Buttons
        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset'
        });

        this.addButton = page.getByRole('button', {
            name: ' Add '
        });

        // Add User Form Fields
        this.addUserRoleDropdown = page.locator(
            '.oxd-select-text'
        ).first();

        this.addUsernameInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        this.addStatusDropdown = page.locator(
            '.oxd-select-text'
        ).nth(1);

        this.addPasswordInput = page.locator(
            '(//input[@type="password"])[1]'
        );

        this.confirmPasswordInput = page.locator(
            '(//input[@type="password"])[2]'
        );

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        // Table
        this.userTable = page.locator(
            '.oxd-table-card'
        ).first();

        this.tableRows = page.locator(
            '.oxd-table-card'
        );

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

        // Delete Confirmation
        this.deleteButton = page.locator(
            '.oxd-table-cell-actions .oxd-icon-button--danger'
        ).first();

        this.confirmDeleteButton = page.getByRole('button', {
            name: 'Yes, Delete'
        });

    }

    async clickAdminMenu() {

        await expect(this.adminMenu).toBeVisible({
            timeout: 30000
        });

        await this.adminMenu.click();

        await this.adminHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async searchUsername(username) {

        await expect(this.usernameSearchInput).toBeVisible({
            timeout: 30000
        });

        await this.usernameSearchInput.fill(username);

    }

    async clickSearchButton() {

        await expect(this.searchButton).toBeVisible({
            timeout: 30000
        });

        await this.searchButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickResetButton() {

        await expect(this.resetButton).toBeVisible({
            timeout: 30000
        });

        await this.resetButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickAddButton() {

        await expect(this.addButton).toBeVisible({
            timeout: 30000
        });

        await this.addButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async selectUserRole(role) {

        await this.addUserRoleDropdown.click();

        const option = this.page.getByRole('option', {
            name: role || 'Admin'
        });

        await expect(option).toBeVisible({
            timeout: 10000
        });

        await option.click();

    }

    async enterEmployeeName(employeeName) {

        await expect(this.employeeNameInput).toBeVisible({
            timeout: 30000
        });

        await this.employeeNameInput.fill(employeeName);

        // Wait for autocomplete suggestions to appear
        const suggestion = this.page.locator(
            '.oxd-autocomplete-option'
        ).first();

        await expect(suggestion).toBeVisible({
            timeout: 10000
        });

    }

    async selectFirstSuggestion() {

        const suggestion = this.page.locator(
            '.oxd-autocomplete-option'
        ).first();

        await expect(suggestion).toBeVisible({
            timeout: 10000
        });

        await suggestion.click();

    }

    async selectStatus(status) {

        await this.addStatusDropdown.click();

        const option = this.page.getByText(status || 'Enabled');

        await expect(option).toBeVisible({
            timeout: 10000
        });

        await option.click();

    }

    async enterUsername(username) {

        await expect(this.addUsernameInput).toBeVisible({
            timeout: 30000
        });

        await this.addUsernameInput.fill(username);

    }

    async enterPassword(password) {

        await expect(this.addPasswordInput).toBeVisible({
            timeout: 30000
        });

        await this.addPasswordInput.fill(password);

    }

    async confirmPassword(password) {

        await expect(this.confirmPasswordInput).toBeVisible({
            timeout: 30000
        });

        await this.confirmPasswordInput.fill(password);

    }

    async clickSaveButton() {

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

    async verifyUserTableVisible() {

        await expect(this.userTable).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = AdminPage;