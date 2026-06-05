require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const loginData = require('../test-data/loginData.json');

const Logger = require('../utils/logger');

test.describe('Negative Login Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });

        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible({ timeout: 30000 });

    });

    test('Invalid Username Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Invalid Username Test');

        await loginPage.login('WrongUser', 'admin123', false);

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText('Invalid credentials');

    });

    test('Invalid Password Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Invalid Password Test');

        await loginPage.login('Admin', 'WrongPassword', false);

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText('Invalid credentials');

    });

    test('Empty Username Test @negative', async ({ page }) => {

        Logger.info('Starting Empty Username Test');

        await page.locator('input[name="password"]').fill('admin123');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Required').first()
        ).toBeVisible();

    });

    test('Empty Password Test @negative', async ({ page }) => {

        Logger.info('Starting Empty Password Test');

        await page.locator('input[name="username"]').fill('Admin');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Required').first()
        ).toBeVisible();

    });

    test('Empty Credentials Test @negative', async ({ page }) => {

        Logger.info('Starting Empty Credentials Test');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByText('Required').first()
        ).toBeVisible();

    });

    test('Login With Spaces Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Login With Spaces Test');

        await loginPage.login('   ', '   ', false);

        await expect(
            page.getByText('Required').first()
        ).toBeVisible();

    });

    test('Case Sensitive Username Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Case Sensitive Username Test');

        await loginPage.login('ADMIN', 'admin123');

        await expect(page).toHaveURL(/dashboard|viewPersonalDetails/);

    });

    test('Long Username Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Long Username Test');

        await loginPage.login(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            'admin123',
            false
        );

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText('Invalid credentials');

    });

    test('Special Character Username Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Special Character Username Test');

        await loginPage.login('@@@###', 'admin123', false);

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText('Invalid credentials');

    });

    test('Direct Dashboard Access Without Login Test @negative', async ({ page }) => {

        Logger.info('Starting Direct Dashboard Access Without Login Test');

        await page.goto(
            '/web/index.php/dashboard/index',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );

        await expect(page).toHaveURL(/login/);

    });

    test('Invalid Data From JSON Test @negative', async ({ page, loginPage }) => {

        Logger.info('Starting Invalid Data From JSON Test');

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password,
            false
        );

        const errorMessage = page.locator('.oxd-alert-content-text');

        await expect(errorMessage).toBeVisible();

        await expect(errorMessage).toContainText('Invalid credentials');

    });

});