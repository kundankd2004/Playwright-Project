require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const AdminPage = require('../pages/AdminPage');

const Logger = require('../utils/logger');

test('Admin Search User Test @smoke', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Search User Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForURL(/dashboard/, {
        timeout: 15000
    });

    await adminPage.clickAdminMenu();

    await adminPage.searchUsername('Admin');

    await adminPage.clickSearchButton();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});

test('Admin Reset Search Test @sanity', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Reset Search Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForURL(/dashboard/, {
        timeout: 15000
    });

    await adminPage.clickAdminMenu();

    await adminPage.searchUsername('Admin');

    await adminPage.clickResetButton();

    await expect(
        page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    ).toHaveValue('');

});