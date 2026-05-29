require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Edit Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
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

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('a');

    await page.waitForLoadState('networkidle');

    await pimPage.verifyEmployeeTableVisible();

    await page.locator(
        '.oxd-icon.bi-pencil-fill'
    ).first().click();

    await expect(
        page.locator('input[name="firstName"]')
    ).toBeVisible();

    await page.locator(
    'input[name="firstName"]'
    ).fill(
        `Updated${Date.now()}`
    );

    await pimPage.clickSaveButton();

    const successMessage = page.locator(
        '.oxd-toast-content'
    );

    await successMessage.waitFor({
        state: 'visible',
        timeout: 30000
    });

    await expect(
        successMessage
    ).toBeVisible();

});

test('Edit Employee First Name Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee First Name Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
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

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('a');

    await page.waitForLoadState('networkidle');

    await pimPage.verifyEmployeeTableVisible();

    await page.locator(
        '.oxd-icon.bi-pencil-fill'
    ).first().click();

    const firstNameInput = page.locator(
        'input[name="firstName"]'
    );

    await expect(firstNameInput).toBeVisible();

});

test('Edit Employee Save Button Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Save Button Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
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

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('a');

    await page.waitForLoadState('networkidle');

    await pimPage.verifyEmployeeTableVisible();

    await page.locator(
        '.oxd-icon.bi-pencil-fill'
    ).first().click();

    await expect(
        pimPage.saveButton
    ).toBeVisible();

});

test('Edit Employee URL Validation Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
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

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('a');

    await page.waitForLoadState('networkidle');

    await pimPage.verifyEmployeeTableVisible();

    await page.locator(
        '.oxd-icon.bi-pencil-fill'
    ).first().click();

    await expect(page).toHaveURL(
        /viewPersonalDetails/
    );

});

test('Edit Employee Refresh Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Edit Employee Refresh Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await pimPage.clickPIMMenu();

    await pimPage.clickEmployeeList();

    await pimPage.searchEmployee('a');

    await page.waitForLoadState('networkidle');

    await pimPage.verifyEmployeeTableVisible();

    await page.locator(
        '.oxd-icon.bi-pencil-fill'
    ).first().click();

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    await expect(
        page.locator('input[name="firstName"]')
    ).toBeVisible();

});