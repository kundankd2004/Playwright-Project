const { request } = require('@playwright/test');

class BaseAPI {

    static async getRequestContext() {

        return await request.newContext({

            baseURL: 'https://jsonplaceholder.typicode.com'

        });

    }

}

module.exports = BaseAPI;