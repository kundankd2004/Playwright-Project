require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Sidebar Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Sidebar Visibility Test');

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

test('PIM Menu Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting PIM Menu Visibility Test');

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

    const pimMenu = page.getByRole('link', {
        name: 'PIM'
    });

    await expect(pimMenu).toBeVisible();

});

test('Leave Menu Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Menu Visibility Test');

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

    const leaveMenu = page.getByRole('link', {
        name: 'Leave'
    });

    await expect(leaveMenu).toBeVisible();

});

test('Time Menu Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Time Menu Visibility Test');

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

    const timeMenu = page.getByRole('link', {
        name: 'Time'
    });

    await expect(timeMenu).toBeVisible();

});

test('Recruitment Menu Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Menu Visibility Test');

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

    const recruitmentMenu = page.getByRole('link', {
        name: 'Recruitment'
    });

    await expect(recruitmentMenu).toBeVisible();

});

test('My Info Menu Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting My Info Menu Visibility Test');

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

    const myInfoMenu = page.getByRole('link', {
        name: 'My Info'
    });

    await expect(myInfoMenu).toBeVisible();

});

test('Buzz Menu Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Buzz Menu Visibility Test');

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

    const buzzMenu = page.getByRole('link', {
        name: 'Buzz'
    });

    await expect(buzzMenu).toBeVisible();

});

test('Admin Menu Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Menu Visibility Test');

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

    const adminMenu = page.getByRole('link', {
        name: 'Admin'
    });

    await expect(adminMenu).toBeVisible();

});

test('Sidebar Collapse Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Sidebar Collapse Button Visibility Test');

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

    const collapseButton = page.locator('.oxd-main-menu-button');

    await expect(collapseButton).toBeVisible();

});

test('Sidebar Search Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Sidebar Search Visibility Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await expect(searchBox).toBeVisible();

});