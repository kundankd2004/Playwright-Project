require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const AdminPage = require('../pages/AdminPage');

const Logger = require('../utils/logger');

test('Add Admin User Test @regression', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Add Admin User Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(5000);

    await adminPage.clickAdminMenu();

    await adminPage.clickAddButton();

    await page.waitForTimeout(3000);

    await adminPage.selectUserRole();

    await adminPage.enterEmployeeName('Linda');

    await page.waitForTimeout(3000);

    await adminPage.selectStatus();

    await adminPage.enterUsername('kundanadmin');

    await adminPage.enterPassword('Admin@123');

    await adminPage.confirmPassword('Admin@123');

    await adminPage.clickSearchButton();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});