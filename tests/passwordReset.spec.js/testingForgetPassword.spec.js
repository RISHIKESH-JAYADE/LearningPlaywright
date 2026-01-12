import {test,expect} from '@playwright/test';

test('forget password' ,async ({page})=> {
    await page.goto('/forgot-password');
    const input_email = 'abc@test.com'
    await page.locator('#email').fill(input_email);
    await page.locator('#forgot_password button').click()
    
    await expect(page.locator('#confirmation-alert p')).toHaveText("An e-mail has been sent to you which explains how to reset your password.");
});