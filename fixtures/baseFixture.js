const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await page.goto('/');

        await page.waitForLoadState('networkidle');

        await page.waitForSelector('input[name="username"]', {
        timeout: 30000
    });

        const loginPage = new LoginPage(page);

        await use(loginPage);
    }
});

exports.expect = base.expect;