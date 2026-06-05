# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: headerValidation-addon.spec.js >> Header Dropdown Visibility Test @sanity
- Location: tests/headerValidation-addon.spec.js:223:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('menuitem', { name: 'Logout' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('menuitem', { name: 'Logout' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Tìm kiếm"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Quản trị viên":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Để lại":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Thời gian":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Tuyển dụng":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "Thông tin của tôi":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Hiệu suất":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
      - menu:
        - listitem:
          - menuitem "About"
        - listitem:
          - menuitem "Support"
        - listitem:
          - menuitem "Thay đổi mật khẩu"
        - listitem:
          - menuitem "Đăng xuất"
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched Out
- paragraph: "Punched Out: Today at 09:40 AM (GMT 5.5)"
- text: 0h 0m Today
- button ""
- separator
- paragraph: This Week
- paragraph: Jun 01 - Jun 07
- text: 
- paragraph: 0h 0m
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Chỉ định nghỉ phép"
- paragraph: Chỉ định nghỉ phép
- button "Để lại Danh sách"
- paragraph: Để lại Danh sách
- button "Timesheets"
- paragraph: Timesheets
- button "Áp dụng lại"
- paragraph: Áp dụng lại
- button "Leave My"
- paragraph: Leave My
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: manda akhil user
- paragraph: 2026-05-06 04:23 AM
- separator
- paragraph: WO AI NI - 520
- img
- img "profile picture"
- paragraph: manda akhil user
- paragraph: 2026-05-06 04:21 AM
- separator
- paragraph: WO AI NI - 520
- img
- img "profile picture"
- paragraph: manda akhil user
- paragraph: 2026-05-06 04:21 AM
- separator
- paragraph: WO AI NI - 520
- img
- paragraph: Employees on Leave Today
- text: 
- separator
- img "No Content"
- paragraph: No Employees are on Leave Today
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- list:
  - listitem: Texas R&D
  - listitem: New York Sales Office
  - listitem: Unassigned
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  150 |     );
  151 | 
  152 |     await loginPage.login(
  153 |         process.env.APP_USERNAME,
  154 |         process.env.APP_PASSWORD
  155 |     );
  156 | 
  157 |     await page.waitForLoadState('networkidle');
  158 | 
  159 |     const helpIcon = page.locator(
  160 |         '.oxd-icon.bi-question-lg'
  161 |     ).first();
  162 | 
  163 |     await expect(helpIcon).toBeVisible();
  164 | 
  165 | });
  166 | 
  167 | test('Header Refresh Test @smoke', async ({ page, loginPage }) => {
  168 | 
  169 |     Logger.info('Starting Header Refresh Test');
  170 | 
  171 |     await page.goto(
  172 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  173 |         {
  174 |             waitUntil: 'domcontentloaded',
  175 |             timeout: 60000
  176 |         }
  177 |     );
  178 | 
  179 |     await loginPage.login(
  180 |         process.env.APP_USERNAME,
  181 |         process.env.APP_PASSWORD
  182 |     );
  183 | 
  184 |     await page.waitForLoadState('networkidle');
  185 | 
  186 |     await page.reload({
  187 |         waitUntil: 'domcontentloaded'
  188 |     });
  189 | 
  190 |     const topHeader = page.locator('.oxd-topbar-header');
  191 | 
  192 |     await expect(topHeader).toBeVisible();
  193 | 
  194 | });
  195 | 
  196 | test('Header Logo Visibility Test @regression', async ({ page, loginPage }) => {
  197 | 
  198 |     Logger.info('Starting Header Logo Visibility Test');
  199 | 
  200 |     await page.goto(
  201 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  202 |         {
  203 |             waitUntil: 'domcontentloaded',
  204 |             timeout: 60000
  205 |         }
  206 |     );
  207 | 
  208 |     await loginPage.login(
  209 |         process.env.APP_USERNAME,
  210 |         process.env.APP_PASSWORD
  211 |     );
  212 | 
  213 |     await page.waitForLoadState('networkidle');
  214 | 
  215 |     const logo = page.locator(
  216 |         '.oxd-brand-banner img'
  217 |     );
  218 | 
  219 |     await expect(logo).toBeVisible();
  220 | 
  221 | });
  222 | 
  223 | test('Header Dropdown Visibility Test @sanity', async ({ page, loginPage }) => {
  224 | 
  225 |     Logger.info('Starting Header Dropdown Visibility Test');
  226 | 
  227 |     await page.goto(
  228 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  229 |         {
  230 |             waitUntil: 'domcontentloaded',
  231 |             timeout: 60000
  232 |         }
  233 |     );
  234 | 
  235 |     await loginPage.login(
  236 |         process.env.APP_USERNAME,
  237 |         process.env.APP_PASSWORD
  238 |     );
  239 | 
  240 |     await page.waitForLoadState('networkidle');
  241 | 
  242 |     await page.locator(
  243 |         '.oxd-userdropdown-tab'
  244 |     ).first().click();
  245 | 
  246 |     const logoutOption = page.getByRole('menuitem', {
  247 |         name: 'Logout'
  248 |     });
  249 | 
> 250 |     await expect(logoutOption).toBeVisible();
      |                                ^ Error: expect(locator).toBeVisible() failed
  251 | 
  252 | });
  253 | 
  254 | test('Header URL Validation Test @smoke', async ({ page, loginPage }) => {
  255 | 
  256 |     Logger.info('Starting Header URL Validation Test');
  257 | 
  258 |     await page.goto(
  259 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  260 |         {
  261 |             waitUntil: 'domcontentloaded',
  262 |             timeout: 60000
  263 |         }
  264 |     );
  265 | 
  266 |     await loginPage.login(
  267 |         process.env.APP_USERNAME,
  268 |         process.env.APP_PASSWORD
  269 |     );
  270 | 
  271 |     await page.waitForLoadState('networkidle');
  272 | 
  273 |     await expect(page).toHaveURL(/dashboard/);
  274 | 
  275 | });
```