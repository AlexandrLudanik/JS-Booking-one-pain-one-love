const Element = require('../actions/element');

class SignInPage {
    constructor(){
        this.emailField = new Element('Email field', "//*[@id='username']");
        this.nextButton = new Element('Button "Next"', "//*[@type='submit']");
        this.passwordField = new Element('Password field', "//*[@id='password']");
        this.signInButton = new Element('Button "Sign In"', "//*[@type='submit']");
        this.loginErrorMessade = new Element('Login Error message', "//*[@id='username-error']");
        this.passwordErrorMessade = new Element('Password Error message', "//*[@id='password-error']");
    };

    typeLogin(login){
        return this.emailField.typeText(login);
    };

    clickNextButton(){
        return this.nextButton.click();
    };

    typePassword(password){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.passwordField.element), 5000);
        return this.passwordField.typeText(password);
    };

    clickSignInButton(){
        return this.signInButton.click();
    };

    async isLoginErrorExist(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.loginErrorMessade.element), 5000);
        const isLoginErrorVisible = await this.loginErrorMessade.isDisplayed();
        return isLoginErrorVisible;
    };

    async isPasswordErrorExist(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.passwordErrorMessade.element), 5000);
        const isPasswordErrorVisible = await this.passwordErrorMessade.isDisplayed();
        return isPasswordErrorVisible;
    };
};

module.exports = SignInPage;

