require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('My Info Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting My Info Page Visibility Test');

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

    await page.locator('//span[text()="My Info"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('PIM');

});

test('My Info URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting My Info URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    await expect(page).toHaveURL(/viewPersonalDetails/);

});

test('First Name Field Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting First Name Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const firstNameField = page.locator('input[name="firstName"]');

    await expect(firstNameField).toBeVisible();

});

test('Last Name Field Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Last Name Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const lastNameField = page.locator('input[name="lastName"]');

    await expect(lastNameField).toBeVisible();

});

test('Employee ID Field Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Employee ID Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const employeeIdField = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');

    await expect(employeeIdField).toBeVisible();

});

test('Save Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Save Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const saveButton = page.getByRole('button', {
        name: 'Save'
    });

    await expect(saveButton.first()).toBeVisible();

});

test('My Info Refresh Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting My Info Refresh Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    await page.reload();

    await expect(
        page.locator('input[name="firstName"]')
    ).toBeVisible();

});

test('Profile Image Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Profile Image Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const profileImage = page.locator('.employee-image');

    await expect(profileImage).toBeVisible();

});

test('Personal Details Header Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Personal Details Header Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const header = page.locator('.orangehrm-main-title');

    await expect(header).toBeVisible();

});

test('My Info Header Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting My Info Header Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="My Info"]').click();

    const topHeader = page.locator('.oxd-topbar-header');

    await expect(topHeader).toBeVisible();

});