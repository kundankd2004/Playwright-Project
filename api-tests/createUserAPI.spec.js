const { test, expect } = require('@playwright/test');

test('Create User API Test', async ({ request }) => {

    const requestBody = {

        name: 'KunDan',
        username: 'kundan123',
        email: 'kundan@test.com'

    };

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: requestBody
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('KunDan');

    expect(responseBody.email).toBe('kundan@test.com');

});