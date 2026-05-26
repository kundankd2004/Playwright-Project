require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Add Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Test');

    const uniqueFirstName = `KunDan${Date.now()}`;

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await pimPage.addEmployee(
        uniqueFirstName,
        'K',
        'Raj'
    );

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});

test('Add Employee Page Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Page Visibility Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb-module')
    ).toContainText('PIM');

});

test('Add Employee First Name Field Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting First Name Field Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await expect(
        pimPage.firstNameInput
    ).toBeVisible();

});

test('Add Employee Last Name Field Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Last Name Field Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await expect(
        pimPage.lastNameInput
    ).toBeVisible();

});

test('Add Employee Save Button Visibility Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Save Button Visibility Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await expect(
        pimPage.saveButton
    ).toBeVisible();

});

test('Add Employee URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee URL Validation Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/addEmployee/);

});

test('Add Employee Refresh Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Refresh Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await page.waitForLoadState('networkidle');

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    await expect(
        pimPage.firstNameInput
    ).toBeVisible();

});