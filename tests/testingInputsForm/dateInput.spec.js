import {test,expect} from '@playwright/test';

test('date box testing',async ({page})=>{
    await page.goto('/inputs');
    await page.locator('#input-date').fill(String('2025-01-22'));
    //await page.locator('#input-date').fill(String('2025/01/22'));
    
    await page.locator('#btn-display-inputs').click();
    console.log(await page.locator('#output-date').textContent());
});