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

        // Employee Table
        this.employeeTable = page.locator('.oxd-table-body');

    }

    async clickPIMMenu() {

        await expect(this.pimMenu).toBeVisible({
            timeout: 30000
        });

        await this.pimMenu.click();

        await this.page.waitForTimeout(3000);

    }

    async clickAddEmployee() {

        await expect(this.addEmployeeMenu).toBeVisible({
            timeout: 30000
        });

        await this.addEmployeeMenu.click();

        await this.page.waitForTimeout(3000);

    }

    async clickEmployeeList() {

        await expect(this.employeeListMenu).toBeVisible({
            timeout: 30000
        });

        await this.employeeListMenu.click();

        await this.page.waitForTimeout(3000);

    }

    async enterFirstName(firstName) {

        await expect(this.firstNameInput).toBeVisible({
            timeout: 30000
        });

        await this.firstNameInput.fill(firstName);

    }

    async enterMiddleName(middleName) {

        await expect(this.middleNameInput).toBeVisible({
            timeout: 30000
        });

        await this.middleNameInput.fill(middleName);

    }

    async enterLastName(lastName) {

        await expect(this.lastNameInput).toBeVisible({
            timeout: 30000
        });

        await this.lastNameInput.fill(lastName);

    }

    async clickSaveButton() {

        await expect(this.saveButton).toBeVisible({
            timeout: 30000
        });

        await this.saveButton.click();

        await this.page.waitForTimeout(5000);

    }

    async addEmployee(firstName, middleName, lastName) {

        await this.enterFirstName(firstName);

        await this.enterMiddleName(middleName);

        await this.enterLastName(lastName);

        await this.clickSaveButton();

    }

    async searchEmployee(employeeName) {

        await expect(this.employeeSearchInput).toBeVisible({
            timeout: 30000
        });

        await this.employeeSearchInput.clear();

        await this.employeeSearchInput.fill(employeeName);

        await this.page.waitForTimeout(2000);

        await expect(this.searchButton).toBeVisible({
            timeout: 30000
        });

        await this.searchButton.click();

        await this.page.waitForTimeout(5000);

    }

    async verifyEmployeeTableVisible() {

        await expect(this.employeeTable).toBeVisible({
            timeout: 30000
        });

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = PIMPage;