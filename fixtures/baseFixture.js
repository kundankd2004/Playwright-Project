const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });

        const loginPage = new LoginPage(page);

        await use(loginPage);
    }
});

exports.expect = base.expect;