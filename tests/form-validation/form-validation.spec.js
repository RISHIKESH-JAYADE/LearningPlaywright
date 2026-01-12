import {test,expect} from '@playwright/test';

test('Form validation', async ({page})=>{
    await page.goto('/form-validation');

    let contactName = page.locator('#validationCustom01');
    let contactNum = page.locator("input[name='contactnumber']");
    let date = page.locator("input[name='pickupdate']");
    let paymentMethod = page.locator("select[name='payment']");

    await contactName.fill('Rishikesh');
    await contactNum.fill('012-3456789');
    await date.fill('2022-02-22');
    await paymentMethod.selectOption('card');

    await page.locator("button[type='submit']").click();

    await page.waitForURL('**/form-confirmation');
    
    console.log(await page.locator('.alert').textContent());
    

});