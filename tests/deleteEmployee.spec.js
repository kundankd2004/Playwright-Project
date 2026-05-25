require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Delete Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Test');

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
        '(//i[@class="oxd-icon bi-trash"])[1]'
    ).click();

    await page.locator(
        '//button[text()=" Yes, Delete "]'
    ).click();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});

test('Delete Employee Page Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Page Visibility Test');

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

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('PIM');

});

test('Delete Employee Table Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Table Visibility Test');

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

    const table = page.locator('.oxd-table');

    await expect(table).toBeVisible();

});

test('Delete Employee Delete Button Visibility Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Button Visibility Test');

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

    const deleteButton = page.locator(
        '(//i[@class="oxd-icon bi-trash"])[1]'
    );

    await expect(deleteButton).toBeVisible();

});

test('Delete Employee Confirmation Popup Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Confirmation Popup Test');

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
        '(//i[@class="oxd-icon bi-trash"])[1]'
    ).click();

    const popup = page.locator('.orangehrm-modal-footer');

    await expect(popup).toBeVisible();

});

test('Delete Employee URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee URL Validation Test');

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

    await expect(page).toHaveURL(/pim/);

});

test('Delete Employee Refresh Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Refresh Test');

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

    await page.reload();

    await expect(
        page.locator('.oxd-table')
    ).toBeVisible();

});