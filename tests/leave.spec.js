require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const LeavePage = require('../pages/LeavePage');

const Logger = require('../utils/logger');

test('Leave Page Visibility Test @smoke', async ({ page, loginPage }) => {

    const leavePage = new LeavePage(page);

    Logger.info('Starting Leave Page Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await leavePage.clickLeaveMenu();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Leave');

});