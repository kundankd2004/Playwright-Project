require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Search Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Search Employee Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toBeVisible();

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('KunDan');

    await pimPage.verifyEmployeeTableVisible();

});

test('Employee Search Field Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Employee Search Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toBeVisible();

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await expect(
        pimPage.employeeSearchInput
    ).toBeVisible();

});

test('Search Button Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Search Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toBeVisible();

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await expect(
        pimPage.searchButton
    ).toBeVisible();

});

test('Employee List URL Validation Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Employee List URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toBeVisible();

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await expect(page).toHaveURL(/viewEmployeeList/);

});

test('Employee Table Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Employee Table Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toBeVisible();

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await expect(
        pimPage.employeeTable
    ).toBeVisible();

});