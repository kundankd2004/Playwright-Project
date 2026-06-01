# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Invalid Login Test @regression
- Location: tests/login.spec.js:120:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 60000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/dashboard/**" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         this.usernameInput = page.locator(
  8  |             'input[name="username"]'
  9  |         );
  10 | 
  11 |         this.passwordInput = page.locator(
  12 |             'input[name="password"]'
  13 |         );
  14 | 
  15 |         this.loginBtn = page.locator(
  16 |             'button[type="submit"]'
  17 |         );
  18 | 
  19 |         this.errorMessage = page.locator(
  20 |             '.oxd-alert-content-text'
  21 |         );
  22 | 
  23 |     }
  24 | 
  25 |     async login(username, password) {
  26 | 
  27 |         await this.usernameInput.waitFor({
  28 |             state: 'visible',
  29 |             timeout: 30000
  30 |         });
  31 | 
  32 |         await this.usernameInput.fill(username);
  33 | 
  34 |         await this.passwordInput.fill(password);
  35 | 
  36 |         await this.loginBtn.click();
  37 | 
> 38 |         await this.page.waitForURL(
     |                         ^ TimeoutError: page.waitForURL: Timeout 60000ms exceeded.
  39 |             '**/dashboard/**',
  40 |             {
  41 |                 timeout: 60000
  42 |             }
  43 |         );
  44 | 
  45 |         await this.page.waitForLoadState(
  46 |             'domcontentloaded'
  47 |         );
  48 | 
  49 |     }
  50 | 
  51 | }
  52 | 
  53 | module.exports = LoginPage;
```