import {test,expect} from '@playwright/test';

test('learning Locators', async ({browser,baseURL})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/locators');

    await page.getByRole('button',{name: 'Add Item'}).click(); //it will not perform anything.

    await page.getByRole("link",{name:'Contact'}).click()//new window or tab will be opened.
    
    await page.waitForURL('**/contact');
    console.log(page.url());
    await expect(page.getByRole('heading', { name: 'Contact page for Automation Testing Practice' })).toBeVisible();
    //page.pause()


    await page.goBack();

    console.log(await page.getByText('Hot').textContent());
    
    console.log(await page.getByLabel('Choose a country').selectOption('Japan'));
     
    await page.getByLabel('Email').fill('rishi@gmail.com');

    await page.getByPlaceholder('Search the site').fill('hello world');

    await page.getByAltText('user avatar').highlight();
    await page.getByTitle('Refresh content').highlight();
    console.log(await page.getByTestId('status-message').textContent());
     
    //await page.pause();

});