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
        await this.page.locator('//button[@type="submit"]').click();
    }

}

module.exports = PIMPage;