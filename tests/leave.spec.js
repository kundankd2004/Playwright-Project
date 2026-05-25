require('../utils/hooks');

const { test, expect } = require('../fixtures/baseFixture');

const Logger = require('../utils/logger');

test.beforeEach(async ({ page, loginPage }) => {

    Logger.info('Launching Application');

    await page.goto('/', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    });

    await loginPage.login(
        process.env.APP_USERNAME,
        process.env.APP_PASSWORD
    );

});

test('Leave Page Visibility Test @regression', async ({ leavePage }) => {

    Logger.info('Starting Leave Page Visibility Test');

    await leavePage.clickLeaveMenu();

    await expect(
        leavePage.leaveHeader
    ).toContainText('Leave');

});

test('Leave Page URL Validation Test @smoke', async ({ page, leavePage }) => {

    Logger.info('Starting Leave Page URL Validation Test');

    await leavePage.clickLeaveMenu();

    await expect(page).toHaveURL(/leave/);

});

test('Leave Sidebar Visibility Test @sanity', async ({ leavePage }) => {

    Logger.info('Starting Leave Sidebar Visibility Test');

    await expect(
        leavePage.sidebar
    ).toBeVisible();

});

test('Leave Menu Visibility Test @regression', async ({ leavePage }) => {

    Logger.info('Starting Leave Menu Visibility Test');

    await expect(
        leavePage.leaveMenu.first()
    ).toBeVisible();

});

test('Leave Refresh Test @sanity', async ({ leavePage }) => {

    Logger.info('Starting Leave Refresh Test');

    await leavePage.clickLeaveMenu();

    await leavePage.refreshPage();

    await expect(
        leavePage.leaveHeader
    ).toContainText('Leave');

});

test('Leave Header Visibility Test @smoke', async ({ leavePage }) => {

    Logger.info('Starting Leave Header Visibility Test');

    await leavePage.clickLeaveMenu();

    await expect(
        leavePage.topHeader
    ).toBeVisible();

});

test('Leave Quick Action Visibility Test @regression', async ({ leavePage }) => {

    Logger.info('Starting Leave Quick Action Visibility Test');

    await leavePage.clickLeaveMenu();

    await expect(
        leavePage.quickActionButton.first()
    ).toBeVisible();

});