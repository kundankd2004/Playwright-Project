# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> Logout Tests >> Change Password Option Visibility Test @smoke
- Location: tests/logout.spec.js:83:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('menuitem', { name: 'Change Password' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('menuitem', { name: 'Change Password' })

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
  1   | require('../utils/hooks');
  2   | 
  3   | const { test, expect } = require('../fixtures/baseFixture');
  4   | 
  5   | const Logger = require('../utils/logger');
  6   | 
  7   | test.describe('Logout Tests', () => {
  8   | 
  9   |     test.beforeEach(async ({ loggedInPage }) => {
  10  |         // loggedInPage fixture auto-navigates and logs in
  11  |     });
  12  | 
  13  |     test('Valid Logout Test @smoke @regression', async ({ page }) => {
  14  | 
  15  |         Logger.info('Starting Valid Logout Test');
  16  | 
  17  |         const userDropdown = page.locator('.oxd-userdropdown-tab').first();
  18  | 
  19  |         await expect(userDropdown).toBeVisible();
  20  | 
  21  |         await userDropdown.click();
  22  | 
  23  |         const logoutButton = page.getByRole('menuitem', {
  24  |             name: 'Logout'
  25  |         });
  26  | 
  27  |         await expect(logoutButton).toBeVisible();
  28  | 
  29  |         await logoutButton.click();
  30  | 
  31  |         await expect(page).toHaveURL(/login/, {
  32  |             timeout: 15000
  33  |         });
  34  | 
  35  |     });
  36  | 
  37  |     test('User Dropdown Visibility Test @sanity', async ({ page }) => {
  38  | 
  39  |         Logger.info('Starting User Dropdown Visibility Test');
  40  | 
  41  |         await expect(
  42  |             page.locator('.oxd-userdropdown-tab').first()
  43  |         ).toBeVisible();
  44  | 
  45  |     });
  46  | 
  47  |     test('Logout Option Visibility Test @smoke', async ({ page }) => {
  48  | 
  49  |         Logger.info('Starting Logout Option Visibility Test');
  50  | 
  51  |         await page.locator('.oxd-userdropdown-tab').first().click();
  52  | 
  53  |         await expect(
  54  |             page.getByRole('menuitem', { name: 'Logout' })
  55  |         ).toBeVisible();
  56  | 
  57  |     });
  58  | 
  59  |     test('Profile Option Visibility Test @regression', async ({ page }) => {
  60  | 
  61  |         Logger.info('Starting Profile Option Visibility Test');
  62  | 
  63  |         await page.locator('.oxd-userdropdown-tab').first().click();
  64  | 
  65  |         await expect(
  66  |             page.getByRole('menuitem', { name: 'About' })
  67  |         ).toBeVisible();
  68  | 
  69  |     });
  70  | 
  71  |     test('Support Option Visibility Test @sanity', async ({ page }) => {
  72  | 
  73  |         Logger.info('Starting Support Option Visibility Test');
  74  | 
  75  |         await page.locator('.oxd-userdropdown-tab').first().click();
  76  | 
  77  |         await expect(
  78  |             page.getByRole('menuitem', { name: 'Support' })
  79  |         ).toBeVisible();
  80  | 
  81  |     });
  82  | 
  83  |     test('Change Password Option Visibility Test @smoke', async ({ page }) => {
  84  | 
  85  |         Logger.info('Starting Change Password Option Visibility Test');
  86  | 
  87  |         await page.locator('.oxd-userdropdown-tab').first().click();
  88  | 
  89  |         await expect(
  90  |             page.getByRole('menuitem', { name: 'Change Password' })
> 91  |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  92  | 
  93  |     });
  94  | 
  95  |     test('Logout Refresh Test @regression', async ({ page }) => {
  96  | 
  97  |         Logger.info('Starting Logout Refresh Test');
  98  | 
  99  |         await page.reload({ waitUntil: 'domcontentloaded' });
  100 | 
  101 |         await expect(
  102 |             page.locator('.oxd-topbar-header-breadcrumb h6')
  103 |         ).toContainText('Dashboard');
  104 | 
  105 |     });
  106 | 
  107 |     test('Logout URL Validation Test @sanity', async ({ page }) => {
  108 | 
  109 |         Logger.info('Starting Logout URL Validation Test');
  110 | 
  111 |         await expect(page).toHaveURL(/dashboard/, {
  112 |             timeout: 15000
  113 |         });
  114 | 
  115 |     });
  116 | 
  117 |     test('Dashboard After Login Visibility Test @smoke', async ({ page }) => {
  118 | 
  119 |         Logger.info('Starting Dashboard After Login Visibility Test');
  120 | 
  121 |         await expect(
  122 |             page.locator('.oxd-topbar-header-breadcrumb h6')
  123 |         ).toContainText('Dashboard');
  124 | 
  125 |     });
  126 | 
  127 |     test('Sidebar Visibility After Login Test @regression', async ({ page }) => {
  128 | 
  129 |         Logger.info('Starting Sidebar Visibility After Login Test');
  130 | 
  131 |         await expect(
  132 |             page.locator('.oxd-sidepanel')
  133 |         ).toBeVisible();
  134 | 
  135 |     });
  136 | 
  137 | });
```