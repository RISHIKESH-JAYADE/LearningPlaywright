import {test,expect} from '@playwright/test';

test('Opening a new window', async ({browser})=>{
   const context =  await browser.newContext();
    const page = await context.newPage();
    await page.goto('/windows');
    const Link = page.locator("[href='/windows/new']");

    //test scenario:
    /*
    - click on the link which opens a new window/tab 
    - check the assertions by checking the content on the new tab.

    Approch:
    1) Brute force
        Click on the link (await)
        wait for the new page to load
        get the details of new page
        check assertions.

    Flaws in this approch:
        - Once clicked on the URL, playwright will wait for
            - if the click action is complete
            - elements enabled 
        - it will not wait for 
            - new tab opening
            - new tab loading
            - page content
            - navigation inside the new tab.
        - After click, the browser starts processing new tab.
        - A new tab/windows is created outside of the current page, so playwright does not automatically gives a reference to it.
        - we need to catch the "page" event to get a reference to the newly opened page.
        - the new "page" event is tied to Broswer context.
        - use context.waitForEvent() to listen to browser context for event 'page' to trigger.
        - You need to catch this event at the right moment.
            await newLink.click();          executed at 0th milli-sec.
                                            newPage context emitted at 10ms
            await context.waitForEvent();   listen process started at 20ms.
        - Problem: listening post event occurred will time out because its like waiting for a bus which alredy left. 

        - Solution:
            execute both the commands asynchronously.
            both the commands returns Promise, so use Promise.all();
            The order of execution matters. After click the process might complete without listening command executes.
    */

        const [page2] =  await Promise.all(
            [   
                context.waitForEvent('page'),
                Link.click()
            ]
        );

        await expect(page2.locator(".example h1")).toHaveText("Example of a new window page for Automation Testing Practice");



});