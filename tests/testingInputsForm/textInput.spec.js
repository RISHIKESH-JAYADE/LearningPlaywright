import {test,expect} from '@playwright/test';

const testCases= [
    {value:"asdfg",expect:"asdfg"},
    {value: "QWERTY", expect:"QWERTY"},
    {value:"QWERTY@_!;/", expect:"QWERTY@_!;/"},
    {value:1234353, expect:"1234353"},
    {value:"1232Aderevwe",expect:"1232Aderevwe"},
    {value:")*&^asdfhjklqwertyuiopzxcvbnm,.,]\'.[;.1234567890=-0!@#$%^&*()",
        expect:")*&^asdfhjklqwertyuiopzxcvbnm,.,]\'.[;.1234567890=-0!@#$%^&*()"}
]

test.describe('text box testing', ()=>{

    for(const test_case of testCases){
        test(`handle the input ${test_case.value}`, async ({page})=>{
            await page.goto('/inputs');
            const inputbox = page.locator('#input-text');
            const outputbox = page.locator('#output-text');
            const displayBtn = page.locator('#btn-display-inputs');

            await inputbox.fill(String(test_case.value));
            await displayBtn.click();

            await expect(outputbox).toHaveText(test_case.expect);
            
        });

    }


});