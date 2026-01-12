import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';

import users from '../fixtures/users.json' with {type:'json'};

test('invalid login attempts', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.waitForLoadState('networkidle');
    await loginPage.login(users.invalidUser1.username,users.invalidUser1.password);
    await loginPage.getErrorMessage();
    let attempts_prior_to_block = 1;
    while(await loginPage.getErrorMessage()!='Your account has been locked because the number of consecutive log-in failures exceed the maximum allowed.')
    {
        await loginPage.login(users.invalidUser.username,users.invalidUser.password);
        attempts_prior_to_block++;
    }
    console.log(attempts_prior_to_block);    
});