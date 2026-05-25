require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const formData = require('../test-data/formData.json');

const Logger = require('../utils/logger');

test('Form Submission Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Form Submission Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/dashboard/i);

});

test('Login Username Field Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Username Field Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    const usernameField = page.locator('input[name="username"]');

    await expect(usernameField).toBeVisible();

});

test('Login Password Field Visibility Test @regression', async ({ page }) => {

    Logger.info('Starting Password Field Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    const passwordField = page.locator('input[name="password"]');

    await expect(passwordField).toBeVisible();

});

test('Login Button Visibility Test @sanity', async ({ page }) => {

    Logger.info('Starting Login Button Visibility Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    const loginButton = page.locator('button[type="submit"]');

    await expect(loginButton).toBeVisible();

});

test('Login Page URL Validation Test @smoke', async ({ page }) => {

    Logger.info('Starting Login Page URL Validation Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await expect(page).toHaveURL(/auth/);

});

test('Login Page Refresh Test @regression', async ({ page }) => {

    Logger.info('Starting Login Page Refresh Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await page.reload();

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

});

test('Login Form Validation Test @sanity', async ({ page }) => {

    Logger.info('Starting Login Form Validation Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await page.locator('button[type="submit"]').click();

    const validationMessage = page.locator('.oxd-input-field-error-message');

    await expect(validationMessage.first()).toBeVisible();

});