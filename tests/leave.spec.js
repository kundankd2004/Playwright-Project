require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Leave Module Tests', () => {

    test.beforeEach(async ({ loggedInPage, page }) => {

        await page.getByRole('link', { name: 'Leave' }).click();

        await page.waitForLoadState('domcontentloaded');

    });

    test('Leave Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Leave Page Visibility Test');

        const leaveHeader = page.getByRole('heading', {
            name: 'Leave'
        }).first();

        await expect(leaveHeader).toBeVisible();

    });

    test('Leave URL Validation Test @regression', async ({ page }) => {

        Logger.info('Starting Leave URL Validation Test');

        await expect(page).toHaveURL(/leave/, {
            timeout: 15000
        });

    });

    test('Assign Leave Button Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Assign Leave Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'Assign Leave' })
        ).toBeVisible();

    });

    test('Leave List Button Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Leave List Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'Leave List' })
        ).toBeVisible();

    });

    test('My Leave Button Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting My Leave Button Visibility Test');

        await expect(
            page.getByRole('link', { name: 'My Leave' })
        ).toBeVisible();

    });

    test('Leave Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting Leave Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        const leaveHeader = page.getByRole('heading', {
            name: 'Leave'
        }).first();

        await expect(leaveHeader).toBeVisible();

    });

    test('Leave Header Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Leave Header Visibility Test');

        await expect(
            page.locator('.oxd-topbar-header')
        ).toBeVisible();

    });

    test('Leave Sidebar Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Leave Sidebar Visibility Test');

        await expect(
            page.locator('.oxd-sidepanel')
        ).toBeVisible();

    });

});