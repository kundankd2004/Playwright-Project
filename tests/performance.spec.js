require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Login Performance Test @performance', async ({ page, loginPage }) => {

    Logger.info('Starting Login Performance Test');

    const startTime = Date.now();

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Dashboard');

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`Login Time: ${totalTime} ms`);

});

test('Dashboard Load Performance Test @performance', async ({ page, loginPage }) => {

    Logger.info('Starting Dashboard Load Performance Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    const startTime = Date.now();

    await page.reload();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Dashboard');

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`Dashboard Reload Time: ${totalTime} ms`);

});

test('PIM Module Load Performance Test @performance', async ({ page, loginPage }) => {

    Logger.info('Starting PIM Module Load Performance Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    const startTime = Date.now();

    await page.locator('//span[text()="PIM"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('PIM');

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`PIM Load Time: ${totalTime} ms`);

});

test('Leave Module Load Performance Test @performance', async ({ page, loginPage }) => {

    Logger.info('Starting Leave Module Load Performance Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    const startTime = Date.now();

    await page.locator('//span[text()="Leave"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Leave');

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`Leave Load Time: ${totalTime} ms`);

});

test('Recruitment Module Load Performance Test @performance', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Module Load Performance Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    const startTime = Date.now();

    await page.locator('//span[text()="Recruitment"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Recruitment');

    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`Recruitment Load Time: ${totalTime} ms`);

});