import {test,expect} from '@playwright/test';

test('testing autocomplete feaure',async ({page})=>{
    
    await page.goto('/autocomplete');
    page.pause()
    const countryName = page.locator('#country');
    const countryList = page.locator('#countryautocomplete-list');
    const submitBtn = page.getByText('Submit');
    const result = page.locator('#result');
    await countryName.fill('u');
    await expect(countryList).toBeVisible();

    await countryList.locator('div').nth(2).click();

    await submitBtn.click();

    expect(result).toBeVisible();
    console.log(await result.textContent());
    





});