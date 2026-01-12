//Create a class for login page.
/*
This should include:
- Locators (UI elements)
- Actions (things a user can do)
- Page-specific behavier

Page is the object
page is the fixture 

*/

export class LoginPage {

    /**JSDoc comments
     * 
     * @param {import('@playwright/test').Page} page 
     */
    //constructor will have all the functional locators.
    //As soon as LoginPage object is created all the locators are set.
    //define once and user everywhere
    constructor(page){
        this.page = page;
        this.usernameInput = page.locator('#j_username');
        this.passwordInput = page.locator('#j_password');
        this.loginButton = page.locator('#loginbtn');
        this.errorMessage = page.locator('div.login-error-message:visible');

    }

    //Navigation Methods
    async goto(){
        await this.page.goto('/pentaho/Login');
    }

    async login(username,password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
    async getErrorMessage(){
        return this.errorMessage.textContent();
    }


}