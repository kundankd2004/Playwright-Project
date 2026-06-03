require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const profileData = require('../test-data/profileData.json');

const Logger = require('../utils/logger');

test.describe('Update Profile Tests', () => {

    test('Update Profile Test @regression', async ({ loggedInPage, page }) => {

        Logger.info('Starting Update Profile Test');

        await page.locator('//span[text()="My Info"]').click();

        await page.waitForLoadState('domcontentloaded');

        await expect(
            page.locator('input[name="firstName"]')
        ).toBeVisible({ timeout: 30000 });

        await page.locator('input[name="firstName"]').clear();

        await page.locator('input[name="firstName"]').fill(
            profileData.validProfile.name.split(' ')[0]
        );

        await page.locator(
            '(//button[@type="submit"])[1]'
        ).click();

        await expect(page).toHaveURL(/viewPersonalDetails/);

    });

});