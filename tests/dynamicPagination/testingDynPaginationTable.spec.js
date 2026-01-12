
import {test,expect} from '@playwright/test'

test('pagination testing', async ({browser})=>{
  
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/dynamic-pagination-table');
    

    const pagination_locator = page.locator('li.paginate_button.page-item');
    const result = page.locator('#example_info');
    const entries = page.locator('.form-select.form-select-sm');
    const numRows=5;
    await entries.selectOption(String(numRows));
    
    console.log(numRows);

    //expect(await page.locator('#example tbody tr').count()).toHaveText(numRows);
    
    for(let i=1;i<(await pagination_locator.count())-1;i++){
        await pagination_locator.nth(i).click();
        console.log(await result.textContent());
        const rows= await page.locator('#example tbody tr').count();
        expect(rows).toBeLessThanOrEqual(numRows);


    }
});