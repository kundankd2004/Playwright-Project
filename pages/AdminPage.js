class AdminPage {

    constructor(page) {
        this.page = page;
    }

    async clickAdminMenu() {
        await this.page.locator('//span[text()="Admin"]').click();
    }

    async searchUsername(username) {
        await this.page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
            .fill(username);
    }

    async clickSearchButton() {
        await this.page.locator('//button[@type="submit"]').click();
    }

    async clickResetButton() {
        await this.page.locator('//button[text()=" Reset "]').click();
    }
}

module.exports = AdminPage;