import {test,expect} from '@playwright/test';


test('Testing upload functinality',async ({page})=>{
    await page.goto('/upload');

    //Promise.all() returns an array of results. Only waitForEvent returns a value and page.click() returns void
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#fileInput').click()
    ]);

    await fileChooser.setFiles("C:\\Users\\rjayade\\Downloads\\eTicket-jai-hyd-merged.pdf");
    await page.locator('#fileSubmit').click();

    await expect(page.locator('h1')).toHaveText('File Uploaded!');
    console.log(await page.locator('#uploaded-files').textContent());
    
    

    


});