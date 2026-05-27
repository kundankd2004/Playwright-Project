require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Admin Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Page Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    await expect(
        page.getByRole('heading', {
            name: 'Admin'
        }).first()
    ).toBeVisible();

});

test('Admin URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Admin URL Validation Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    await expect(page).toHaveURL(/admin/);

});

test('Search Username Field Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Search Username Field Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    const usernameField = page.locator(
        '(//input[@class="oxd-input oxd-input--active"])[2]'
    );

    await expect(usernameField).toBeVisible();

});

test('Search Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Search Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    const searchButton = page.getByRole('button', {
        name: 'Search'
    });

    await expect(searchButton).toBeVisible();

});

test('Reset Button Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Reset Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    const resetButton = page.getByRole('button', {
        name: 'Reset'
    });

    await expect(resetButton).toBeVisible();

});

test('Add User Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Add User Button Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    const addButton = page.getByRole('button', {
        name: 'Add'
    });

    await expect(addButton).toBeVisible();

});

test('Admin Table Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Table Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    await page.waitForLoadState('networkidle');

    const table = page.locator('.oxd-table-body');

    await expect(table.first()).toBeVisible();

});

test('Admin Refresh Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Refresh Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    await page.waitForLoadState('networkidle');

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    await expect(
        page.getByRole('heading', {
            name: 'Admin'
        }).first()
    ).toBeVisible();

});

test('Admin Sidebar Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Sidebar Visibility Test');

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

    const sidebar = page.locator('.oxd-sidepanel');

    await expect(sidebar).toBeVisible();

});

test('Admin Header Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Header Visibility Test');

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

    await page.getByRole('link', {
        name: 'Admin'
    }).click();

    const header = page.locator('.oxd-topbar-header');

    await expect(header).toBeVisible();

});