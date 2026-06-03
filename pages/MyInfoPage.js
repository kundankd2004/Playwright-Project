const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class MyInfoPage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.myInfoMenu = page.locator('//span[text()="My Info"]');

        // Top Bar Header
        this.myInfoHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Personal Details Tab
        this.personalDetailsTab = page.getByText('Personal Details');

        this.contactDetailsTab = page.getByText('Contact Details');

        this.emergencyContactsTab = page.getByText('Emergency Contacts');

        this.dependentsTab = page.getByText('Dependents');

        this.qualificationsTab = page.getByText('Qualifications');

        this.jobTab = page.getByText('Job');

        // Personal Details Form Fields
        this.firstNameInput = page.locator('input[name="firstName"]');

        this.middleNameInput = page.locator('input[name="middleName"]');

        this.lastNameInput = page.locator('input[name="lastName"]');

        this.employeeIdInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        this.otherIdInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[3]'
        );

        this.licenseNumberInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[4]'
        );

        this.nationalityDropdown = page.locator(
            '.oxd-select-text'
        ).first();

        this.maritalStatusDropdown = page.locator(
            '.oxd-select-text'
        ).nth(1);

        this.genderMale = page.locator(
            '//label[text()="Male"]'
        );

        this.genderFemale = page.locator(
            '//label[text()="Female"]'
        );

        // Contact Details Form Fields
        this.street1Input = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[2]'
        );

        this.street2Input = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[3]'
        );

        this.cityInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[4]'
        );

        this.zipInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[6]'
        );

        this.mobileInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[8]'
        );

        this.workEmailInput = page.locator(
            '(//input[@class="oxd-input oxd-input--active"])[9]'
        );

        // Save Button (first form on page)
        this.saveButton = page.locator(
            '(//button[@type="submit"])[1]'
        );

        // Profile Picture
        this.profileImage = page.locator(
            '.orangehrm-edit-employee-image'
        );

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

    }

    async clickMyInfoMenu() {

        await expect(this.myInfoMenu).toBeVisible({
            timeout: 30000
        });

        await this.myInfoMenu.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async updatePersonalDetails(firstName, middleName, lastName) {

        await expect(this.firstNameInput).toBeVisible({
            timeout: 30000
        });

        await this.firstNameInput.clear();
        await this.firstNameInput.fill(firstName);

        await this.middleNameInput.clear();
        await this.middleNameInput.fill(middleName);

        await this.lastNameInput.clear();
        await this.lastNameInput.fill(lastName);

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickContactDetails() {

        await expect(this.contactDetailsTab).toBeVisible({
            timeout: 30000
        });

        await this.contactDetailsTab.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async updateContactDetails(street1, city, zip, mobile) {

        await expect(this.street1Input).toBeVisible({
            timeout: 30000
        });

        await this.street1Input.clear();
        await this.street1Input.fill(street1);

        await this.cityInput.clear();
        await this.cityInput.fill(city);

        await this.zipInput.clear();
        await this.zipInput.fill(zip);

        await this.mobileInput.clear();
        await this.mobileInput.fill(mobile);

        await this.saveButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifySuccessToast() {

        await expect(this.successToast).toBeVisible({
            timeout: 30000
        });

    }

    async verifyProfileImageVisible() {

        await expect(this.profileImage).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = MyInfoPage;
