const { test, expect } = require('@playwright/test');

test('Get Users API Test', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.length).toBeGreaterThan(0);
});