require('../utils/hooks');
const { test, expect } = require('../fixtures/baseFixture');
const formData = require('../test-data/formData.json');
const Logger = require('../utils/logger');

test('Form Submission Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Form Submission Test');

    //await page.goto('/');

    await page.waitForLoadState('networkidle');

    await expect(page.locator('#username')).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    expect(formData.validForm.input).toContain('Playwright');
});