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

    console.log(await response.json());

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('KunDan');

    expect(responseBody.email).toBe('kundan@test.com');
});