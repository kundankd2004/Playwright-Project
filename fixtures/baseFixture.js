const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const LeavePage = require('../pages/LeavePage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    leavePage: async ({ page }, use) => {

        const leavePage = new LeavePage(page);

        await use(leavePage);

    }

});

exports.expect = base.expect;