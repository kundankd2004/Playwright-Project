# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addAdminUser-addon.spec.js >> Add Admin User Tests >> Add Admin User Test @regression
- Location: tests/addAdminUser-addon.spec.js:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[text()="Admin"]').first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('//span[text()="Admin"]').first()

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
  19  | 
  20  |         // Sub Menus
  21  |         this.userManagementMenu = page.getByRole('link', {
  22  |             name: 'User Management'
  23  |         });
  24  | 
  25  |         this.jobMenu = page.getByRole('link', {
  26  |             name: 'Job '
  27  |         });
  28  | 
  29  |         this.organizationMenu = page.getByRole('link', {
  30  |             name: 'Organization'
  31  |         });
  32  | 
  33  |         this.qualificationsMenu = page.getByRole('link', {
  34  |             name: 'Qualifications'
  35  |         });
  36  | 
  37  |         // Search Fields
  38  |         this.usernameSearchInput = page.locator(
  39  |             '(//input[@class="oxd-input oxd-input--active"])[2]'
  40  |         );
  41  | 
  42  |         this.userRoleDropdown = page.locator(
  43  |             '.oxd-select-text'
  44  |         ).first();
  45  | 
  46  |         this.statusDropdown = page.locator(
  47  |             '.oxd-select-text'
  48  |         ).nth(1);
  49  | 
  50  |         this.employeeNameInput = page.locator(
  51  |             '//input[@placeholder="Type for hints..."]'
  52  |         );
  53  | 
  54  |         // Buttons
  55  |         this.searchButton = page.getByRole('button', {
  56  |             name: 'Search'
  57  |         });
  58  | 
  59  |         this.resetButton = page.getByRole('button', {
  60  |             name: 'Reset'
  61  |         });
  62  | 
  63  |         this.addButton = page.getByRole('button', {
  64  |             name: ' Add '
  65  |         });
  66  | 
  67  |         // Add User Form Fields
  68  |         this.addUserRoleDropdown = page.locator(
  69  |             '.oxd-select-text'
  70  |         ).first();
  71  | 
  72  |         this.addUsernameInput = page.locator(
  73  |             '(//input[@class="oxd-input oxd-input--active"])[2]'
  74  |         );
  75  | 
  76  |         this.addStatusDropdown = page.locator(
  77  |             '.oxd-select-text'
  78  |         ).nth(1);
  79  | 
  80  |         this.addPasswordInput = page.locator(
  81  |             '(//input[@type="password"])[1]'
  82  |         );
  83  | 
  84  |         this.confirmPasswordInput = page.locator(
  85  |             '(//input[@type="password"])[2]'
  86  |         );
  87  | 
  88  |         this.saveButton = page.getByRole('button', {
  89  |             name: 'Save'
  90  |         });
  91  | 
  92  |         // Table
  93  |         this.userTable = page.locator(
  94  |             '.oxd-table-card'
  95  |         ).first();
  96  | 
  97  |         this.tableRows = page.locator(
  98  |             '.oxd-table-card'
  99  |         );
  100 | 
  101 |         // Toast
  102 |         this.successToast = page.locator(
  103 |             '.oxd-toast-content'
  104 |         );
  105 | 
  106 |         // Delete Confirmation
  107 |         this.deleteButton = page.locator(
  108 |             '.oxd-table-cell-actions .oxd-icon-button--danger'
  109 |         ).first();
  110 | 
  111 |         this.confirmDeleteButton = page.getByRole('button', {
  112 |             name: 'Yes, Delete'
  113 |         });
  114 | 
  115 |     }
  116 | 
  117 |     async clickAdminMenu() {
  118 | 
> 119 |         await expect(this.adminMenu).toBeVisible({
      |                                      ^ Error: expect(locator).toBeVisible() failed
  120 |             timeout: 30000
  121 |         });
  122 | 
  123 |         await this.adminMenu.click();
  124 | 
  125 |         await this.adminHeader.waitFor({
  126 |             state: 'visible',
  127 |             timeout: 30000
  128 |         });
  129 | 
  130 |     }
  131 | 
  132 |     async searchUsername(username) {
  133 | 
  134 |         await expect(this.usernameSearchInput).toBeVisible({
  135 |             timeout: 30000
  136 |         });
  137 | 
  138 |         await this.usernameSearchInput.fill(username);
  139 | 
  140 |     }
  141 | 
  142 |     async clickSearchButton() {
  143 | 
  144 |         await expect(this.searchButton).toBeVisible({
  145 |             timeout: 30000
  146 |         });
  147 | 
  148 |         await this.searchButton.click();
  149 | 
  150 |         await this.page.waitForLoadState('domcontentloaded');
  151 | 
  152 |     }
  153 | 
  154 |     async clickResetButton() {
  155 | 
  156 |         await expect(this.resetButton).toBeVisible({
  157 |             timeout: 30000
  158 |         });
  159 | 
  160 |         await this.resetButton.click();
  161 | 
  162 |         await this.page.waitForLoadState('domcontentloaded');
  163 | 
  164 |     }
  165 | 
  166 |     async clickAddButton() {
  167 | 
  168 |         await expect(this.addButton).toBeVisible({
  169 |             timeout: 30000
  170 |         });
  171 | 
  172 |         await this.addButton.click();
  173 | 
  174 |         await this.page.waitForLoadState('domcontentloaded');
  175 | 
  176 |     }
  177 | 
  178 |     async selectUserRole(role) {
  179 | 
  180 |         await this.addUserRoleDropdown.click();
  181 | 
  182 |         const option = this.page.getByRole('option', {
  183 |             name: role || 'Admin'
  184 |         });
  185 | 
  186 |         await expect(option).toBeVisible({
  187 |             timeout: 10000
  188 |         });
  189 | 
  190 |         await option.click();
  191 | 
  192 |     }
  193 | 
  194 |     async enterEmployeeName(employeeName) {
  195 | 
  196 |         await expect(this.employeeNameInput).toBeVisible({
  197 |             timeout: 30000
  198 |         });
  199 | 
  200 |         await this.employeeNameInput.fill(employeeName);
  201 | 
  202 |         // Wait for autocomplete suggestions to appear
  203 |         const suggestion = this.page.locator(
  204 |             '.oxd-autocomplete-option'
  205 |         ).first();
  206 | 
  207 |         await expect(suggestion).toBeVisible({
  208 |             timeout: 10000
  209 |         });
  210 | 
  211 |     }
  212 | 
  213 |     async selectFirstSuggestion() {
  214 | 
  215 |         const suggestion = this.page.locator(
  216 |             '.oxd-autocomplete-option'
  217 |         ).first();
  218 | 
  219 |         await expect(suggestion).toBeVisible({
```