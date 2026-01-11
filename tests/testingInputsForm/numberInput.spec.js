import {expect, test} from '@playwright/test';
const select_int_input = '#input-number';
const select_submit = '#btn-display-inputs';
const select_int_output = '#output-number';

const testCases =[
    {value: 0,expected:'0'},
    {value: 9.9, expected:'9.9'},
    {value:7684, expected:'7684'}
    //As the input type is number, only number values are allowed.
    // {value: 'adk', expected:null}, 
    // {value: '',expected:null},
    // {value: '014',expected:null}

];


//test.describe is a grouping utility in playwright that helps organise related tests together.
//logically grouped in test report.

test.describe('Number input test', ()=>{


test('up/down arrow' ,async ({page}) => {
    await page.goto('/inputs');
    
    await page.locator(select_int_input).fill(String(99.90));
    await page.locator(select_int_input).focus() //ensures the element becomes active element for keyboard input or other interactions.
    await page.locator(select_int_input).press('ArrowUp');//ArrowUp indicates up arrow.

    await page.locator(select_submit).click();
    await expect(page.locator(select_int_output)).toHaveText('100');
    //toHaveText() or textContent() to get the text from a div,text,label
});

test('test with -ve integer',async ({page})=>{
    await page.goto('/inputs');
    await page.locator(select_int_input).fill(String(-9999));
    await page.locator(select_submit).click();
    await expect(page.locator(select_int_output)).toHaveText('-9999');

});

    for(const test_case of testCases){
        test(`should handle input:${test_case.value}`,async ({page})=>{
            await page.goto('/inputs');
            await page.locator(select_int_input).fill(String(test_case.value));
            await page.locator(select_submit).click();
            await expect(page.locator(select_int_output)).toHaveText(test_case.expected);
        });

    }





});