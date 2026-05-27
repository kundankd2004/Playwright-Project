const { expect } = require('@playwright/test');

class PIMPage {

    constructor(page) {

        this.page = page;

        // Left Menu
        this.pimMenu = page.locator('//span[text()="PIM"]');

        // Add Employee Menu
        this.addEmployeeMenu = page.locator('//a[text()="Add Employee"]');

        // Employee List Menu
        this.employeeListMenu = page.locator('//a[text()="Employee List"]');

        // Form Fields
        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        // Save Button
        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        // Search Employee
        this.employeeSearchInput = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        // Toast
        this.successToast = page.locator('.oxd-toast');

        // Table
        this.employeeTable = page.locator('.oxd-table-card');

    }

    async clickPIMMenu() {

        await this.pimMenu.click();

        await this.page.waitForLoadState('networkidle');

    }

    async clickAddEmployee() {

        await this.addEmployeeMenu.click();

        await this.page.waitForLoadState('networkidle');

    }

    async clickEmployeeList() {

        await this.employeeListMenu.click();

        await this.page.waitForLoadState('networkidle');

    }

    async enterFirstName(firstName) {

        await this.firstNameInput.fill(firstName);

    }

    async enterMiddleName(middleName) {

        await this.middleNameInput.fill(middleName);

    }

    async enterLastName(lastName) {

        await this.lastNameInput.fill(lastName);

    }

    async clickSaveButton() {

        await this.saveButton.click();

    }

    async addEmployee(firstName, middleName, lastName) {

        await this.enterFirstName(firstName);

        await this.enterMiddleName(middleName);

        await this.enterLastName(lastName);

        await this.clickSaveButton();

        await this.page.waitForLoadState('networkidle');

    }

    async searchEmployee(employeeName) {

        await this.employeeSearchInput.clear();

        await this.employeeSearchInput.fill(employeeName);

        await this.page.waitForTimeout(2000);

        await this.searchButton.click();

        await this.page.waitForLoadState('networkidle');

        await this.page.waitForTimeout(3000);

    }

    async verifyEmployeeTableVisible() {

        await this.page.waitForLoadState('networkidle');

        await this.page.waitForTimeout(3000);

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 15000
        });

    }

}

module.exports = PIMPage;