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

test('Edit Employee Page Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Page Visibility Test');

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

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('PIM');

});

test('Edit Employee Search Field Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Search Field Test');

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

    const employeeSearch = page.locator(
        '(//input[@placeholder="Type for hints..."])[1]'
    );

    await expect(employeeSearch).toBeVisible();

});

test('Edit Employee Search Button Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Search Button Test');

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

    const searchButton = page.getByRole(
        'button',
        { name: 'Search' }
    );

    await expect(searchButton).toBeVisible();

});

test('Edit Employee Reset Button Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Reset Button Test');

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

    const resetButton = page.getByRole(
        'button',
        { name: 'Reset' }
    );

    await expect(resetButton).toBeVisible();

});

test('Edit Employee URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee URL Validation Test');

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

    await expect(page).toHaveURL(/pim/);

});

test('Edit Employee Refresh Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Refresh Test');

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

    await page.reload();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb')
    ).toBeVisible();

});