require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Admin Module Tests', () => {

    test.beforeEach(async ({ loggedInPage, page }) => {

        await page.getByRole('link', { name: 'Admin' }).click();

        await page.waitForLoadState('domcontentloaded');

    });

    test('Admin Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Admin Page Visibility Test');

        await expect(
            page.getByRole('heading', { name: 'Admin' }).first()
        ).toBeVisible();

    });

    test('Admin URL Validation Test @regression', async ({ page }) => {

        Logger.info('Starting Admin URL Validation Test');

        await expect(page).toHaveURL(/admin/);

    });

    test('Search Username Field Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Search Username Field Visibility Test');

        const usernameField = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        await expect(usernameField).toBeVisible();

    });

    test('Search Button Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Search Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Search' })
        ).toBeVisible();

    });

    test('Reset Button Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Reset Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Reset' })
        ).toBeVisible();

    });

    test('Add User Button Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Add User Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Add' })
        ).toBeVisible();

    });

    test('Admin Table Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Admin Table Visibility Test');

        const table = page.locator('.oxd-table-body');

        await expect(table.first()).toBeVisible();

    });

    test('Admin Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting Admin Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        await expect(
            page.getByRole('heading', { name: 'Admin' }).first()
        ).toBeVisible();

    });

    test('Admin Sidebar Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Admin Sidebar Visibility Test');

        await expect(
            page.locator('.oxd-sidepanel')
        ).toBeVisible();

    });

    test('Admin Header Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Admin Header Visibility Test');

        await expect(
            page.locator('.oxd-topbar-header')
        ).toBeVisible();

    });

});