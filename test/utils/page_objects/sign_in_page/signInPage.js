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

    async typeLogin(login){
        await this.emailField.wait();
        return this.emailField.typeText(login);
    };

    async clickNextButton(){
        await this.nextButton.wait();
        return this.nextButton.click();
    };

    async typePassword(password){
        await this.passwordField.wait();
        return this.passwordField.typeText(password);
    };

    async clickSignInButton(){
        await this.signInButton.wait();
        return this.signInButton.click();
    };

    async isLoginErrorExist(){
        await this.loginErrorMessade.wait();
        return await this.loginErrorMessade.isDisplayed();
    };

    async isPasswordErrorExist(){
        await this.passwordErrorMessade.wait();
        return await this.passwordErrorMessade.isDisplayed();
    };
};

module.exports = SignInPage;