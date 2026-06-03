const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class PerformancePage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.performanceMenu = page.locator('//span[text()="Performance"]');

        // Top Bar Header
        this.performanceHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Sub Menus
        this.configureMenu = page.getByRole('link', {
            name: 'Configure'
        });

        this.manageReviewsMenu = page.getByRole('link', {
            name: 'Manage Reviews'
        });

        this.myTrackersMenu = page.getByRole('link', {
            name: 'My Trackers'
        });

        this.employeeTrackersMenu = page.getByRole('link', {
            name: 'Employee Trackers'
        });

        // KPI
        this.kpiLink = page.getByText('KPIs');

        this.trackersLink = page.getByText('Trackers');

        // Add Button
        this.addButton = page.getByRole('button', {
            name: ' Add '
        });

        // Form Fields
        this.jobTitleDropdown = page.locator(
            '.oxd-select-text'
        ).first();

        this.kpiInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        // Save Button
        this.saveButton = page.getByRole('button', {
            name: 'Save'
        }).first();

        // Search Button
        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        // Table
        this.resultTable = page.locator(
            '.oxd-table-card'
        ).first();

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async clickPerformanceMenu() {

        await expect(this.performanceMenu).toBeVisible({
            timeout: 30000
        });

        await this.performanceMenu.click();

        await this.performanceHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async clickConfigure() {

        await expect(this.configureMenu).toBeVisible({
            timeout: 30000
        });

        await this.configureMenu.click();

    }

    async clickKPIs() {

        await this.kpiLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickTrackers() {

        await this.trackersLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickManageReviews() {

        await expect(this.manageReviewsMenu).toBeVisible({
            timeout: 30000
        });

        await this.manageReviewsMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickMyTrackers() {

        await expect(this.myTrackersMenu).toBeVisible({
            timeout: 30000
        });

        await this.myTrackersMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickEmployeeTrackers() {

        await expect(this.employeeTrackersMenu).toBeVisible({
            timeout: 30000
        });

        await this.employeeTrackersMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = PerformancePage;
