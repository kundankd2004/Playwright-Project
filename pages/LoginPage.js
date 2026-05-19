const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = '#username';
        this.password = '#password';
        this.loginButton = '#loginBtn';
        this.errorMessage = '#error';
    }

    async login(user, pass) {

        await this.fill(this.username, user);

        await this.fill(this.password, pass);

        await this.click(this.loginButton);
    }
}

module.exports = LoginPage;