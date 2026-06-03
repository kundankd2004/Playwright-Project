require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Logout Tests', () => {

    test.beforeEach(async ({ loggedInPage }) => {
        // loggedInPage fixture auto-navigates and logs in
    });

    test('Valid Logout Test @smoke @regression', async ({ page }) => {

        Logger.info('Starting Valid Logout Test');

        const userDropdown = page.locator('.oxd-userdropdown-tab').first();

        await expect(userDropdown).toBeVisible();

        await userDropdown.click();

        const logoutButton = page.getByRole('menuitem', {
            name: 'Logout'
        });

        await expect(logoutButton).toBeVisible();

        await logoutButton.click();

        await expect(page).toHaveURL(/login/, {
            timeout: 15000
        });

    });

    test('User Dropdown Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting User Dropdown Visibility Test');

        await expect(
            page.locator('.oxd-userdropdown-tab').first()
        ).toBeVisible();

    });

    test('Logout Option Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Logout Option Visibility Test');

        await page.locator('.oxd-userdropdown-tab').first().click();

        await expect(
            page.getByRole('menuitem', { name: 'Logout' })
        ).toBeVisible();

    });

    test('Profile Option Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Profile Option Visibility Test');

        await page.locator('.oxd-userdropdown-tab').first().click();

        await expect(
            page.getByRole('menuitem', { name: 'About' })
        ).toBeVisible();

    });

    test('Support Option Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Support Option Visibility Test');

        await page.locator('.oxd-userdropdown-tab').first().click();

        await expect(
            page.getByRole('menuitem', { name: 'Support' })
        ).toBeVisible();

    });

    test('Change Password Option Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Change Password Option Visibility Test');

        await page.locator('.oxd-userdropdown-tab').first().click();

        await expect(
            page.getByRole('menuitem', { name: 'Change Password' })
        ).toBeVisible();

    });

    test('Logout Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting Logout Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        await expect(
            page.locator('.oxd-topbar-header-breadcrumb h6')
        ).toContainText('Dashboard');

    });

    test('Logout URL Validation Test @sanity', async ({ page }) => {

        Logger.info('Starting Logout URL Validation Test');

        await expect(page).toHaveURL(/dashboard/, {
            timeout: 15000
        });

    });

    test('Dashboard After Login Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Dashboard After Login Visibility Test');

        await expect(
            page.locator('.oxd-topbar-header-breadcrumb h6')
        ).toContainText('Dashboard');

    });

    test('Sidebar Visibility After Login Test @regression', async ({ page }) => {

        Logger.info('Starting Sidebar Visibility After Login Test');

        await expect(
            page.locator('.oxd-sidepanel')
        ).toBeVisible();

    });

});