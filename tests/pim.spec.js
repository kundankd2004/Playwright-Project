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

    await page.waitForTimeout(3000);

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

    await page.waitForTimeout(3000);

    await pimPage.clickPIMMenu();

    await pimPage.searchEmployee('Linda');

    await pimPage.clickResetButton();

    await expect(
        page.locator('(//input[@placeholder="Type for hints..."])[1]')
    ).not.toHaveValue('Linda');

});

test('PIM Page Visibility Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Page Visibility Test');

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

test('PIM URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM URL Validation Test');

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

test('PIM Employee Search Result Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Employee Search Result Visibility Test');

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

    const table = page.locator('.oxd-table');

    await expect(table).toBeVisible();

});

test('PIM Search Empty Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Empty Search Test');

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

    await pimPage.clickSearchButton();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});

test('PIM Table Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting PIM Table Visibility Test');

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

    const table = page.locator('.oxd-table');

    await expect(table).toBeVisible();

});