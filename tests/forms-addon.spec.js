require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const formData = require('../test-data/formData.json');
const loginData = require('../test-data/loginData.json');

const Logger = require('../utils/logger');

test.describe('Form Validation Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Form Submission Test @sanity', async ({ page, loginPage }) => {

        Logger.info('Starting Form Submission Test');

        await loginPage.login(
            process.env.APP_USERNAME,
            process.env.APP_PASSWORD
        );

        await expect(page).toHaveURL(/dashboard/i);

    });

    test('Login Username Field Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Username Field Visibility Test');

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Login Password Field Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Password Field Visibility Test');

        await expect(
            page.locator('input[name="password"]')
        ).toBeVisible();

    });

    test('Login Button Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Login Button Visibility Test');

        await expect(
            page.locator('button[type="submit"]')
        ).toBeVisible();

    });

    test('Login Page URL Validation Test @smoke', async ({ page }) => {

        Logger.info('Starting Login Page URL Validation Test');

        await expect(page).toHaveURL(/auth/);

    });

    test('Login Page Refresh Test @regression', async ({ page }) => {

        Logger.info('Starting Login Page Refresh Test');

        await page.reload();

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Login Form Validation Test @sanity', async ({ page }) => {

        Logger.info('Starting Login Form Validation Test');

        await page.locator('button[type="submit"]').click();

        const validationMessage = page.locator(
            '.oxd-input-field-error-message'
        );

        await expect(validationMessage.first()).toBeVisible();

    });

    test('Invalid Form Data Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Invalid Form Data Test');

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible({ timeout: 10000 });

    });

});