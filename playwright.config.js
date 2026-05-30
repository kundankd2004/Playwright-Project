// @ts-check

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

process.env.BASE_URL = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
process.env.APP_USERNAME = process.env.APP_USERNAME || 'Admin';
process.env.APP_PASSWORD = process.env.APP_PASSWORD || 'admin123';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  retries: process.env.CI ? 2 : 1,

  timeout: 120000,

  expect: {
    timeout: 15000
  },

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  use: {

    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 30000,

    navigationTimeout: 60000,

    ignoreHTTPSErrors: true,

    launchOptions: {
      slowMo: 1000
    }

  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]

});