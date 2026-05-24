require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const dashboardData = require('../test-data/dashboardData.json');

const Logger = require('../utils/logger');

test('Dashboard Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Visibility Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb')
    ).toBeVisible();

});