require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Leave Page Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Page Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(5000);

    await page.locator('//span[text()="Leave"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Leave');

});