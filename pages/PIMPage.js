class PIMPage {

    constructor(page) {

        this.page = page;

        this.pimMenu = page.getByRole(
            'link',
            { name: 'PIM' }
        );

        this.employeeInput = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.getByRole(
            'button',
            { name: 'Search' }
        );

        this.resetButton = page.getByRole(
            'button',
            { name: 'Reset' }
        );

        this.addEmployeeButton = page.getByRole(
            'link',
            { name: 'Add Employee' }
        );

        this.firstNameInput = page.locator(
            'input[name="firstName"]'
        );

        this.lastNameInput = page.locator(
            'input[name="lastName"]'
        );

        this.saveButton = page.getByRole(
            'button',
            { name: 'Save' }
        );
    }

    async clickPIMMenu() {

        await this.pimMenu.click();
    }

    async searchEmployee(employeeName) {

        await this.employeeInput.fill(employeeName);
    }

    async clickSearchButton() {

        await this.searchButton.click();
    }

    async clickResetButton() {

        await this.resetButton.click();
    }

    async clickAddEmployee() {

        await this.addEmployeeButton.click();
    }

    async enterFirstName(firstName) {

        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName) {

        await this.lastNameInput.fill(lastName);
    }

    async clickSaveButton() {

        await this.saveButton.click();
    }

}

module.exports = PIMPage;