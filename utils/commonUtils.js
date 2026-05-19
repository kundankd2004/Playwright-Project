class CommonUtils {

    static async wait(seconds) {

        return new Promise(resolve =>
            setTimeout(resolve, seconds * 1000)
        );
    }

    static generateRandomEmail() {

        const random = Math.floor(Math.random() * 10000);

        return `user${random}@test.com`;
    }

    static generateRandomNumber() {

        return Math.floor(Math.random() * 100000);
    }
}

module.exports = CommonUtils;