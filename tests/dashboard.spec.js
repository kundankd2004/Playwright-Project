require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const dashboardData = require('../test-data/dashboardData.json');

const Logger = require('../utils/logger');

test('Dashboard Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Visibility Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb')
    ).toBeVisible();

});

test('Dashboard Header Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Header Validation Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Dashboard');

});

test('Dashboard URL Validation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard URL Validation Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/dashboard/);

});

test('Dashboard Sidebar Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Sidebar Visibility Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    const sidebar = page.locator('.oxd-sidepanel');

    await expect(sidebar).toBeVisible();

});

test('Dashboard Refresh Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Refresh Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await page.reload();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb')
    ).toBeVisible();

});

test('Dashboard Quick Launch Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Quick Launch Visibility Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    const quickLaunch = page.locator('.orangehrm-quick-launch');

    await expect(quickLaunch).toBeVisible();

});

test('Dashboard Time At Work Widget Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Time At Work Widget Test');

    await page.goto(process.env.BASE_URL);

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    const widget = page.locator('.orangehrm-attendance-card');

    await expect(widget).toBeVisible();

});