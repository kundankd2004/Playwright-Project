require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Leave Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Page Visibility Test');

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

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    const leaveHeader = page.getByRole('heading', {
        name: 'Leave'
    }).first();

    await expect(leaveHeader).toBeVisible();

});

test('Leave URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Leave URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    await expect(page).toHaveURL(/leave/, {
        timeout: 15000
    });

});

test('Assign Leave Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Assign Leave Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    const assignLeaveButton = page.getByRole('link', {
        name: 'Assign Leave'
    });

    await expect(assignLeaveButton).toBeVisible();

});

test('Leave List Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Leave List Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    const leaveListButton = page.getByRole('link', {
        name: 'Leave List'
    });

    await expect(leaveListButton).toBeVisible();

});

test('My Leave Button Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting My Leave Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    const myLeaveButton = page.getByRole('link', {
        name: 'My Leave'
    });

    await expect(myLeaveButton).toBeVisible();

});

test('Leave Refresh Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Refresh Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    await page.waitForLoadState('networkidle');

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    const leaveHeader = page.getByRole('heading', {
        name: 'Leave'
    }).first();

    await expect(leaveHeader).toBeVisible();

});

test('Leave Header Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Header Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', {
        name: 'Leave'
    }).click();

    const leaveHeader = page.locator('.oxd-topbar-header');

    await expect(leaveHeader).toBeVisible();

});

test('Leave Sidebar Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Sidebar Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
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