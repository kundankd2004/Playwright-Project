const { test, expect } = require('@playwright/test');

test('Delete User API Test', async ({ request }) => {

    const response = await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    console.log('User deleted successfully');

});