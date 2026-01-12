import {test,expect} from '@playwright/test';


test('dynamic table test', async ({page}) =>{
    await page.goto('/dynamic-table');
    const col_names = await page.locator('.table thead tr th').all(); 
    //all() func returns all the locators with matching tags.
    let name_index,cpu_index;
    for(let i=0;i<col_names.length;i++){
        const st = await col_names[i].textContent();
        console.log(st.trim());
        if (st==='Name'){
            name_index=i;
        }
        else if (st==='CPU'){
            cpu_index = i;
        }
    }
    console.log(name_index,cpu_index);

    const cells = await page.locator('.table tbody tr td').all();
    let expectation = await page.locator('#chrome-cpu').textContent();
    console.log('expectations: '+expectation.split(' ')[2]);
    let i=0
    while(i<cells.length){
        const st1 = await cells[i].textContent();
        console.log(st1);
        if(st1 ==='Chrome'){
            console.log(await cells[i+cpu_index].textContent());
            
            expect(await cells[i+cpu_index].textContent()).toBe(expectation.split(' ')[2])
        }
        i=i+col_names.length;
        
    }



});


