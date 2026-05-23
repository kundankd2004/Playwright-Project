class LeavePage {

    constructor(page) {
        this.page = page;
    }

    async clickLeaveMenu() {
        await this.page.locator('//span[text()="Leave"]').click();
    }

}

module.exports = LeavePage;