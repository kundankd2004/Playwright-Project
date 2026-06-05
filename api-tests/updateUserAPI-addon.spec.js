const { test, expect } = require('@playwright/test');

test('Update User API Test', async ({ request }) => {

    const requestBody = {

        name: 'KunDan Updated',
        username: 'kundan_updated',
        email: 'updated@test.com'

    };

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: requestBody
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('KunDan Updated');

    expect(responseBody.email).toBe('updated@test.com');

});