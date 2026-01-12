import {test,expect} from '@playwright/test';
import users from '../fixtures/users.json' with {type:"json"};
import { LoginPage } from '../pages/login.page';

//setup

test('invalid login',async ({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username,users.invalidUser.password);
    console.log(await loginPage.getErrorMessage());
    

});
test('valid login', async ({page})=>{
    const loginPage = new LoginPage(page);
     
    await loginPage.goto();
    console.log( page.url());
    
    await loginPage.login(users.validUser.username,users.validUser.password);
    await page.waitForURL('**/pentaho/Home');
    await expect(page).toHaveURL('/pentaho/Home');
    //await page.pause();

});



