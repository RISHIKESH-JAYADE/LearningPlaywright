import {test,expect} from '@playwright/test';


test('testing shadowDOM', async ({page})=>{

    await page.goto('/shadowdom');
    //playwright penetrates directly into the shadow dom.
   console.log(await page.locator('#shadow-host button').textContent()); 

});