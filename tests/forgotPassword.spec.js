require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Forgot Password Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible({ timeout: 30000 });

        await page.locator('.orangehrm-login-forgot-header').click();

        await page.waitForLoadState('domcontentloaded');

    });

    test('Forgot Password Page Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Forgot Password Page Visibility Test');

        await expect(
            page.locator('.orangehrm-forgot-password-title')
        ).toContainText('Reset Password');

    });

    test('Forgot Password URL Validation Test @regression', async ({ page }) => {

        Logger.info('Starting Forgot Password URL Validation Test');

        await expect(page).toHaveURL(/requestPasswordResetCode/);

    });

    test('Forgot Password Username Field Visibility Test @sanity', async ({ page }) => {

        Logger.info('Starting Forgot Password Username Field Visibility Test');

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Forgot Password Reset Button Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Forgot Password Reset Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Reset Password' })
        ).toBeVisible();

    });

    test('Forgot Password Cancel Button Visibility Test @regression', async ({ page }) => {

        Logger.info('Starting Forgot Password Cancel Button Visibility Test');

        await expect(
            page.getByRole('button', { name: 'Cancel' })
        ).toBeVisible();

    });

    test('Forgot Password Empty Username Validation Test @negative', async ({ page }) => {

        Logger.info('Starting Forgot Password Empty Username Validation Test');

        await page.getByRole('button', {
            name: 'Reset Password'
        }).click();

        await expect(
            page.locator('//span[text()="Required"]')
        ).toBeVisible();

    });

    test('Forgot Password Invalid Username Test @negative', async ({ page }) => {

        Logger.info('Starting Forgot Password Invalid Username Test');

        await page.locator('input[name="username"]').fill('WrongUser');

        await page.getByRole('button', {
            name: 'Reset Password'
        }).click();

        await expect(
            page.locator('.oxd-text--p').first()
        ).toBeVisible();

    });

    test('Forgot Password Refresh Test @sanity', async ({ page }) => {

        Logger.info('Starting Forgot Password Refresh Test');

        await page.reload();

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();

    });

    test('Forgot Password Header Visibility Test @smoke', async ({ page }) => {

        Logger.info('Starting Forgot Password Header Visibility Test');

        await expect(
            page.locator('.orangehrm-forgot-password-title')
        ).toBeVisible();

    });

    test('Forgot Password Back To Login Test @regression', async ({ page }) => {

        Logger.info('Starting Forgot Password Back To Login Test');

        await page.getByRole('button', {
            name: 'Cancel'
        }).click();

        await expect(page).toHaveURL(/login/);

    });

});