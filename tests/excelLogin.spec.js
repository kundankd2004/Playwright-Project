require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const ExcelUtils = require('../utils/excelUtils');

const testData = ExcelUtils.readExcel(
    './test-data/loginData.xlsx',
    'Sheet1'
);

testData.forEach((data) => {

    test(`Login Test for ${data.username}`, async ({ page, loginPage }) => {

        await page.goto('/');

        await loginPage.login(
            data.username,
            data.password
        );

        if (data.username === 'admin') {

            await expect(page).toHaveURL(/dashboard/);

        } else {

            await expect(page.locator('#error')).toBeVisible();

        }
    });

});