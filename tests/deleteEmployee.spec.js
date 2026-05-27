require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Delete Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.searchEmployee('Updated');

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(3000);

    const deleteButton = page
        .locator('.oxd-icon.bi-trash')
        .first();

    await expect(deleteButton).toBeVisible();

    await deleteButton.click();

    const confirmDeleteButton = page.getByRole('button', {
        name: 'Yes, Delete'
    });

    await expect(confirmDeleteButton).toBeVisible();

    await confirmDeleteButton.click();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});

test('Delete Employee Button Visibility Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Button Visibility Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.searchEmployee('Updated');

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(3000);

    const deleteButton = page
        .locator('.oxd-icon.bi-trash')
        .first();

    await expect(deleteButton).toBeVisible();

});

test('Delete Employee Confirmation Popup Test @sanity', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Confirmation Popup Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.searchEmployee('Updated');

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(3000);

    const deleteButton = page
        .locator('.oxd-icon.bi-trash')
        .first();

    await expect(deleteButton).toBeVisible();

    await deleteButton.click();

    await expect(
        page.locator('.oxd-dialog-container-default')
    ).toBeVisible();

});

test('Delete Employee Cancel Button Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee Cancel Button Test');

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

    await page.waitForLoadState('networkidle');

    await pimPage.searchEmployee('Updated');

    await page.waitForLoadState('networkidle');

    await page.waitForTimeout(3000);

    const deleteButton = page
        .locator('.oxd-icon.bi-trash')
        .first();

    await expect(deleteButton).toBeVisible();

    await deleteButton.click();

    const cancelButton = page.getByRole('button', {
        name: 'No, Cancel'
    });

    await expect(cancelButton).toBeVisible();

});

test('Delete Employee URL Validation Test @smoke', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Delete Employee URL Validation Test');

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

    await expect(page).toHaveURL(/viewEmployeeList/);

});