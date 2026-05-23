const { test, expect } = require('@playwright/test');

const BaseAPI = require('./baseAPI');

test('Get Users API Test', async () => {

    const apiContext = await BaseAPI.getRequestContext();

    const response = await apiContext.get('/users');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

});