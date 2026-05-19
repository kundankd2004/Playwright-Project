const BasePage = require('./BasePage');

class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        this.dashboardHeader = 'h1';
        this.profileMenu = '#profileMenu';
        this.logoutButton = '#logoutBtn';
    }

    async isDashboardVisible() {

        return await this.isVisible(this.dashboardHeader);
    }

    async clickProfileMenu() {

        await this.click(this.profileMenu);
    }

    async logout() {

        await this.click(this.logoutButton);
    }
}

module.exports = DashboardPage;