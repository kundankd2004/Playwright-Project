# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forgotPassword.spec.js >> Forgot Password Tests >> Forgot Password Back To Login Test @regression
- Location: tests/forgotPassword.spec.js:126:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Cancel' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Reset Password" [level=6] [ref=e7]
    - separator [ref=e8]
    - paragraph [ref=e9]:
      - paragraph [ref=e10]: Please enter your username to identify your account to reset your password
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e14]: 
        - generic [ref=e15]: Tên đăng nhập
      - textbox "Tên đăng nhập" [ref=e17]
    - separator [ref=e18]
    - generic [ref=e19]:
      - button "Hủy bỏ" [ref=e20] [cursor=pointer]
      - button "Reset Password" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - paragraph [ref=e23]: OrangeHRM OS 5.8
    - paragraph [ref=e24]:
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e25] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
```

# Test source

```ts
  32  |         ).toContainText('Reset Password');
  33  | 
  34  |     });
  35  | 
  36  |     test('Forgot Password URL Validation Test @regression', async ({ page }) => {
  37  | 
  38  |         Logger.info('Starting Forgot Password URL Validation Test');
  39  | 
  40  |         await expect(page).toHaveURL(/requestPasswordResetCode/);
  41  | 
  42  |     });
  43  | 
  44  |     test('Forgot Password Username Field Visibility Test @sanity', async ({ page }) => {
  45  | 
  46  |         Logger.info('Starting Forgot Password Username Field Visibility Test');
  47  | 
  48  |         await expect(
  49  |             page.locator('input[name="username"]')
  50  |         ).toBeVisible();
  51  | 
  52  |     });
  53  | 
  54  |     test('Forgot Password Reset Button Visibility Test @smoke', async ({ page }) => {
  55  | 
  56  |         Logger.info('Starting Forgot Password Reset Button Visibility Test');
  57  | 
  58  |         await expect(
  59  |             page.getByRole('button', { name: 'Reset Password' })
  60  |         ).toBeVisible();
  61  | 
  62  |     });
  63  | 
  64  |     test('Forgot Password Cancel Button Visibility Test @regression', async ({ page }) => {
  65  | 
  66  |         Logger.info('Starting Forgot Password Cancel Button Visibility Test');
  67  | 
  68  |         await expect(
  69  |             page.getByRole('button', { name: 'Cancel' })
  70  |         ).toBeVisible();
  71  | 
  72  |     });
  73  | 
  74  |     test('Forgot Password Empty Username Validation Test @negative', async ({ page }) => {
  75  | 
  76  |         Logger.info('Starting Forgot Password Empty Username Validation Test');
  77  | 
  78  |         await page.getByRole('button', {
  79  |             name: 'Reset Password'
  80  |         }).click();
  81  | 
  82  |         await expect(
  83  |             page.locator('//span[text()="Required"]')
  84  |         ).toBeVisible();
  85  | 
  86  |     });
  87  | 
  88  |     test('Forgot Password Invalid Username Test @negative', async ({ page }) => {
  89  | 
  90  |         Logger.info('Starting Forgot Password Invalid Username Test');
  91  | 
  92  |         await page.locator('input[name="username"]').fill('WrongUser');
  93  | 
  94  |         await page.getByRole('button', {
  95  |             name: 'Reset Password'
  96  |         }).click();
  97  | 
  98  |         await expect(
  99  |             page.locator('.oxd-text--p').first()
  100 |         ).toBeVisible();
  101 | 
  102 |     });
  103 | 
  104 |     test('Forgot Password Refresh Test @sanity', async ({ page }) => {
  105 | 
  106 |         Logger.info('Starting Forgot Password Refresh Test');
  107 | 
  108 |         await page.reload();
  109 | 
  110 |         await expect(
  111 |             page.locator('input[name="username"]')
  112 |         ).toBeVisible();
  113 | 
  114 |     });
  115 | 
  116 |     test('Forgot Password Header Visibility Test @smoke', async ({ page }) => {
  117 | 
  118 |         Logger.info('Starting Forgot Password Header Visibility Test');
  119 | 
  120 |         await expect(
  121 |             page.locator('.orangehrm-forgot-password-title')
  122 |         ).toBeVisible();
  123 | 
  124 |     });
  125 | 
  126 |     test('Forgot Password Back To Login Test @regression', async ({ page }) => {
  127 | 
  128 |         Logger.info('Starting Forgot Password Back To Login Test');
  129 | 
  130 |         await page.getByRole('button', {
  131 |             name: 'Cancel'
> 132 |         }).click();
      |            ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  133 | 
  134 |         await expect(page).toHaveURL(/login/);
  135 | 
  136 |     });
  137 | 
  138 | });
```