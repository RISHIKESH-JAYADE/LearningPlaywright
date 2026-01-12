import {test,expect} from '@playwright/test';
//There is defect in the web page or my test case is 
const testCases = [3,5,10,'All'];

test.describe('testing entries in page', ()=>{
    let page;
    test.beforeAll('loadingPage',async ({browser})=>{
        const context = await browser.newContext();
        page = await context.newPage();
        
        
        await page.goto('/dynamic-pagination-table');

        //const col_list  = await page.locator('#example thead tr th').all()

        
    });

    for (const test_case of testCases ){
        test(`number of rows ${test_case} in each page`, async ()=>{

            
                await page.locator('.form-select.form-select-sm').selectOption(`${test_case}`);

                const next_link = page.locator('#example_next a');
                let start = 1;
                while(true){
                    const row_count = await page.locator('#example tbody tr').count();
                    console.log(row_count);
                    console.log(`showing ${start} to ${start+row_count-1} of 10 entries `);
                    //expect(row_count).toBeLessThanOrEqual(`${test_case}`);
                    if(await next_link.getAttribute('aria-disabled') ==='true'){
                        console.log("next link disabled");
                        break;
                    }  
                    await next_link.click();  
                    start = start+row_count;
                }    
                    
            

        });
    }  


});