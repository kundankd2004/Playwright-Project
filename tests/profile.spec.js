require('../utils/hooks');
const { test, expect } = require('../fixtures/baseFixture');
const profileData = require('../test-data/profileData.json');
const Logger = require('../utils/logger');

test('Profile Update Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Profile Update Test');

    //await page.goto('/');

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    expect(profileData.validProfile.name).toBe('KunDan Raj');
});