require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('PIM Search Employee Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Search Employee Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.searchEmployee('Linda');

    await pimPage.clickSearchButton();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});

test('PIM Reset Search Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Reset Search Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.searchEmployee('Linda');

    await pimPage.clickResetButton();

    await expect(
        page.locator('(//input[@placeholder="Type for hints..."])[1]')
    ).not.toHaveValue('Linda');

});