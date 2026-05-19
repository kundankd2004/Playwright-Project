const { test, expect } = require('@playwright/test');

test('Update User API Test', async ({ request }) => {

    const updatedBody = {

        id: 1,
        name: 'Updated KunDan',
        username: 'updatedUser',
        email: 'updated@test.com'
    };

    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: updatedBody
        }
    );

    console.log(await response.json());

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.name).toBe('Updated KunDan');

    expect(responseBody.email).toBe('updated@test.com');
});