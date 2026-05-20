require('../utils/hooks');
const { test, expect } = require('../fixtures/baseFixture');
const loginData = require('../test-data/loginData.json');
const CommonUtils = require('../utils/commonUtils');
const Logger = require('../utils/logger');

test('Valid Login Test @smoke @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Valid Login Test');

    //await page.goto('/');

    console.log(CommonUtils.generateRandomEmail());

    await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
);

    await expect(page).toHaveURL(/dashboard/);
});

test('Invalid Login Test @sanity', async ({ page, loginPage }) => {

    Logger.warn('Starting Invalid Login Test');
    
    await page.goto('/');

    console.log(CommonUtils.generateRandomNumber());

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await expect(page.locator('#error')).toBeVisible();
});