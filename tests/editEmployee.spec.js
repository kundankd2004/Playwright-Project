require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Edit Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await pimPage.clickPIMMenu();

    await pimPage.searchEmployee('Linda');

    await pimPage.clickSearchButton();

    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/pim/);

});