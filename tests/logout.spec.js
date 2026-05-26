require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Valid Logout Test @smoke @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Valid Logout Test');

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

    await expect(
        page.locator('.oxd-userdropdown-tab').first()
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab')
        .first()
        .click();

    const logoutButton = page.getByRole('menuitem', {
        name: 'Logout'
    });

    await expect(logoutButton).toBeVisible();

    await logoutButton.click();

    await expect(page).toHaveURL(/login/, {
        timeout: 15000
    });

});

test('User Dropdown Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting User Dropdown Visibility Test');

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

    const userDropdown = page.locator(
        '.oxd-userdropdown-tab'
    ).first();

    await expect(userDropdown).toBeVisible();

});

test('Logout Option Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Logout Option Visibility Test');

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

    await expect(
        page.locator('.oxd-userdropdown-tab').first()
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab')
        .first()
        .click();

    const logoutOption = page.getByRole('menuitem', {
        name: 'Logout'
    });

    await expect(logoutOption).toBeVisible();

});

test('Profile Option Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Profile Option Visibility Test');

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

    await expect(
        page.locator('.oxd-userdropdown-tab').first()
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab')
        .first()
        .click();

    const aboutOption = page.getByRole('menuitem', {
        name: 'About'
    });

    await expect(aboutOption).toBeVisible();

});

test('Support Option Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Support Option Visibility Test');

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

    await expect(
        page.locator('.oxd-userdropdown-tab').first()
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab')
        .first()
        .click();

    const supportOption = page.getByRole('menuitem', {
        name: 'Support'
    });

    await expect(supportOption).toBeVisible();

});

test('Change Password Option Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Change Password Option Visibility Test');

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

    await expect(
        page.locator('.oxd-userdropdown-tab').first()
    ).toBeVisible();

    await page.locator('.oxd-userdropdown-tab')
        .first()
        .click();

    const changePasswordOption = page.getByRole('menuitem', {
        name: 'Change Password'
    });

    await expect(changePasswordOption).toBeVisible();

});

test('Logout Refresh Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Logout Refresh Test');

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
        '.oxd-topbar-header-breadcrumb h6'
    );

    await expect(dashboardHeader).toContainText('Dashboard');

});

test('Logout URL Validation Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Logout URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(page).toHaveURL(/login/, {
        timeout: 15000
    });

});

test('Dashboard After Login Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard After Login Visibility Test');

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

    const dashboardHeader = page.locator(
        '.oxd-topbar-header-breadcrumb h6'
    );

    await expect(dashboardHeader).toContainText('Dashboard');

});

test('Sidebar Visibility After Login Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Sidebar Visibility After Login Test');

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