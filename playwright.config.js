// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

//we can change the fixture values from this file.
export default defineConfig({
  testDir: './tests', //specify the path where all tests are defined.
  reporter: 'html', // the generated test report format
  timeout: 60 * 1000, //global timeout for each test. so max 30sec for each test to perform.
  expect: {         //when we use expect assertion, this timeout will wait for it to complete.
    timeout: 5000 
  },
 
  use: {
    browserName: 'chromium',
    headless : true,
    baseURL: 'https://practice.expandtesting.com/'
    
  },

 

});

