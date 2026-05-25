class LeavePage {

    constructor(page) {

        this.page = page;

        this.leaveMenu = page.getByRole(
            'link',
            { name: 'Leave' }
        );

        this.leaveHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        this.sidebar = page.locator(
            '.oxd-sidepanel'
        );

        this.topHeader = page.locator(
            '.oxd-topbar-header-breadcrumb'
        );

        this.quickActionButton = page.getByRole(
            'button'
        );

    }

    async clickLeaveMenu() {

        await this.leaveMenu.waitFor({
            state: 'visible',
            timeout: 30000
        });

        await this.leaveMenu.click();

        await this.leaveHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async refreshPage() {

        await this.page.reload({
            waitUntil: 'domcontentloaded'
        });

    }

}

module.exports = LeavePage;