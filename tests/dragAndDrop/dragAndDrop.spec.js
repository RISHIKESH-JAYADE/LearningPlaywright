import {test,expect} from '@playwright/test';

test('drag and drop', async ({page})=>{
    await page.goto('/drag-and-drop');

    await page.locator('#column-a').dragTo(page.locator('#column-b'));
    console.log('column-a:' + await page.locator('#column-a header').textContent());
    console.log('column-b:' + await page.locator('#column-b header').textContent());
    
    await expect(page.locator('#column-a header')).toHaveText('B');
    await expect(page.locator('#column-b header')).toHaveText('A');

});