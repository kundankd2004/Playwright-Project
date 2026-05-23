require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Update Profile Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Update Profile Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(5000);

    await page.locator('//span[text()="My Info"]').click();

    await page.waitForTimeout(5000);

    await page.locator(
        '(//input[@class="oxd-input oxd-input--active"])[2]'
    ).fill('KunDan');

    await page.locator(
        '(//button[@type="submit"])[1]'
    ).click();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});