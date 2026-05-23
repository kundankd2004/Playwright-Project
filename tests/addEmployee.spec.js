require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const PIMPage = require('../pages/PIMPage');

const Logger = require('../utils/logger');

test('Add Employee Test @regression', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    Logger.info('Starting Add Employee Test');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.waitForTimeout(3000);

    await pimPage.clickPIMMenu();

    await pimPage.clickAddEmployee();

    await pimPage.enterFirstName('KunDan');

    await pimPage.enterLastName('Raj');

    await pimPage.clickSaveButton();

    await expect(
        page.locator('.oxd-toast')
    ).toBeVisible();

});