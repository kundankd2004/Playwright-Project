const { test } = require('@playwright/test');

test.beforeEach(async () => {

    console.log('Starting Test Execution');

});

test.afterEach(async ({ page }, testInfo) => {

    console.log('Test Execution Completed');

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({

            path: `screenshots/${testInfo.title}.png`,
            fullPage: true

        });

    }

});