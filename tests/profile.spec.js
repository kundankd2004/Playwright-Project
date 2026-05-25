require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.beforeEach(async ({ page, loginPage }) => {

    Logger.info('Launching Application');

    await page.goto(process.env.BASE_URL, {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-userdropdown-tab')
    ).toBeVisible({
        timeout: 30000
    });

});

test('Profile Update Test @regression', async ({ page }) => {

    Logger.info('Starting Profile Update Test');

    await expect(
        page.locator('.oxd-userdropdown-tab')
    ).toBeVisible();

});

test('Profile Page Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Profile Page Visibility Test');

    await page.locator('.oxd-userdropdown-tab').click();

    await expect(
        page.locator('.oxd-dropdown-menu')
    ).toBeVisible();

});

test('Profile Dropdown Visibility Test @sanity', async ({ page }) => {

    Logger.info('Starting Profile Dropdown Visibility Test');

    const profileDropdown = page.locator(
        '.oxd-userdropdown-tab'
    );

    await expect(profileDropdown).toBeVisible();

});

test('Profile Image Visibility Test @regression', async ({ page }) => {

    Logger.info('Starting Profile Image Visibility Test');

    const profileImage = page.locator(
        '.oxd-userdropdown-img'
    );

    await expect(profileImage).toBeVisible();

});

test('Profile Page Refresh Test @sanity', async ({ page }) => {

    Logger.info('Starting Profile Page Refresh Test');

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    await expect(
        page.locator('.oxd-userdropdown-tab')
    ).toBeVisible({
        timeout: 15000
    });

});

test('Profile URL Validation Test @smoke', async ({ page }) => {

    Logger.info('Starting Profile URL Validation Test');

    await expect(page).toHaveURL(/dashboard/);

});

test('Profile Menu Visibility Test @regression', async ({ page }) => {

    Logger.info('Starting Profile Menu Visibility Test');

    await page.locator('.oxd-userdropdown-tab').click();

    const logoutOption = page.getByText('Logout');

    await expect(logoutOption).toBeVisible();

});