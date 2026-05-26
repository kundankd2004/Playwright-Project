require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Dashboard Search Box Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Search Box Visibility Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await expect(searchBox).toBeVisible();

});

test('Search PIM Module Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Search PIM Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('PIM');

    await expect(
        page.locator('//span[text()="PIM"]')
    ).toBeVisible();

});

test('Search Leave Module Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Search Leave Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('Leave');

    await expect(
        page.locator('//span[text()="Leave"]')
    ).toBeVisible();

});

test('Search Admin Module Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Search Admin Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('Admin');

    await expect(
        page.locator('//span[text()="Admin"]')
    ).toBeVisible();

});

test('Search Time Module Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Search Time Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('Time');

    await expect(
        page.locator('//span[text()="Time"]')
    ).toBeVisible();

});

test('Search Recruitment Module Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Search Recruitment Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('Recruitment');

    await expect(
        page.locator('//span[text()="Recruitment"]')
    ).toBeVisible();

});

test('Search Buzz Module Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Search Buzz Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('Buzz');

    await expect(
        page.locator('//span[text()="Buzz"]')
    ).toBeVisible();

});

test('Search Invalid Module Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Search Invalid Module Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('InvalidModule');

    const noRecords = page.locator('.oxd-main-menu-item');

    await expect(noRecords.first()).not.toBeVisible();

});

test('Search Box Clear Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Search Box Clear Test');

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

    const searchBox = page.locator('input[placeholder="Search"]');

    await searchBox.fill('PIM');

    await searchBox.clear();

    await expect(searchBox).toHaveValue('');

});

test('Search Box Refresh Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Search Box Refresh Test');

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

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    const searchBox = page.locator('input[placeholder="Search"]');

    await expect(searchBox).toBeVisible();

});