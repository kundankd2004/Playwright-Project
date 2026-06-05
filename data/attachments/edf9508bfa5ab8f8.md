# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myInfo.spec.js >> My Info Page Visibility Test @smoke
- Location: tests/myInfo.spec.js:7:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByText('My Info')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Quản trị viên" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Quản trị viên
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Để lại" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Để lại
            - listitem [ref=e46]:
              - link "Thời gian" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Thời gian
            - listitem [ref=e54]:
              - link "Tuyển dụng" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Tuyển dụng
            - listitem [ref=e62]:
              - link "Thông tin của tôi" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: Thông tin của tôi
            - listitem [ref=e70]:
              - link "Hiệu suất" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Hiệu suất
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: manda user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Today at 09:40 AM (GMT 5.5)"
          - generic [ref=e153]:
            - generic [ref=e154]: 0h 0m Today
            - button "" [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Jun 01 - Jun 07
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e184]:
            - button [ref=e185] [cursor=pointer]
            - paragraph [ref=e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e196]:
        - generic [ref=e198]:
          - generic [ref=e199]: 
          - paragraph [ref=e200]: Quick Launch
        - separator [ref=e201]
        - generic [ref=e203]:
          - generic [ref=e204]:
            - button "Assign Leave" [ref=e205] [cursor=pointer]
            - generic "Assign Leave" [ref=e208]:
              - paragraph [ref=e209]: Assign Leave
          - generic [ref=e210]:
            - button "Leave List" [ref=e211] [cursor=pointer]
            - generic "Leave List" [ref=e218]:
              - paragraph [ref=e219]: Leave List
          - generic [ref=e220]:
            - button "Timesheets" [ref=e221] [cursor=pointer]
            - generic "Timesheets" [ref=e227]:
              - paragraph [ref=e228]: Timesheets
          - generic [ref=e229]:
            - button "Apply Leave" [ref=e230] [cursor=pointer]
            - generic "Apply Leave" [ref=e233]:
              - paragraph [ref=e234]: Apply Leave
          - generic [ref=e235]:
            - button "My Leave" [ref=e236] [cursor=pointer]
            - generic "My Leave" [ref=e241]:
              - paragraph [ref=e242]: My Leave
          - generic [ref=e243]:
            - button "My Timesheet" [ref=e244] [cursor=pointer]
            - generic "My Timesheet" [ref=e247]:
              - paragraph [ref=e248]: My Timesheet
      - generic [ref=e250]:
        - generic [ref=e252]:
          - generic [ref=e253]: 
          - paragraph [ref=e254]: Buzz Latest Posts
        - separator [ref=e255]
        - generic [ref=e257]:
          - generic [ref=e258]:
            - generic [ref=e259] [cursor=pointer]:
              - img "profile picture" [ref=e261]
              - generic [ref=e262]:
                - paragraph [ref=e263]: manda akhil user
                - paragraph [ref=e264]: 2026-05-06 04:23 AM
            - separator [ref=e265]
            - paragraph [ref=e266]: WO AI NI - 520
            - img [ref=e267]
          - generic [ref=e268]:
            - generic [ref=e269] [cursor=pointer]:
              - img "profile picture" [ref=e271]
              - generic [ref=e272]:
                - paragraph [ref=e273]: manda akhil user
                - paragraph [ref=e274]: 2026-05-06 04:21 AM
            - separator [ref=e275]
            - paragraph [ref=e276]: WO AI NI - 520
            - img [ref=e277]
          - generic [ref=e278]:
            - generic [ref=e279] [cursor=pointer]:
              - img "profile picture" [ref=e281]
              - generic [ref=e282]:
                - paragraph [ref=e283]: manda akhil user
                - paragraph [ref=e284]: 2026-05-06 04:21 AM
            - separator [ref=e285]
            - paragraph [ref=e286]: WO AI NI - 520
            - img [ref=e287]
      - generic [ref=e289]:
        - generic [ref=e290]:
          - paragraph [ref=e295]: Employees on Leave Today
          - generic [ref=e296] [cursor=pointer]: 
        - separator [ref=e297]
        - generic [ref=e299]:
          - img "No Content" [ref=e300]
          - paragraph [ref=e301]: No Employees are on Leave Today
      - generic [ref=e303]:
        - generic [ref=e305]:
          - generic [ref=e306]: 
          - paragraph [ref=e307]: Employee Distribution by Sub Unit
        - separator [ref=e308]
        - list [ref=e313]:
          - listitem [ref=e314] [cursor=pointer]:
            - generic "Engineering" [ref=e316]
          - listitem [ref=e317] [cursor=pointer]:
            - generic "Human Resources" [ref=e319]
          - listitem [ref=e320] [cursor=pointer]:
            - generic "Administration" [ref=e322]
          - listitem [ref=e323] [cursor=pointer]:
            - generic "Client Services" [ref=e325]
          - listitem [ref=e326] [cursor=pointer]:
            - generic "Unassigned" [ref=e328]
      - generic [ref=e330]:
        - generic [ref=e332]:
          - generic [ref=e333]: 
          - paragraph [ref=e334]: Employee Distribution by Location
        - separator [ref=e335]
        - list [ref=e340]:
          - listitem [ref=e341] [cursor=pointer]:
            - generic "Texas R&D" [ref=e343]
          - listitem [ref=e344] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e346]
          - listitem [ref=e347] [cursor=pointer]:
            - generic "Unassigned" [ref=e349]
    - generic [ref=e350]:
      - paragraph [ref=e351]: OrangeHRM OS 5.8
      - paragraph [ref=e352]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e353] [cursor=pointer]:
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
  7   | test('My Info Page Visibility Test @smoke', async ({ page, loginPage }) => {
  8   | 
  9   |     Logger.info('Starting My Info Page Visibility Test');
  10  | 
  11  |     await page.goto(
  12  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  13  |         {
  14  |             waitUntil: 'domcontentloaded',
  15  |             timeout: 60000
  16  |         }
  17  |     );
  18  | 
  19  |     await expect(
  20  |         page.locator('input[name="username"]')
  21  |     ).toBeVisible();
  22  | 
  23  |     await loginPage.login(
  24  |         process.env.APP_USERNAME,
  25  |         process.env.APP_PASSWORD
  26  |     );
  27  | 
> 28  |     await page.getByText('My Info').click();
      |                                     ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  29  | 
  30  |     await expect(
  31  |         page.getByRole('heading', { name: 'PIM' })
  32  |     ).toBeVisible();
  33  | 
  34  | });
  35  | 
  36  | test('My Info URL Validation Test @regression', async ({ page, loginPage }) => {
  37  | 
  38  |     Logger.info('Starting My Info URL Validation Test');
  39  | 
  40  |     await page.goto(
  41  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  42  |         {
  43  |             waitUntil: 'domcontentloaded',
  44  |             timeout: 60000
  45  |         }
  46  |     );
  47  | 
  48  |     await loginPage.login(
  49  |         process.env.APP_USERNAME,
  50  |         process.env.APP_PASSWORD
  51  |     );
  52  | 
  53  |     await page.getByText('My Info').click();
  54  | 
  55  |     await expect(page).toHaveURL(/viewPersonalDetails/);
  56  | 
  57  | });
  58  | 
  59  | test('First Name Field Visibility Test @sanity', async ({ page, loginPage }) => {
  60  | 
  61  |     Logger.info('Starting First Name Field Visibility Test');
  62  | 
  63  |     await page.goto(
  64  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  65  |         {
  66  |             waitUntil: 'domcontentloaded',
  67  |             timeout: 60000
  68  |         }
  69  |     );
  70  | 
  71  |     await loginPage.login(
  72  |         process.env.APP_USERNAME,
  73  |         process.env.APP_PASSWORD
  74  |     );
  75  | 
  76  |     await page.getByText('My Info').click();
  77  | 
  78  |     const firstNameField = page.locator('input[name="firstName"]');
  79  | 
  80  |     await expect(firstNameField).toBeVisible();
  81  | 
  82  | });
  83  | 
  84  | test('Last Name Field Visibility Test @smoke', async ({ page, loginPage }) => {
  85  | 
  86  |     Logger.info('Starting Last Name Field Visibility Test');
  87  | 
  88  |     await page.goto(
  89  |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  90  |         {
  91  |             waitUntil: 'domcontentloaded',
  92  |             timeout: 60000
  93  |         }
  94  |     );
  95  | 
  96  |     await loginPage.login(
  97  |         process.env.APP_USERNAME,
  98  |         process.env.APP_PASSWORD
  99  |     );
  100 | 
  101 |     await page.getByText('My Info').click();
  102 | 
  103 |     const lastNameField = page.locator('input[name="lastName"]');
  104 | 
  105 |     await expect(lastNameField).toBeVisible();
  106 | 
  107 | });
  108 | 
  109 | test('Employee ID Field Visibility Test @regression', async ({ page, loginPage }) => {
  110 | 
  111 |     Logger.info('Starting Employee ID Field Visibility Test');
  112 | 
  113 |     await page.goto(
  114 |         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  115 |         {
  116 |             waitUntil: 'domcontentloaded',
  117 |             timeout: 60000
  118 |         }
  119 |     );
  120 | 
  121 |     await loginPage.login(
  122 |         process.env.APP_USERNAME,
  123 |         process.env.APP_PASSWORD
  124 |     );
  125 | 
  126 |     await page.getByText('My Info').click();
  127 | 
  128 |     const employeeIdField = page.locator(
```