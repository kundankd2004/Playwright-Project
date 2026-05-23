require('../utils/hooks');
const { test, expect } = require('../fixtures/baseFixture');
const dashboardData = require('../test-data/dashboardData.json');
const Logger = require('../utils/logger');

test('Dashboard Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForSelector(
        '.oxd-topbar-header-breadcrumb h6',
        { timeout: 15000 }
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText(
        dashboardData.dashboardTitle,
        { timeout: 15000 }
    );

});