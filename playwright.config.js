// @ts-check

import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  retries: 1,

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

    ignoreHTTPSErrors: true

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