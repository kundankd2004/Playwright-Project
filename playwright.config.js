// @ts-check
import dotenv from 'dotenv';

dotenv.config();

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  timeout: 120000,

  retries: 1,

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

    trace: 'on-first-retry',

    actionTimeout: 60000,

    navigationTimeout: 120000,

    launchOptions: {
        slowMo: 0
    }
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }
  ]
});