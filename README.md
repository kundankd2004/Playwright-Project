# Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![NodeJS](https://img.shields.io/badge/NodeJS-Backend-brightgreen)
![Jenkins](https://img.shields.io/badge/CI/CD-Jenkins-red)
![Allure Report](https://img.shields.io/badge/Reporting-Allure-purple)

## Allure Test Execution Report

Here is the Allure execution report showing a **98.21% pass rate** (551/561 passed tests) across Chromium, Firefox, and Webkit:

![Allure Test Execution Report](./reports/allure_report_screenshot.png)

## Project Overview

This project is a robust, production-ready end-to-end test automation framework built using **Playwright** with **JavaScript**. The framework is designed to automate the OrangeHRM demo application, leveraging the **Page Object Model (POM)** design pattern. It supports UI testing, API testing, and Data-Driven Testing.

---

## Tech Stack

- **Core**: Playwright Test Runner
- **Language**: JavaScript (ES6+)
- **CI/CD**: Jenkins, GitHub Actions
- **Reporting**: Allure Reports, Playwright HTML Reports
- **Libraries**:
  - `dotenv` (Environment variable management)
  - `express` (Mock API/server support)
  - `@sheetjs/xlsx` (Secure Excel parsing via CDN)

---

## Project Structure

```text
Playwright-Project/
├── api-tests/          # API verification suites
├── fixtures/           # Playwright fixtures (e.g. baseFixture.js with auto-login)
├── pages/              # Page Object classes (POM)
├── public/             # Mock web assets / Server static files
├── test-data/          # Excel and JSON data files
├── tests/              # UI spec tests (24 files, 560+ test cases)
├── utils/              # Custom logger, Excel reader, hooks
├── Jenkinsfile         # CI/CD declarative pipeline script
├── playwright.config.js# Framework options & browser profiles
└── package.json        # Dependencies & test scripts
```

---

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kundankd2004/Playwright-Project.git
   cd Playwright-Project
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (this file is excluded from Git tracking for security):
   ```env
   BASE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
   APP_USERNAME=Admin
   APP_PASSWORD=admin123
   ```

4. **Install Browsers (with Space Constraints)**:
   If your primary system drive (`C:`) is running low on space, you can redirect the download and temporary storage folders to a secondary drive (e.g., `D:`) by setting the following environment variables:
   ```powershell
   # PowerShell (Windows)
   New-Item -ItemType Directory -Force -Path "D:\temp"
   $env:TEMP="D:\temp"
   $env:TMP="D:\temp"
   $env:PLAYWRIGHT_BROWSERS_PATH="D:\ms-playwright"
   npx playwright install
   ```
   For permanent usage, append `PLAYWRIGHT_BROWSERS_PATH=D:\ms-playwright` to your local `.env` file.

---

## Running Tests

We have configured several npm scripts in `package.json` to make running specific test groups easy:

- **Run all tests**:
  ```bash
  npm run test
  ```

- **Run Sanity suite**:
  ```bash
  npm run test:sanity
  ```

- **Run Smoke suite**:
  ```bash
  npm run test:smoke
  ```

- **Run Regression suite**:
  ```bash
  npm run test:regression
  ```

- **Run API tests**:
  ```bash
  npm run test:api
  ```

- **Run on a specific browser**:
  ```bash
  npm run test:chromium  # Run Chromium only
  npm run test:firefox   # Run Firefox only
  npm run test:webkit    # Run Webkit (Safari) only
  ```

---

## Reporting

Allure reports are integrated out of the box.

1. **Generate the Allure Report**:
   ```bash
   npm run allure:generate
   ```

2. **Open the Report**:
   ```bash
   npm run allure:open
   ```

---

## CI/CD Jenkins Integration

This repository includes a [Jenkinsfile](./Jenkinsfile) for Pipeline execution. 

### Jenkins Job Steps:
1. **Checkout**: Automatically pulls code from GitHub.
2. **Install Dependencies**: Installs npm packages and installs Playwright browsers.
3. **Run Test Phases**: Separately triggers Sanity, Smoke, and Regression steps.
4. **Publish Reports**: Publishes both the Playwright HTML report and compiles/displays Allure reports in the Jenkins workspace dashboard.

---

## Security & Best Practices

- **Zero Vulnerabilities**: Checked via `npm audit`. Shifted from deprecated `xlsx` to secure CDN SheetJS packages to avoid Prototype Pollution.
- **Ignored Files**: Local environment `.env`, runtime `/logs/`, Allure directories (`allure-results/`, `allure-report/`), and Playwright test outputs (`test-results/`) are excluded from Git to prevent tracking sensitive data or redundant assets.