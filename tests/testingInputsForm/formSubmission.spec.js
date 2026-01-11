import {test,expect} from '@playwright/test';



test('form submission',async ({page})=>{
    await page.goto('/inputs');
    const inputNum = page.locator('#input-number');
    const inputTxt = page.locator('#input-text');
    const inputPw = page.locator('#input-password');
    const inputDate = page.locator('#input-date');
    const displayButton = page.locator('#btn-display-inputs');

    await inputNum.fill(String(123));
    await inputTxt.fill('Rishikesh');
    await inputPw.fill('qwerty');
    await inputDate.fill('2025-01-22');

    await displayButton.click();


    await expect(page.locator('#output-number')).toHaveText('123');
    await expect(page.locator('#output-text')).toHaveText('Rishikesh');
    await expect(page.locator('#output-password')).toHaveText('qwerty');
    await expect(page.locator('#output-date')).toHaveText('2025-01-22');

});