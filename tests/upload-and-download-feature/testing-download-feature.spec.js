import {test,expect} from '@playwright/test';


test('download feature', async ({page})=>{
    await page.goto('/download');
    const download_locator = page.locator("a[data-testid$='1766043096524_eTicket-jai-hyd-merged.pdf']")

    const [download] =  await Promise.all([
        page.waitForEvent('download'),
        download_locator.click()
    ]);

    expect(download.suggestedFilename()).toMatch('1766043096524_eTicket-jai-hyd-merged.pdf');
    //this doesnt save the file. 
    //use download.saveAs() to save the file in file system.

}); 