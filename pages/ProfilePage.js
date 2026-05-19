const BasePage = require('./BasePage');

class ProfilePage extends BasePage {

    constructor(page) {

        super(page);

        this.nameField = '#name';
        this.emailField = '#email';
        this.saveButton = '#saveBtn';
    }

    async updateProfile(name, email) {

        await this.fill(this.nameField, name);

        await this.fill(this.emailField, email);

        await this.click(this.saveButton);
    }
}

module.exports = ProfilePage;