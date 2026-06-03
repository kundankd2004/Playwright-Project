const base = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const LeavePage = require('../pages/LeavePage');
const PIMPage = require('../pages/PIMPage');
const AdminPage = require('../pages/AdminPage');
const DashboardPage = require('../pages/DashboardPage');
const RecruitmentPage = require('../pages/RecruitmentPage');
const TimePage = require('../pages/TimePage');
const PerformancePage = require('../pages/PerformancePage');
const MyInfoPage = require('../pages/MyInfoPage');
const BuzzPage = require('../pages/BuzzPage');
const ForgotPasswordPage = require('../pages/ForgotPasswordPage');
const FormPage = require('../pages/FormPage');
const ProfilePage = require('../pages/ProfilePage');

exports.test = base.test.extend({

    page: async ({ page }, use) => {
        const originalWaitForLoadState = page.waitForLoadState.bind(page);
        page.waitForLoadState = async (state, options) => {
            if (state === 'networkidle') {
                return originalWaitForLoadState('domcontentloaded', options);
            }
            return originalWaitForLoadState(state, options);
        };
        await use(page);
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    leavePage: async ({ page }, use) => {
        await use(new LeavePage(page));
    },

    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },

    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    recruitmentPage: async ({ page }, use) => {
        await use(new RecruitmentPage(page));
    },

    timePage: async ({ page }, use) => {
        await use(new TimePage(page));
    },

    performancePage: async ({ page }, use) => {
        await use(new PerformancePage(page));
    },

    myInfoPage: async ({ page }, use) => {
        await use(new MyInfoPage(page));
    },

    buzzPage: async ({ page }, use) => {
        await use(new BuzzPage(page));
    },

    forgotPasswordPage: async ({ page }, use) => {
        await use(new ForgotPasswordPage(page));
    },

    formPage: async ({ page }, use) => {
        await use(new FormPage(page));
    },

    profilePage: async ({ page }, use) => {
        await use(new ProfilePage(page));
    },

    // Auto-login fixture — navigates and logs in before test
    loggedInPage: async ({ page, loginPage }, use) => {
        await page.goto('/', {
            waitUntil: 'domcontentloaded',
            timeout: 120000
        });

        await page.locator('input[name="username"]').waitFor({
            state: 'visible',
            timeout: 30000
        });

        await loginPage.login(
            process.env.APP_USERNAME,
            process.env.APP_PASSWORD
        );

        await use(page);
    }

});

exports.expect = base.expect;