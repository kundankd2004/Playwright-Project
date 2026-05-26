require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Valid Login Test @smoke @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Valid Login Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    const usernameField = page.locator(
        'input[name="username"]'
    );

    await expect(usernameField).toBeVisible({
        timeout: 10000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForLoadState('networkidle');

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Dashboard');

});

test('Login Page Title Test @sanity', async ({ page }) => {

    Logger.info('Starting Login Page Title Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(page).toHaveTitle(/OrangeHRM/);

});

test('Username Field Visibility Test @smoke', async ({ page }) => {

    Logger.info('Starting Username Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    const usernameField = page.locator(
        'input[name="username"]'
    );

    await expect(usernameField).toBeVisible({
        timeout: 10000
    });

});

test('Password Field Visibility Test @sanity', async ({ page }) => {

    Logger.info('Starting Password Field Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    const passwordField = page.locator(
        'input[name="password"]'
    );

    await expect(passwordField).toBeVisible({
        timeout: 10000
    });

});

test('Login Button Visibility Test @regression', async ({ page }) => {

    Logger.info('Starting Login Button Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    const loginButton = page.getByRole('button', {
        name: 'Login'
    });

    await expect(loginButton).toBeVisible();

});

test('Invalid Login Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Invalid Login Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        'Admin123',
        'admin123'
    );

    const errorMessage = page.locator(
        '.oxd-alert-content-text'
    );

    await expect(errorMessage).toBeVisible({
        timeout: 10000
    });

    await expect(errorMessage).toContainText(
        'Invalid credentials'
    );

});

test('Login Page URL Validation Test @smoke', async ({ page }) => {

    Logger.info('Starting Login Page URL Validation Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(page).toHaveURL(/login/);

});

test('Forgot Password Link Visibility Test @sanity', async ({ page }) => {

    Logger.info('Starting Forgot Password Link Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    const forgotPassword = page.locator(
        '.orangehrm-login-forgot-header'
    );

    await expect(forgotPassword).toBeVisible();

});

test('Login Page Refresh Test @regression', async ({ page }) => {

    Logger.info('Starting Login Page Refresh Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await page.reload({
        waitUntil: 'domcontentloaded'
    });

    const usernameField = page.locator(
        'input[name="username"]'
    );

    await expect(usernameField).toBeVisible({
        timeout: 10000
    });

});

test('Dashboard URL Validation Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard URL Validation Test');

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

    await expect(page).toHaveURL(/dashboard/, {
        timeout: 15000
    });

});