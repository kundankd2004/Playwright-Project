require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('PIM Navigation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting PIM Navigation Test');

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

    await page.locator('//span[text()="PIM"]').click();

    await expect(page).toHaveURL(/pim/);

});

test('Leave Navigation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Navigation Test');

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

    await page.locator('//span[text()="Leave"]').click();

    await expect(page).toHaveURL(/leave/);

});

test('Time Navigation Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Time Navigation Test');

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

    await page.locator('//span[text()="Time"]').click();

    await expect(page).toHaveURL(/time/);

});

test('Recruitment Navigation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Navigation Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    await expect(page).toHaveURL(/recruitment/);

});

test('My Info Navigation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting My Info Navigation Test');

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

    await page.locator('//span[text()="My Info"]').click();

    await expect(page).toHaveURL(/viewPersonalDetails/);

});

test('Buzz Navigation Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Buzz Navigation Test');

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

    await page.locator('//span[text()="Buzz"]').click();

    await expect(page).toHaveURL(/buzz/);

});

test('Admin Navigation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Admin Navigation Test');

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

    await page.locator('//span[text()="Admin"]').click();

    await expect(page).toHaveURL(/admin/);

});

test('Dashboard Navigation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Navigation Test');

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

    await expect(page).toHaveURL(/dashboard/);

});

test('Sidebar Menu Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Sidebar Menu Visibility Test');

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

    const sidebar = page.locator('.oxd-sidepanel');

    await expect(sidebar).toBeVisible();

});

test('Topbar Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Topbar Visibility Test');

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

    const topbar = page.locator('.oxd-topbar-header');

    await expect(topbar).toBeVisible();

});