class AdminPage {

    constructor(page) {

        this.page = page;
    }

    async clickAdminMenu() {

        await this.page.locator(
            '//span[text()="Admin"]'
        ).first().click();

    await this.page.waitForTimeout(3000);
    }

    async searchUsername(username) {

        await this.page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        ).fill(username);
    }

    async clickSearchButton() {

        await this.page.getByRole(
            'button',
            { name: 'Search' }
        ).click();
    }

    async clickResetButton() {

        await this.page.locator(
            '//button[text()=" Reset "]'
        ).click();
    }

    async clickAddButton() {

        await this.page.locator(
            '//button[text()=" Add "]'
        ).click();
    }

    async selectUserRole() {

        await this.page.locator(
            '.oxd-select-text'
        ).first().click();

        await this.page.waitForTimeout(2000);

        await this.page.getByRole(
            'option',
            { name: 'Admin' }
        ).click();
    }

    async enterEmployeeName(employeeName) {

        await this.page.locator(
            '//input[@placeholder="Type for hints..."]'
        ).fill(employeeName);
    }

    async selectStatus() {

        await this.page.locator(
            '.oxd-select-text'
        ).nth(1).click();

        await this.page.waitForTimeout(2000);

        await this.page.getByText(
            'Enabled'
        ).click();
    }

    async enterUsername(username) {

        await this.page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        ).fill(username);
    }

    async enterPassword(password) {

        await this.page.locator(
            '(//input[@type="password"])[1]'
        ).fill(password);
    }

    async confirmPassword(password) {

        await this.page.locator(
            '(//input[@type="password"])[2]'
        ).fill(password);
    }
}

module.exports = AdminPage;