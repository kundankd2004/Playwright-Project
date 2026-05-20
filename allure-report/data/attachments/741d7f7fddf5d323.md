# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: excelLogin.spec.js >> Login Test for admin
- Location: tests\excelLogin.spec.js:14:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#username') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Login" [level=1] [ref=e3]
  - textbox "Username" [ref=e4]
  - textbox "Password" [ref=e5]
  - button "Login" [ref=e6] [cursor=pointer]
  - paragraph
```

# Test source

```ts
  1  | const base = require('@playwright/test');
  2  | const LoginPage = require('../pages/LoginPage');
  3  | 
  4  | exports.test = base.test.extend({
  5  | 
  6  |     loginPage: async ({ page }, use) => {
  7  | 
  8  |         await page.goto('/');
  9  | 
  10 |         await page.waitForLoadState('networkidle');
  11 | 
> 12 |         await page.waitForSelector('#username');
     |                    ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  13 | 
  14 |         const loginPage = new LoginPage(page);
  15 | 
  16 |         await use(loginPage);
  17 |     }
  18 | });
  19 | 
  20 | exports.expect = base.expect;
```