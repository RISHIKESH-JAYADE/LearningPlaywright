import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>{
console.log(`Running ${test.info().title}`);
await page.goto('/add-remove-elements');

});

test('add element',async ({page})=>{
    

    await page.getByText('Add Element').click();
    await page.getByText('Add Element').click();
    await page.getByText('Add Element').click();

    expect(await page.getByText('Delete').count()).toBe(3);

    await page.getByText('Delete').nth(1).click();

    expect(await page.getByText('Delete').count()).toBe(2)

});

