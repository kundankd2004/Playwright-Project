require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test('Recruitment Page Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Page Visibility Test');

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            waitUntil: 'load',
            timeout: 60000
        }
    );

    await expect(
        page.locator('input[name="username"]')
    ).toBeVisible();

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

    await page.locator('//span[text()="Recruitment"]').click();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Recruitment');

});

test('Recruitment URL Validation Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment URL Validation Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    await expect(page).toHaveURL(/recruitment/);

});

test('Add Candidate Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Add Candidate Button Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const addButton = page.getByRole('button', {
        name: 'Add'
    });

    await expect(addButton).toBeVisible();

});

test('Vacancies Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Vacancies Button Visibility Test');

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

    await page.locator('//a[text()="Vacancies"]').click();

    await expect(page).toHaveURL(/viewJobVacancy/);

});

test('Candidates Button Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Candidates Button Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const candidatesButton = page.locator('//a[text()="Candidates"]');

    await expect(candidatesButton).toBeVisible();

});

test('Recruitment Search Button Visibility Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Search Button Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const searchButton = page.getByRole('button', {
        name: 'Search'
    });

    await expect(searchButton).toBeVisible();

});

test('Recruitment Reset Button Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Reset Button Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const resetButton = page.getByRole('button', {
        name: 'Reset'
    });

    await expect(resetButton).toBeVisible();

});

test('Recruitment Table Visibility Test @regression', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Table Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const table = page.locator('.oxd-table-body');

    await expect(table).toBeVisible();

});

test('Recruitment Refresh Test @sanity', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Refresh Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    await page.reload();

    await expect(
        page.locator('.oxd-topbar-header-breadcrumb h6')
    ).toContainText('Recruitment');

});

test('Recruitment Header Visibility Test @smoke', async ({ page, loginPage }) => {

    Logger.info('Starting Recruitment Header Visibility Test');

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

    await page.locator('//span[text()="Recruitment"]').click();

    const header = page.locator('.oxd-topbar-header');

    await expect(header).toBeVisible();

});