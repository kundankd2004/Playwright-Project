# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgotPassword.spec.js >> Forgot Password Empty Username Validation Test @negative
- Location: tests/forgotPassword.spec.js:109:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Reset Password' })

```

# Test source

```ts
  25  | });
  26  | 
  27  | test('Forgot Password URL Validation Test @regression', async ({ page }) => {
  28  | 
  29  |     Logger.info('Starting Forgot Password URL Validation Test');
  30  | 
  31  |     await page.goto(
  32  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  33  |         {
  34  |             waitUntil: 'load',
  35  |             timeout: 60000
  36  |         }
  37  |     );
  38  | 
  39  |     await page.locator('.orangehrm-login-forgot-header').click();
  40  | 
  41  |     await expect(page).toHaveURL(/requestPasswordResetCode/);
  42  | 
  43  | });
  44  | 
  45  | test('Forgot Password Username Field Visibility Test @sanity', async ({ page }) => {
  46  | 
  47  |     Logger.info('Starting Forgot Password Username Field Visibility Test');
  48  | 
  49  |     await page.goto(
  50  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  51  |         {
  52  |             waitUntil: 'load',
  53  |             timeout: 60000
  54  |         }
  55  |     );
  56  | 
  57  |     await page.locator('.orangehrm-login-forgot-header').click();
  58  | 
  59  |     const usernameField = page.locator('input[name="username"]');
  60  | 
  61  |     await expect(usernameField).toBeVisible();
  62  | 
  63  | });
  64  | 
  65  | test('Forgot Password Reset Button Visibility Test @smoke', async ({ page }) => {
  66  | 
  67  |     Logger.info('Starting Forgot Password Reset Button Visibility Test');
  68  | 
  69  |     await page.goto(
  70  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  71  |         {
  72  |             waitUntil: 'load',
  73  |             timeout: 60000
  74  |         }
  75  |     );
  76  | 
  77  |     await page.locator('.orangehrm-login-forgot-header').click();
  78  | 
  79  |     const resetButton = page.getByRole('button', {
  80  |         name: 'Reset Password'
  81  |     });
  82  | 
  83  |     await expect(resetButton).toBeVisible();
  84  | 
  85  | });
  86  | 
  87  | test('Forgot Password Cancel Button Visibility Test @regression', async ({ page }) => {
  88  | 
  89  |     Logger.info('Starting Forgot Password Cancel Button Visibility Test');
  90  | 
  91  |     await page.goto(
  92  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  93  |         {
  94  |             waitUntil: 'load',
  95  |             timeout: 60000
  96  |         }
  97  |     );
  98  | 
  99  |     await page.locator('.orangehrm-login-forgot-header').click();
  100 | 
  101 |     const cancelButton = page.getByRole('button', {
  102 |         name: 'Cancel'
  103 |     });
  104 | 
  105 |     await expect(cancelButton).toBeVisible();
  106 | 
  107 | });
  108 | 
  109 | test('Forgot Password Empty Username Validation Test @negative', async ({ page }) => {
  110 | 
  111 |     Logger.info('Starting Forgot Password Empty Username Validation Test');
  112 | 
  113 |     await page.goto(
  114 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  115 |         {
  116 |             waitUntil: 'load',
  117 |             timeout: 60000
  118 |         }
  119 |     );
  120 | 
  121 |     await page.locator('.orangehrm-login-forgot-header').click();
  122 | 
  123 |     await page.getByRole('button', {
  124 |         name: 'Reset Password'
> 125 |     }).click();
      |        ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  126 | 
  127 |     const requiredMessage = page.locator('//span[text()="Required"]');
  128 | 
  129 |     await expect(requiredMessage).toBeVisible();
  130 | 
  131 | });
  132 | 
  133 | test('Forgot Password Invalid Username Test @negative', async ({ page }) => {
  134 | 
  135 |     Logger.info('Starting Forgot Password Invalid Username Test');
  136 | 
  137 |     await page.goto(
  138 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  139 |         {
  140 |             waitUntil: 'load',
  141 |             timeout: 60000
  142 |         }
  143 |     );
  144 | 
  145 |     await page.locator('.orangehrm-login-forgot-header').click();
  146 | 
  147 |     await page.locator('input[name="username"]').fill('WrongUser');
  148 | 
  149 |     await page.getByRole('button', {
  150 |         name: 'Reset Password'
  151 |     }).click();
  152 | 
  153 |     const message = page.locator('.oxd-text--p');
  154 | 
  155 |     await expect(message.first()).toBeVisible();
  156 | 
  157 | });
  158 | 
  159 | test('Forgot Password Refresh Test @sanity', async ({ page }) => {
  160 | 
  161 |     Logger.info('Starting Forgot Password Refresh Test');
  162 | 
  163 |     await page.goto(
  164 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  165 |         {
  166 |             waitUntil: 'load',
  167 |             timeout: 60000
  168 |         }
  169 |     );
  170 | 
  171 |     await page.locator('.orangehrm-login-forgot-header').click();
  172 | 
  173 |     await page.reload();
  174 | 
  175 |     await expect(
  176 |         page.locator('input[name="username"]')
  177 |     ).toBeVisible();
  178 | 
  179 | });
  180 | 
  181 | test('Forgot Password Header Visibility Test @smoke', async ({ page }) => {
  182 | 
  183 |     Logger.info('Starting Forgot Password Header Visibility Test');
  184 | 
  185 |     await page.goto(
  186 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  187 |         {
  188 |             waitUntil: 'load',
  189 |             timeout: 60000
  190 |         }
  191 |     );
  192 | 
  193 |     await page.locator('.orangehrm-login-forgot-header').click();
  194 | 
  195 |     const header = page.locator('.orangehrm-forgot-password-title');
  196 | 
  197 |     await expect(header).toBeVisible();
  198 | 
  199 | });
  200 | 
  201 | test('Forgot Password Back To Login Test @regression', async ({ page }) => {
  202 | 
  203 |     Logger.info('Starting Forgot Password Back To Login Test');
  204 | 
  205 |     await page.goto(
  206 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  207 |         {
  208 |             waitUntil: 'load',
  209 |             timeout: 60000
  210 |         }
  211 |     );
  212 | 
  213 |     await page.locator('.orangehrm-login-forgot-header').click();
  214 | 
  215 |     await page.getByRole('button', {
  216 |         name: 'Cancel'
  217 |     }).click();
  218 | 
  219 |     await expect(page).toHaveURL(/login/);
  220 | 
  221 | });
```