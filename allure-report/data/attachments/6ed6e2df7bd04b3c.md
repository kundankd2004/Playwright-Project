# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> Dashboard Visibility Test @smoke
- Location: tests\dashboard.spec.js:6:1

# Error details

```
TimeoutError: page.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#loginBtn')
    - locator resolved to <button type="submit" id="loginBtn">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Login" [level=1] [ref=e3]
  - textbox "Username" [ref=e4]: admin
  - textbox "Password" [active] [ref=e5]: admin123
  - button "Login" [ref=e6] [cursor=pointer]
  - paragraph
```

# Test source

```ts
  1  | class BasePage {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |     }
  6  | 
  7  |     async navigate(url) {
  8  |         await this.page.goto(url);
  9  |     }
  10 | 
  11 |     async click(locator) {
> 12 |         await this.page.click(locator);
     |                         ^ TimeoutError: page.click: Timeout 10000ms exceeded.
  13 |     }
  14 | 
  15 |     async fill(locator, value) {
  16 |         await this.page.fill(locator, value);
  17 |     }
  18 | 
  19 |     async getText(locator) {
  20 |         return await this.page.textContent(locator);
  21 |     }
  22 | 
  23 |     async isVisible(locator) {
  24 |         return await this.page.locator(locator).isVisible();
  25 |     }
  26 | }
  27 | 
  28 | module.exports = BasePage;
```