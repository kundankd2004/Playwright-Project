require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Add Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Test');

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

    await pimPage.clickAddEmployee();

    await pimPage.enterFirstName('KunDan');

    await pimPage.enterLastName('Raj');

    await pimPage.clickSaveButton();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});

test('Add Employee Page Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Page Visibility Test');

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

    await pimPage.clickAddEmployee();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('PIM');

});

test('Add Employee First Name Field Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting First Name Field Test');

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

    await pimPage.clickAddEmployee();

    const firstName = page.locator('input[name="firstName"]');

    await expect(firstName).toBeVisible();

});

test('Add Employee Last Name Field Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Last Name Field Test');

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

    await pimPage.clickAddEmployee();

    const lastName = page.locator('input[name="lastName"]');

    await expect(lastName).toBeVisible();

});

test('Add Employee Save Button Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Save Button Visibility Test');

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

    await pimPage.clickAddEmployee();

    const saveButton = page.getByRole('button', { name: 'Save' });

    await expect(saveButton).toBeVisible();

});

test('Add Employee URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee URL Validation Test');

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

    await pimPage.clickAddEmployee();

    await expect(page).toHaveURL(/addEmployee/);

});

test('Add Employee Refresh Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Refresh Test');

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

    await pimPage.clickAddEmployee();

    await page.reload();

    await expect(
        page.locator('input[name="firstName"]')
    ).toBeVisible();

});