# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addEmployee-addon.spec.js >> Add Employee Tests >> Add Employee Last Name Field Test @regression
- Location: tests/addEmployee-addon.spec.js:47:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Add Employee' })
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('link', { name: 'Add Employee' })

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
  - heading "PIM" [level=6]
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
      - listitem: Cấu hình 
      - listitem:
        - link "Nhân viên Danh sách":
          - /url: "#"
      - listitem:
        - link "Thêm nhân viên":
          - /url: "#"
      - listitem:
        - link "Báo cáo":
          - /url: "#"
      - button ""
- heading "Nhân viên thông tin" [level=5]
- button ""
- separator
- text: Tên người lao động
- textbox "Type for hints..."
- text: Nhân viên Id
- textbox
- text: Công Việc -- Select --  Bao gồm Chỉ Nhân viên hiện tại  Giám sát Name
- textbox "Type for hints..."
- text: Chức vụ -- Select --  Tiểu đơn vị -- Select -- 
- separator
- button "Thiết lập lại"
- button "Tìm kiếm"
- button " Thêm"
- separator
- text: (146) Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Họ  Chức vụ  Công Việc  Tiểu đơn vị  Giám sát  Hoạt động":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Họ "
      - columnheader "Chức vụ "
      - columnheader "Công Việc "
      - columnheader "Tiểu đơn vị "
      - columnheader "Giám sát "
      - columnheader "Hoạt động"
  - rowgroup:
    - row " dfgsjsjdh 123445 34Kumar 444444  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfgsjsjdh"
      - cell "123445 34Kumar"
      - cell "444444"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0295 99N75 425 5TlV  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0295"
      - cell "99N75 425"
      - cell "5TlV"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0312 A8DCo 4Ys 010Z  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0312"
      - cell "A8DCo 4Ys"
      - cell "010Z"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0409 AdminEmp_MaFVBc Test_PSawLa  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0409"
      - cell "AdminEmp_MaFVBc"
      - cell "Test_PSawLa"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0373 AdminEmp_XJPePn Test_oEwglU  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0373"
      - cell "AdminEmp_XJPePn"
      - cell "Test_oEwglU"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 2221 Alice Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2221"
      - cell "Alice"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 183 aniket Ashok patil  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "183"
      - cell "aniket Ashok"
      - cell "patil"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " API472892 ApiFirst472892 ApiMiddle472892 ApiLast472892  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "API472892"
      - cell "ApiFirst472892 ApiMiddle472892"
      - cell "ApiLast472892"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " API476862 ApiFirst476862 ApiMiddle476862 ApiLast476862  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "API476862"
      - cell "ApiFirst476862 ApiMiddle476862"
      - cell "ApiLast476862"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " API481529 ApiFirst481529 ApiMiddle481529 ApiLast481529  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "API481529"
      - cell "ApiFirst481529 ApiMiddle481529"
      - cell "ApiLast481529"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367 Ash J Tyson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367"
      - cell "Ash J"
      - cell "Tyson"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 bala kumar ravi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "bala kumar"
      - cell "ravi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0292"
      - cell "bmrtahvwhibmrtahvwhi"
      - cell "hbfqkhjfqbhbfqkhjfqb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0320 Charles Carter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0320"
      - cell "Charles"
      - cell "Carter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00392 Charlotte Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00392"
      - cell "Charlotte"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0363 Christopher Mcmillan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0363"
      - cell "Christopher"
      - cell "Mcmillan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " QA275262 CustomID Employee  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "QA275262"
      - cell "CustomID"
      - cell "Employee"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0290"
      - cell "dhbrukkuzldhbrukkuzl"
      - cell "ibuvlwtfsfibuvlwtfsf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0294 DHINA KARAN P  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0294"
      - cell "DHINA KARAN"
      - cell "P"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0397 EditFirst289944 After289944 EditLast289944  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0397"
      - cell "EditFirst289944 After289944"
      - cell "EditLast289944"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0398 EditFirst317208 Before317208 EditLast317208  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0398"
      - cell "EditFirst317208 Before317208"
      - cell "EditLast317208"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0399 EditFirst334025 Before334025 EditLast334025  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0399"
      - cell "EditFirst334025 Before334025"
      - cell "EditLast334025"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 09557 Emily Jones  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "09557"
      - cell "Emily"
      - cell "Jones"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0394 Employee_1 E  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0394"
      - cell "Employee_1"
      - cell "E"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0372 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0372"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0385 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0385"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0413 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0413"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0418 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0418"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0389 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0389"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0388 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0388"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0407 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0407"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0422 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0422"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0400 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0400"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0380 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0380"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0406 ff ll  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0406"
      - cell "ff"
      - cell "ll"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0395 First9126 Middle9126 Last9126  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0395"
      - cell "First9126 Middle9126"
      - cell "Last9126"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0421 FirstName MiddleName LastName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0421"
      - cell "FirstName MiddleName"
      - cell "LastName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0414 FirstName MiddleName LastName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0414"
      - cell "FirstName MiddleName"
      - cell "LastName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0417 FirstName MiddleName LastName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0417"
      - cell "FirstName MiddleName"
      - cell "LastName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0416 FirstName MiddleName LastName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0416"
      - cell "FirstName MiddleName"
      - cell "LastName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1235 FName Mname LName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1235"
      - cell "FName Mname"
      - cell "LName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftdkux ltsxgy  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftdkux"
      - cell "ltsxgy"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthyfv ltrhtm  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthyfv"
      - cell "ltrhtm"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class PIMPage {
  4   | 
  5   |     constructor(page) {
  6   | 
  7   |         this.page = page;
  8   | 
  9   |         // Left Menu
  10  |         this.pimMenu = page.locator('//span[text()="PIM"]');
  11  | 
  12  |         // Add Employee Menu
  13  |         this.addEmployeeMenu = page.getByRole('link', {
  14  |             name: 'Add Employee'
  15  |         });
  16  | 
  17  |         // Employee List Menu (Fixed)
  18  |         this.employeeListMenu = page.getByRole('link', {
  19  |             name: 'Employee List'
  20  |         });
  21  | 
  22  |         // Form Fields
  23  |         this.firstNameInput = page.locator('input[name="firstName"]');
  24  | 
  25  |         this.middleNameInput = page.locator('input[name="middleName"]');
  26  | 
  27  |         this.lastNameInput = page.locator('input[name="lastName"]');
  28  | 
  29  |         // Save Button
  30  |         this.saveButton = page.getByRole('button', {
  31  |             name: 'Save'
  32  |         }).first();
  33  | 
  34  |         // Search Employee
  35  |         this.employeeSearchInput = page.locator(
  36  |             '(//input[@placeholder="Type for hints..."])[1]'
  37  |         );
  38  | 
  39  |         this.searchButton = page.getByRole('button', {
  40  |             name: 'Search'
  41  |         });
  42  | 
  43  |         // Toast
  44  |         this.successToast = page.locator(
  45  |             '.oxd-toast-content'
  46  |         );
  47  | 
  48  |         // Employee Table
  49  |         this.employeeTable = page.locator(
  50  |             '.oxd-table-card'
  51  |         ).first();
  52  | 
  53  |     }
  54  | 
  55  |     async clickPIMMenu() {
  56  | 
  57  |         await expect(this.pimMenu).toBeVisible({
  58  |             timeout: 30000
  59  |         });
  60  | 
  61  |         await this.pimMenu.click();
  62  | 
  63  |         await this.page.waitForLoadState(
  64  |             'domcontentloaded'
  65  |         );
  66  | 
  67  |     }
  68  | 
  69  |     async clickAddEmployee() {
  70  | 
> 71  |         await expect(this.addEmployeeMenu).toBeVisible({
      |                                            ^ Error: expect(locator).toBeVisible() failed
  72  |             timeout: 30000
  73  |         });
  74  | 
  75  |         await this.addEmployeeMenu.click();
  76  | 
  77  |         await this.page.waitForLoadState(
  78  |             'domcontentloaded'
  79  |         );
  80  | 
  81  |     }
  82  | 
  83  |     async clickEmployeeList() {
  84  | 
  85  |         await this.page.waitForTimeout(2000);
  86  | 
  87  |         await this.employeeListMenu.click();
  88  | 
  89  |         await this.page.waitForLoadState(
  90  |             'domcontentloaded'
  91  |         );
  92  | 
  93  |     }
  94  | 
  95  |     async enterFirstName(firstName) {
  96  | 
  97  |         await expect(this.firstNameInput).toBeVisible({
  98  |             timeout: 30000
  99  |         });
  100 | 
  101 |         await this.firstNameInput.fill(firstName);
  102 | 
  103 |     }
  104 | 
  105 |     async enterMiddleName(middleName) {
  106 | 
  107 |         await expect(this.middleNameInput).toBeVisible({
  108 |             timeout: 30000
  109 |         });
  110 | 
  111 |         await this.middleNameInput.fill(middleName);
  112 | 
  113 |     }
  114 | 
  115 |     async enterLastName(lastName) {
  116 | 
  117 |         await expect(this.lastNameInput).toBeVisible({
  118 |             timeout: 30000
  119 |         });
  120 | 
  121 |         await this.lastNameInput.fill(lastName);
  122 | 
  123 |     }
  124 | 
  125 |     async clickSaveButton() {
  126 | 
  127 |         await this.saveButton.waitFor({
  128 |             state: 'visible',
  129 |             timeout: 30000
  130 |         });
  131 | 
  132 |         await this.saveButton.click();
  133 | 
  134 |         await this.page.waitForLoadState(
  135 |             'domcontentloaded'
  136 |         );
  137 | 
  138 |     }
  139 | 
  140 |     async addEmployee(firstName, middleName, lastName) {
  141 | 
  142 |         await this.enterFirstName(firstName);
  143 | 
  144 |         await this.enterMiddleName(middleName);
  145 | 
  146 |         await this.enterLastName(lastName);
  147 | 
  148 |         await this.clickSaveButton();
  149 | 
  150 |     }
  151 | 
  152 |     async searchEmployee(employeeName) {
  153 | 
  154 |         await expect(this.employeeSearchInput).toBeVisible({
  155 |             timeout: 30000
  156 |         });
  157 | 
  158 |         await this.employeeSearchInput.clear();
  159 | 
  160 |         await this.employeeSearchInput.fill(employeeName);
  161 | 
  162 |         await this.page.waitForTimeout(2000);
  163 | 
  164 |         await expect(this.searchButton).toBeVisible({
  165 |             timeout: 30000
  166 |         });
  167 | 
  168 |         await this.searchButton.click();
  169 | 
  170 |         await this.page.waitForLoadState(
  171 |             'domcontentloaded'
```