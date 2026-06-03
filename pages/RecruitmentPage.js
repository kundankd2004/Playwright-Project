const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class RecruitmentPage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');

        // Top Bar Header
        this.recruitmentHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Sub Menus
        this.candidatesMenu = page.getByRole('link', {
            name: 'Candidates'
        });

        this.vacanciesMenu = page.getByRole('link', {
            name: 'Vacancies'
        });

        // Add Candidate Button
        this.addButton = page.getByRole('button', {
            name: ' Add '
        });

        // Candidate Form Fields
        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.emailInput = page.locator(
            '(//input[@placeholder="Type here"])[1]'
        );

        this.vacancyDropdown = page.locator(
            '.oxd-select-text'
        ).first();

        // Save Button
        this.saveButton = page.getByRole('button', {
            name: 'Save'
        }).first();

        // Search Fields
        this.candidateSearchInput = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        // Table
        this.candidateTable = page.locator(
            '.oxd-table-card'
        ).first();

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async clickRecruitmentMenu() {

        await expect(this.recruitmentMenu).toBeVisible({
            timeout: 30000
        });

        await this.recruitmentMenu.click();

        await this.recruitmentHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async clickCandidates() {

        await expect(this.candidatesMenu).toBeVisible({
            timeout: 30000
        });

        await this.candidatesMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickVacancies() {

        await expect(this.vacanciesMenu).toBeVisible({
            timeout: 30000
        });

        await this.vacanciesMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickAddButton() {

        await expect(this.addButton).toBeVisible({
            timeout: 30000
        });

        await this.addButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async addCandidate(firstName, middleName, lastName, email) {

        await expect(this.firstNameInput).toBeVisible({
            timeout: 30000
        });

        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.fill(lastName);

        await this.emailInput.fill(email);

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async searchCandidate(candidateName) {

        await expect(this.candidateSearchInput).toBeVisible({
            timeout: 30000
        });

        await this.candidateSearchInput.clear();

        await this.candidateSearchInput.fill(candidateName);

        await this.searchButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = RecruitmentPage;
