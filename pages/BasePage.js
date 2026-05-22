class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url, {
            waitUntil: 'load',
            timeout: 60000
        });
    }

    async click(locator) {
        await this.page.click(locator);
    }

    async fill(locator, value) {
        await this.page.fill(locator, value || '');
    }

    async getText(locator) {
        return await this.page.textContent(locator);
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }
}

module.exports = BasePage;