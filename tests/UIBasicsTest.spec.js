//const {test} = require('@playwright/test');
import {test,expect, selectors} from '@playwright/test';
import { getRandomValues } from 'crypto';
//asyncronous function:
// A function designed to handle operations that take time without blocking the main thread of execution.
// It returns a promise.
// await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues.

test( 'fixture context playwright test', async function({browser}){
    //fixtures are pre-built objects/resources that playwright gives to your test function automatically.
    const context = await browser.newContext(); //create a new browser context/open the browser in incognito.
    const page = await context.newPage(); //create a new page/open a new tab
    page.goto("http://localhost:8080/pentaho");
});

//The above code snippet can be written as below.

//fat operator or arrow function
test ( 'page playwright test', async ({browser,page}) =>{
    //every command should start with await.Observe the below code.

    // 1. await page.goto("http://localhost:8080/pentaho");
    // 2. console.log(await page.title());
    // 3. expect(page).toHaveTitle("Pentaho User Console");

    //as the 3rd line doesnot have await, it will execute at before executing 1st statement.
    //causing error as javascript is asynchronous.

    await page.goto("http://localhost:8080/pentaho");
    console.log(await page.title());
    //test assertion function - verify if the page or element, or value matches the expected condition.
    await expect(page).toHaveTitle("Pentaho User Console - Login");

    
});