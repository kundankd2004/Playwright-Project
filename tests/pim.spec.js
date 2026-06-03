require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('PIM Module Tests', () => {

    test.beforeEach(async ({ loggedInPage, page }) => {

        await page.getByRole('link', { name: 'PIM' }).click();

        await page.waitForLoadState('domcontentloaded');

    });

    test('PIM Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting PIM Page Visibility Test');

        const pimHeader = page.locator(
            '.oxd-topbar-header-breadcrumb-module'
        ).first();

        await expect(pimHeader).toContainText('PIM');

    });

    test('PIM URL Validation Test @regression', async ({ page }) => {

        Logger.info('Starting PIM URL Validation Test');

        await expect(page).toHaveURL(/pim/, {
            timeout: 15000
        });

    });

    test('Add Employee Button Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Add Employee Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'Add Employee' })
        ).toBeVisible();

    });

    test('Employee List Button Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Employee List Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'Employee List' })
        ).toBeVisible();

    });

    test('Reports Button Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Reports Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'Reports' })
        ).toBeVisible();

    });

    test('PIM Search Box Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting PIM Search Box Visibility Test');

        const searchBox = page.locator(
            'input[placeholder="Type for hints..."]'
        ).first();

        await expect(searchBox).toBeVisible();

    });

    test('PIM Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting PIM Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        const pimHeader = page.locator(
            '.oxd-topbar-header-breadcrumb-module'
        ).first();

        await expect(pimHeader).toContainText('PIM');

    });

    test('PIM Header Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting PIM Header Visibility Test');

        await expect(
            page.locator('.oxd-topbar-header')
        ).toBeVisible();

    });

    test('PIM Sidebar Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting PIM Sidebar Visibility Test');

        await expect(
            page.locator('.oxd-sidepanel')
        ).toBeVisible();

    });

});