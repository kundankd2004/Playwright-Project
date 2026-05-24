class PIMPage {

    constructor(page) {
        this.page = page;
    }

    async clickPIMMenu() {
        await this.page.locator('//span[text()="PIM"]').click();
    }

    async searchEmployee(employeeName) {
        await this.page
            .locator('(//input[@placeholder="Type for hints..."])[1]')
            .fill(employeeName);
    }

    async clickSearchButton() {
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

    async clickAddEmployee() {
        await this.page.locator('//a[text()="Add Employee"]').click();
    }

    async enterFirstName(firstName) {
        await this.page.locator('input[name="firstName"]').fill(firstName);
    }

    async enterLastName(lastName) {
        await this.page.locator('input[name="lastName"]').fill(lastName);
    }

    async clickSaveButton() {
        await this.page.getByRole('button', { name: 'Save' }).first().click();
    }

    async clickResetButton() {
        await this.page.getByRole('button', { name: 'Reset' }).click();
    }

}

module.exports = PIMPage;