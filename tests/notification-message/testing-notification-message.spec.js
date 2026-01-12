import {test,expect} from '@playwright/test';

test('Notification when users logs with incorrect password',async ({page})=>{

    await page.goto('/notification-message-rendered');

    await expect(page.getByRole('alert')).toBeHidden();

    //await page.locator("button[aria-label='Close']").click();
    await page.getByText('Click here').click();

    await expect(page.getByRole('alert')).toBeVisible();

});