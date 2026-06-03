const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class TimePage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.timeMenu = page.locator('//span[text()="Time"]');

        // Top Bar Header
        this.timeHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Sub Menus
        this.timesheetsMenu = page.getByRole('link', {
            name: 'Timesheets'
        });

        this.attendanceMenu = page.getByRole('link', {
            name: 'Attendance'
        });

        this.reportsMenu = page.getByRole('link', {
            name: 'Reports'
        });

        this.projectInfoMenu = page.getByRole('link', {
            name: 'Project Info'
        });

        // My Timesheets
        this.myTimesheetsLink = page.getByText('My Timesheets');

        this.employeeTimesheetsLink = page.getByText('Employee Timesheets');

        // Attendance
        this.myRecordsLink = page.getByText('My Records');

        this.punchInOutLink = page.getByText('Punch In/Out');

        this.employeeRecordsLink = page.getByText('Employee Records');

        this.configurationLink = page.getByText('Configuration');

        // Punch In/Out
        this.punchInButton = page.getByRole('button', {
            name: 'In'
        });

        this.punchOutButton = page.getByRole('button', {
            name: 'Out'
        });

        this.punchNote = page.locator(
            'textarea.oxd-textarea'
        );

        // View Button
        this.viewButton = page.getByRole('button', {
            name: 'View'
        });

        // Edit Button
        this.editButton = page.getByRole('button', {
            name: 'Edit'
        });

        // Submit Button
        this.submitButton = page.getByRole('button', {
            name: 'Submit'
        });

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async clickTimeMenu() {

        await expect(this.timeMenu).toBeVisible({
            timeout: 30000
        });

        await this.timeMenu.click();

        await this.timeHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async clickTimesheets() {

        await expect(this.timesheetsMenu).toBeVisible({
            timeout: 30000
        });

        await this.timesheetsMenu.click();

    }

    async clickMyTimesheets() {

        await this.myTimesheetsLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickAttendance() {

        await expect(this.attendanceMenu).toBeVisible({
            timeout: 30000
        });

        await this.attendanceMenu.click();

    }

    async clickPunchInOut() {

        await this.punchInOutLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickMyRecords() {

        await this.myRecordsLink.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async punchIn(note) {

        await expect(this.punchInButton).toBeVisible({
            timeout: 30000
        });

        if (note) {
            await this.punchNote.fill(note);
        }

        await this.punchInButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async punchOut(note) {

        await expect(this.punchOutButton).toBeVisible({
            timeout: 30000
        });

        if (note) {
            await this.punchNote.fill(note);
        }

        await this.punchOutButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = TimePage;
