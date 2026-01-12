import {test,expect} from '@playwright/test';

const testCases = [
    {value: 'valid creds',username:'rishi11',password1:'1234',password2:'1234',expectation:"Successfully registered, you can log in now."},
    {value: 'same username and creds twice',username:'rishi11',password1:'1234',password2:'1234',expectation:"An error occurred during registration. Please try again."},
    {value: 'password mismatch',username:'rishi11',password1:'12345', password2:'1234',expectation:"Passwords do not match."},
    {value: 'password length',username:'rishi11', password1:'123',password2:'123',expectation:'Password must be at least 4 characters long.'},
    {value: 'empty',username:'',password1:'',password2:'',expectation:"All fields are required."}
]

test.describe('Testing register page',()=>{

    for(const test_case of testCases){
        
        test(`testing scenario: ${test_case.value} `, async ({page})=>{
            await page.goto('/register');

            const uname = page.locator('#username');
            const pw = page.locator('#password');
            const cpw = page.locator('#confirmPassword');
            const reg_btn = page.locator("[type='submit']");
            const result = page.locator("[role='alert'] b");

            await uname.fill(test_case.username);
            await pw.fill(test_case.password1);
            await cpw.fill(test_case.password2);
            
            await reg_btn.click();
            await page.waitForLoadState('networkidle');
            if (test_case.value === 'valid creds'){
                //await expect(page).toHaveURL('/login');
                await expect(page.locator("[role='alert'] b")).toHaveText(test_case.expectation);

            }
            else {
                await expect(result).toHaveText(test_case.expectation);
               
            }
        
        });
            
    }

});