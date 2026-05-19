const BasePage = require('./BasePage');

class FormPage extends BasePage {

    constructor(page) {

        super(page);

        this.inputField = '#inputField';
        this.submitButton = '#submitBtn';
    }

    async submitForm(data) {

        await this.fill(this.inputField, data);

        await this.click(this.submitButton);
    }
}

module.exports = FormPage;