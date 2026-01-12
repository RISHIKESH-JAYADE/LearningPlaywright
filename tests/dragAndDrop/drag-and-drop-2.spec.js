import {test,expect} from '@playwright/test';

test('drag circles to containers', async ({page})=>{

    await page.goto('/drag-and-drop-circles');
    let blue = page.locator('.blue');
    let green = page.locator('.green');
    let red = page.locator('.red');
    let container = page.locator('#target');

    await blue.dragTo(container);
    await red.dragTo(container);
    await green.dragTo(container);

    
    await expect(container.locator('div').nth(0)).toContainClass('blue');
    await expect(container.locator('div').nth(1)).toContainClass('red');
    await expect(container.locator('div').nth(2)).toContainClass('green');


});