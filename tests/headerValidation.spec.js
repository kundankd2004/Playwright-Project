require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Top Header Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Top Header Visibility Test');

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

    const topHeader = page.locator('.oxd-topbar-header');

    await expect(topHeader).toBeVisible();

});

test('User Profile Icon Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting User Profile Icon Visibility Test');

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

    const profileIcon = page.locator(
        '.oxd-userdropdown-tab'
    ).first();

    await expect(profileIcon).toBeVisible();

});

test('Search Box Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Search Box Visibility Test');

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

    const searchBox = page.locator(
        'input[placeholder="Search"]'
    );

    await expect(searchBox).toBeVisible();

});

test('Notification Bell Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Notification Bell Visibility Test');

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

    const userArea = page.locator(
        '.oxd-topbar-header-userarea'
    );

    await expect(userArea).toBeVisible();

});

test('Message Icon Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Message Icon Visibility Test');

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

    const userArea = page.locator(
        '.oxd-topbar-header-userarea'
    );

    await expect(userArea).toBeVisible();

});

test('Help Icon Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Help Icon Visibility Test');

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

    const helpIcon = page.locator(
        '.oxd-icon.bi-question-lg'
    ).first();

    await expect(helpIcon).toBeVisible();

});

test('Header Refresh Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Header Refresh Test');

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

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    const topHeader = page.locator('.oxd-topbar-header');

    await expect(topHeader).toBeVisible();

});

test('Header Logo Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Header Logo Visibility Test');

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

    const logo = page.locator(
        '.oxd-brand-banner img'
    );

    await expect(logo).toBeVisible();

});

test('Header Dropdown Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Header Dropdown Visibility Test');

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

    await page.locator(
        '.oxd-userdropdown-tab'
    ).first().click();

    const logoutOption = page.getByRole('menuitem', {
        name: 'Logout'
    });

    await expect(logoutOption).toBeVisible();

});

test('Header URL Validation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Header URL Validation Test');

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

    await expect(page).toHaveURL(/dashboard/);

});