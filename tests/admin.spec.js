require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const AdminPage = require('../pages/AdminPage');

const Logger = require('../utils/logger');

test('Admin Search User Test @smoke', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Search User Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

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

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await adminPage.searchUsername('Admin');

    await adminPage.clickResetButton();

    await expect(
        page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    ).toHaveValue('');

});

test('Admin Page Visibility Test @regression', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Page Visibility Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6').first()
    ).toContainText('Admin');

});

test('Admin URL Validation Test @smoke', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin URL Validation Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await expect(page).toHaveURL(/admin/);

});

test('Admin Table Visibility Test @sanity', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Table Visibility Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await page.waitForTimeout(3000);

    const table = page.locator('.oxd-table');

    await expect(table.first()).toBeVisible();

    await expect(table).toBeVisible();

});

test('Admin Empty Search Test @regression', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Empty Search Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await adminPage.clickSearchButton();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});

test('Admin Invalid User Search Test @sanity', async ({ page, loginPage }) => {

    const adminPage = new AdminPage(page);

    Logger.info('Starting Admin Invalid User Search Test');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await adminPage.clickAdminMenu();

    await adminPage.searchUsername('WrongAdmin');

    await adminPage.clickSearchButton();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});