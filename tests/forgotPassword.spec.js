require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Forgot Password Page Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Forgot Password Page Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await expect(
        page.locator('.orangehrm-forgot-password-title')
    ).toContainText('Reset Password');

});

test('Forgot Password URL Validation Test @regression', async ({ page }) => {

    Logger.info('Starting Forgot Password URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await expect(page).toHaveURL(/requestPasswordResetCode/);

});

test('Forgot Password Username Field Visibility Test @sanity', async ({ page }) => {

    Logger.info('Starting Forgot Password Username Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    const usernameField = page.locator('input[name="username"]');

    await expect(usernameField).toBeVisible();

});

test('Forgot Password Reset Button Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Forgot Password Reset Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    const resetButton = page.getByRole('button', {
        name: 'Reset Password'
    });

    await expect(resetButton).toBeVisible();

});

test('Forgot Password Cancel Button Visibility Test @regression', async ({ page }) => {

    Logger.info('Starting Forgot Password Cancel Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    const cancelButton = page.getByRole('button', {
        name: 'Cancel'
    });

    await expect(cancelButton).toBeVisible();

});

test('Forgot Password Empty Username Validation Test @negative', async ({ page }) => {

    Logger.info('Starting Forgot Password Empty Username Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await page.getByRole('button', {
        name: 'Reset Password'
    }).click();

    const requiredMessage = page.locator('//span[text()="Required"]');

    await expect(requiredMessage).toBeVisible();

});

test('Forgot Password Invalid Username Test @negative', async ({ page }) => {

    Logger.info('Starting Forgot Password Invalid Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await page.locator('input[name="username"]').fill('WrongUser');

    await page.getByRole('button', {
        name: 'Reset Password'
    }).click();

    const message = page.locator('.oxd-text--p');

    await expect(message.first()).toBeVisible();

});

test('Forgot Password Refresh Test @sanity', async ({ page }) => {

    Logger.info('Starting Forgot Password Refresh Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await page.reload();

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

});

test('Forgot Password Header Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Forgot Password Header Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    const header = page.locator('.orangehrm-forgot-password-title');

    await expect(header).toBeVisible();

});

test('Forgot Password Back To Login Test @regression', async ({ page }) => {

    Logger.info('Starting Forgot Password Back To Login Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.locator('.orangehrm-login-forgot-header').click();

    await page.getByRole('button', {
        name: 'Cancel'
    }).click();

    await expect(page).toHaveURL(/login/);

});