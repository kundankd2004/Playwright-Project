// @ts-check
import dotenv from 'dotenv';

dotenv.config();

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  workers: 3,

  timeout: 30000,

  retries: 0,

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

    actionTimeout: 10000,

    navigationTimeout: 15000,

    launchOptions: {
        slowMo: 0
    }
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]
});