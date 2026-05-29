require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Time Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Time Page Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb-module').first()
    ).toContainText('Time');

});

test('Time URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Time URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 12000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    await expect(page).toHaveURL(/time/);

});

test('Timesheets Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Timesheets Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const timesheetsButton = page.locator(
        '//span[text()="Timesheets "]'
    );

    await expect(timesheetsButton).toBeVisible();

});

test('Attendance Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Attendance Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const attendanceButton = page.locator(
        '//span[text()="Attendance "]'
    );

    await expect(attendanceButton).toBeVisible();

});

test('Reports Button Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Reports Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const reportsButton = page.locator(
        '//span[text()="Reports "]'
    );

    await expect(reportsButton).toBeVisible();

});

test('Project Info Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Project Info Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const projectInfoButton = page.locator(
        '//span[text()="Project Info "]'
    );

    await expect(projectInfoButton).toBeVisible();

});

test('Time Search Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Time Search Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const searchButton = page.getByRole('button', {
        name: 'View'
    });

    await expect(searchButton.first()).toBeVisible();

});

test('Time Refresh Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Time Refresh Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb-module').first()
    ).toContainText('Time');

});

test('Time Header Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Time Header Visibility Test');

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

    await page.getByRole('link', {
        name: 'Time'
    }).click();

    const header = page.locator('.oxd-topbar-header');

    await expect(header).toBeVisible();

});

test('Time Sidebar Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Time Sidebar Visibility Test');

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

    const sidebar = page.locator('.oxd-sidepanel');

    await expect(sidebar).toBeVisible();

});