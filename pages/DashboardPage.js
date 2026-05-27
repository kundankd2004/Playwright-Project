const BasePage = require('./BasePage');

class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        // Dashboard Header
        this.dashboardHeader = page.getByRole('heading', {
            name: 'Dashboard'
        });

        // Profile Menu
        this.profileMenu = page.locator(
            '.oxd-userdropdown-tab'
        );

        // Logout Button
        this.logoutButton = page.getByText('Logout');

        // Dashboard Widgets
        this.quickLaunchWidget = page
            .locator('.orangehrm-dashboard-widget')
            .filter({ hasText: 'Quick Launch' })
            .first();

        this.buzzWidget = page
            .locator('.orangehrm-dashboard-widget')
            .filter({ hasText: 'Buzz' })
            .first();

    }

    async isDashboardVisible() {

        await this.dashboardHeader.waitFor({
            state: 'visible',
            timeout: 60000
        });

        return await this.dashboardHeader.isVisible();

    }

    async clickProfileMenu() {

        await this.profileMenu.click();

    }

    async logout() {

        await this.clickProfileMenu();

        await this.logoutButton.click();

    }

    async verifyQuickLaunchVisible() {

        await this.quickLaunchWidget.waitFor({
            state: 'visible',
            timeout: 60000
        });

    }

    async verifyBuzzWidgetVisible() {

        await this.buzzWidget.waitFor({
            state: 'visible',
            timeout: 60000
        });

    }

}

module.exports = DashboardPage;