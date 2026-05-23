require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Edit Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await pimPage.clickPIMMenu();

    await page.locator(
        '(//i[@class="oxd-icon bi-pencil-fill"])[1]'
    ).click();

    await page.locator(
        '(//input[@class="oxd-input oxd-input--active"])[2]'
    ).fill('UpdatedName');

    await pimPage.clickSaveButton();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});