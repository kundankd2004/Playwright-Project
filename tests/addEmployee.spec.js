require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Add Employee Tests', () => {

    test.beforeEach(async ({ loggedInPage, pimPage }) => {

        await pimPage.clickPIMMenu();

        await pimPage.clickAddEmployee();

    });

    test('Add Employee Test @regression', async ({ page, pimPage }) => {

        Logger.info('Starting Add Employee Test');

        const uniqueFirstName = `KunDan${Date.now()}`;

        await pimPage.addEmployee(uniqueFirstName, 'K', 'Raj');

        await expect(page.locator('.oxd-toast')).toBeVisible();

    });

    test('Add Employee Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Add Employee Page Visibility Test');

        await expect(
            page.locator('.oxd-topbar-header-breadcrumb-module')
        ).toContainText('PIM');

    });

    test('Add Employee First Name Field Test @sanity', async ({ pimPage }) => {

        Logger.info('Starting First Name Field Test');

        await expect(pimPage.firstNameInput).toBeVisible();

    });

    test('Add Employee Last Name Field Test @regression', async ({ pimPage }) => {

        Logger.info('Starting Last Name Field Test');

        await expect(pimPage.lastNameInput).toBeVisible();

    });

    test('Add Employee Save Button Visibility Test @sanity', async ({ pimPage }) => {

        Logger.info('Starting Save Button Visibility Test');

        await expect(pimPage.saveButton).toBeVisible();

    });

    test('Add Employee URL Validation Test @smoke', async ({ page }) => {

        Logger.info('Starting Add Employee URL Validation Test');

        await expect(page).toHaveURL(/addEmployee/);

    });

    test('Add Employee Refresh Test @regression', async ({ page, pimPage }) => {

        Logger.info('Starting Add Employee Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        await expect(pimPage.firstNameInput).toBeVisible();

    });

});