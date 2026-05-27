require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Invalid Username Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Invalid Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        'WrongUser',
        'admin123'
    );

    const errorMessage = page.locator(
        '.oxd-alert-content-text'
    );

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'Invalid credentials'
    );

});

test('Invalid Password Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Invalid Password Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        'Admin',
        'WrongPassword'
    );

    const errorMessage = page.locator(
        '.oxd-alert-content-text'
    );

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'Invalid credentials'
    );

});

test('Empty Username Test @negative', async ({ page }) => {

    Logger.info('Starting Empty Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await page.locator(
        'input[name="password"]'
    ).fill('admin123');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    const requiredMessage = page.getByText(
        'Required'
    ).first();

    await expect(requiredMessage).toBeVisible();

});

test('Empty Password Test @negative', async ({ page }) => {

    Logger.info('Starting Empty Password Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await page.locator(
        'input[name="username"]'
    ).fill('Admin');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    const requiredMessage = page.getByText(
        'Required'
    ).first();

    await expect(requiredMessage).toBeVisible();

});

test('Empty Credentials Test @negative', async ({ page }) => {

    Logger.info('Starting Empty Credentials Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    const requiredMessage = page.getByText(
        'Required'
    ).first();

    await expect(requiredMessage).toBeVisible();

});

test('Login With Spaces Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Login With Spaces Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        '   ',
        '   '
    );

    const requiredMessage = page.getByText(
        'Required'
    ).first();

    await expect(requiredMessage).toBeVisible();

});

test('Case Sensitive Username Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Case Sensitive Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        'ADMIN',
        'admin123'
    );

    await expect(page).toHaveURL(/dashboard|viewPersonalDetails/);

});

test('Long Username Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Long Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'admin123'
    );

    const errorMessage = page.locator(
        '.oxd-alert-content-text'
    );

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'Invalid credentials'
    );

});

test('Special Character Username Test @negative', async ({ page, loginPage }) => {

    Logger.info('Starting Special Character Username Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await loginPage.login(
        '@@@###',
        'admin123'
    );

    const errorMessage = page.locator(
        '.oxd-alert-content-text'
    );

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toContainText(
        'Invalid credentials'
    );

});

test('Direct Dashboard Access Without Login Test @negative', async ({ page }) => {

    Logger.info('Starting Direct Dashboard Access Without Login Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    await expect(page).toHaveURL(/login/);

});