import {expect,test} from '@playwright/test';

test('interview preparation', async ({browser,baseURL}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("/inputs");
    const button = page.locator('#btn-display-inputs');

    await button.click();

    await expect(button).toBeVisible();

    //event handling mechanism
    // events that occur within the browser page context, such as 
    // network requests, 
    // console messages, 
    // dialog boxes, and 
    // page lifecycle events.
    
    
    // page.on('dialog', async (dialog) =>{
    //     dialog.accept();
    // });
    
    // await page.locator('#alert-button').click();

});


//API Testing
// test('api Testing',async ({request,baseURL})=>{
//     const response = await request.get(baseURL + '/api/users?page=2');
//     expect(response.status()).toBe(200);
// });