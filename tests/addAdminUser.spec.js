require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.describe('Add Admin User Tests', () => {

    test('Add Admin User Test @regression', async ({ loggedInPage, adminPage, page }) => {

        Logger.info('Starting Add Admin User Test');

        await adminPage.clickAdminMenu();

        await adminPage.clickAddButton();

        await adminPage.selectUserRole('Admin');

        await adminPage.enterEmployeeName('Linda Anderson');

        await adminPage.selectFirstSuggestion();

        await adminPage.selectStatus('Enabled');

        const uniqueUsername = `kundanadmin${Date.now()}`;

        await adminPage.enterUsername(uniqueUsername);

        await adminPage.enterPassword('Admin@123');

        await adminPage.confirmPassword('Admin@123');

        await adminPage.clickSaveButton();

        await expect(page).toHaveURL(/admin/, {
            timeout: 30000
        });

    });

});