require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Dashboard Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Page Visibility Test');

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

    await page.waitForLoadState('networkidle');

    const dashboardHeader = page.locator(
        '.oxd-topbar-header-breadcrumb-module'
    ).first();

    await expect(dashboardHeader).toContainText('Dashboard');

});

test('Dashboard URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard URL Validation Test');

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

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(/dashboard/, {
        timeout: 15000
    });

});

test('Dashboard Widgets Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Widgets Visibility Test');

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

    await page.waitForLoadState('networkidle');

    const widgets = page.locator(
        '.orangehrm-dashboard-widget'
    );

    await expect(widgets.first()).toBeVisible();

});

test('Quick Launch Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Quick Launch Visibility Test');

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

    await page.waitForLoadState('networkidle');

    const quickLaunch = page.locator(
        '.orangehrm-dashboard-widget'
    ).first();

    await expect(quickLaunch).toBeVisible();

});

test('Dashboard Search Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Search Visibility Test');

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

    await page.waitForLoadState('networkidle');

    const searchBox = page.locator(
        'input[placeholder="Search"]'
    );

    await expect(searchBox).toBeVisible();

});

test('Dashboard Menu Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Menu Visibility Test');

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

    await page.waitForLoadState('networkidle');

    const sideMenu = page.locator('.oxd-sidepanel');

    await expect(sideMenu).toBeVisible();

});

test('Dashboard Refresh Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Refresh Test');

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

    await page.waitForLoadState('networkidle');

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    const dashboardHeader = page.locator(
        '.oxd-topbar-header-breadcrumb-module'
    ).first();

    await expect(dashboardHeader).toContainText('Dashboard');

});

test('Dashboard Time Widget Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Time Widget Test');

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

    await page.waitForLoadState('networkidle');

    const timeWidget = page.locator(
        '.orangehrm-attendance-card-profile-record'
    );

    await expect(timeWidget).toBeVisible();

});

test('Dashboard My Actions Widget Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard My Actions Widget Test');

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

    await page.waitForLoadState('networkidle');

    const myActions = page.locator(
        '.orangehrm-todo-list'
    );

    await expect(myActions).toBeVisible();

});

test('Dashboard Buzz Widget Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Buzz Widget Test');

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

    await page.waitForLoadState('networkidle');

    const buzzWidget = page.locator('.orangehrm-dashboard-widget')
    .filter({ hasText: 'Buzz' })
    .first();

    await expect(buzzWidget).toBeVisible();

});