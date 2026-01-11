import {expect, test} from '@playwright/test';
//the test function always expects a async func

test('Learning Locators with inputs', async ({page,baseURL})=>{
    const path= "inputs";
    console.log(baseURL+'/'+path);
    await page.goto('/'+path);
    
    //selector rules
    //ID
    //css -> tagname#id or #id
    //example: <input id='j_username'> -> input#j_username -> #j_username(tagname is optional)
    
    //Class
    //css -> tagname.class
    //example: <input class='collections'> -> input.collections -> .collections

    //Any Attribute
    //css -> [attribute='value'] 
    //expample <input username='j_username'> -> [username='j_username']


    const int_input = page.locator('#input-number');
    await int_input.fill(String(6798));
    await page.locator("[name='input-text']").fill("Rishikesh");
    await page.locator("[name='input-password']").fill("asdfwe@$%");
    await page.locator("#input-date").fill('2025-01-22');
    await page.locator('#btn-display-inputs').click()
    
    //Using locator we filled a form and this test case passed successfully.


});

