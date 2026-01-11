import {test,expect} from '@playwright/test';


test('testing Radio buttons',async ({page})=>{
    await page.goto('/radio-buttons');
    await page.locator('#red').click();
    await page.locator('#basketball').click();
    //console.log(await page.locator('#red').isEnabled());
    //console.log(await page.locator('#black').isEnabled())
    await expect(page.locator('#red')).toBeChecked();
    await expect(page.locator('#basketball')).toBeChecked();
    await expect(page.locator('#blue')).toBeEnabled();
    await expect(page.locator('#green')).toBeDisabled();


    //enabled vs checked.
    
    await page.pause();

});