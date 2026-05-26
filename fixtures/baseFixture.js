const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const LeavePage = require('../pages/LeavePage');

const PIMPage = require('../pages/PIMPage');

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);

    },

    leavePage: async ({ page }, use) => {

        const leavePage = new LeavePage(page);

        await use(leavePage);

    },

    pimPage: async ({ page }, use) => {

        const pimPage = new PIMPage(page);

        await use(pimPage);

    }

});

exports.expect = base.expect;