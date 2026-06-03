require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const loginData = require('../test-data/loginData.json');

const Logger = require('../utils/logger');

test.describe('Login Page Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible({ timeout: 30000 });

    });

    test('Valid Login Test @smoke @regression', async ({ page, loginPage }) => {

        Logger.info('Starting Valid Login Test');

        await loginPage.login(
            process.env.APP_USERNAME,
            process.env.APP_PASSWORD
        );

        await expect(
            page.locator('.oxd-topbar-header-breadcrumb h6')
        ).toContainText('Dashboard');

    });

    test('Login Page Title Test @sanity', async ({ page }) => {

        Logger.info('Starting Login Page Title Test');

        await expect(page).toHaveTitle(/OrangeHRM/);

    });

    test('Username Field Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Username Field Visibility Test');

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Password Field Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Password Field Visibility Test');

        await expect(
            page.locator('input[name="password"]')
        ).toBeVisible();

    });

    test('Login Button Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Login Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Login' })
        ).toBeVisible();

    });

    test('Invalid Login Test @regression', async ({ page, loginPage }) => {

        Logger.info('Starting Invalid Login Test');

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password,
            false
        );

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible({ timeout: 10000 });

        await expect(errorMessage).toContainText('Invalid credentials');

    });

    test('Login Page URL Validation Test @smoke', async ({ page }) => {

        Logger.info('Starting Login Page URL Validation Test');

        await expect(page).toHaveURL(/login/);

    });

    test('Forgot Password Link Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Forgot Password Link Visibility Test');

        await expect(
            page.locator('.orangehrm-login-forgot-header')
        ).toBeVisible();

    });

    test('Login Page Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting Login Page Refresh Test');

        await page.reload({ waitUntil: 'domcontentloaded' });

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible({ timeout: 10000 });

    });

    test('Dashboard URL Validation Test @smoke', async ({ page, loginPage }) => {

        Logger.info('Starting Dashboard URL Validation Test');

        await loginPage.login(
            process.env.APP_USERNAME,
            process.env.APP_PASSWORD
        );

        await expect(page).toHaveURL(/dashboard/, {
            timeout: 15000
        });

    });

});