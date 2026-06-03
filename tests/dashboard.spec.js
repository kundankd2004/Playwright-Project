require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const dashboardData = require('../test-data/dashboardData.json');

const Logger = require('../utils/logger');

test.describe('Dashboard Tests', () => {

    test.beforeEach(async ({ loggedInPage }) => {
        // loggedInPage fixture auto-navigates and logs in
    });

    test('Dashboard Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Dashboard Page Visibility Test');

        const dashboardHeader = page.locator(
            '.oxd-topbar-header-breadcrumb-module'
        ).first();

        await expect(dashboardHeader).toContainText(dashboardData.dashboardTitle);

    });

    test('Dashboard URL Validation Test @regression', async ({ page }) => {

        Logger.info('Starting Dashboard URL Validation Test');

        await expect(page).toHaveURL(/dashboard/, {
            timeout: 15000
        });

    });

    test('Dashboard Widgets Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Dashboard Widgets Visibility Test');

        const widgets = page.locator('.orangehrm-dashboard-widget');

        await expect(widgets.first()).toBeVisible();

    });

    test('Quick Launch Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Quick Launch Visibility Test');

        const quickLaunch = page.locator(
            '.orangehrm-dashboard-widget'
        ).first();

        await expect(quickLaunch).toBeVisible();

    });

    test('Dashboard Search Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Dashboard Search Visibility Test');

        const searchBox = page.locator('input[placeholder="Search"]');

        await expect(searchBox).toBeVisible();

    });

    test('Dashboard Menu Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Dashboard Menu Visibility Test');

        const sideMenu = page.locator('.oxd-sidepanel');

        await expect(sideMenu).toBeVisible();

    });

    test('Dashboard Refresh Test @smoke', async ({ page }) => {

        Logger.info('Starting Dashboard Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        const dashboardHeader = page.locator(
            '.oxd-topbar-header-breadcrumb-module'
        ).first();

        await expect(dashboardHeader).toContainText(dashboardData.dashboardTitle);

    });

    test('Dashboard Time Widget Test @regression', async ({ page }) => {

        Logger.info('Starting Dashboard Time Widget Test');

        const timeWidget = page.locator(
            '.orangehrm-attendance-card-profile-record'
        );

        await expect(timeWidget).toBeVisible();

    });

    test('Dashboard My Actions Widget Test @sanity', async ({ page }) => {

        Logger.info('Starting Dashboard My Actions Widget Test');

        const myActions = page.locator('.orangehrm-todo-list');

        await expect(myActions).toBeVisible();

    });

    test('Dashboard Buzz Widget Test @smoke', async ({ page }) => {

        Logger.info('Starting Dashboard Buzz Widget Test');

        const buzzWidget = page.locator('.orangehrm-dashboard-widget')
            .filter({ hasText: 'Buzz' })
            .first();

        await expect(buzzWidget).toBeVisible();

    });

});