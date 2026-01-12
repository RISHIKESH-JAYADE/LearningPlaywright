import {test,expect} from '@playwright/test';

const TestCases = [
    {value: 'valid',username:'practice',password:'SuperSecretPassword!'},
    {value: 'incorrect username',username:'rishi',password:'SuperSecretPassword!'},
    {value: 'incorrect password',username:'practice',password:'123'}

]

test.describe('login page testing scenarios',()=>{

    for(const test_case of TestCases){

        test(`handling test case ${test_case.value}`,async ({page})=>{

            await page.goto('/login');
            const uname = page.locator('#username');
            const pw = page.locator('#password');
            const login = page.locator('#submit-login');

            await uname.fill(test_case.username);
            await pw.fill(test_case.password);
            await login.click();
            if(test_case.value === 'valid'){
                await expect(page).toHaveURL('/secure');
                await expect(page.locator("[role='alert'] b")).toHaveText('You logged into a secure area!');
            }
            else{ 
                if(test_case.value === 'incorrect password'){
                    await expect(page.locator("[role='alert'] b")).toHaveText("Your password is invalid!");    
                }
                else{
                    await expect(page.locator("[role='alert'] b")).toHaveText("Your username is invalid!");    
                }
            }        
        });
    }
});