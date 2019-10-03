const Element = require('../actions/element');

class SignInPage {
    constructor(){
        this.emailField = new Element('Email field', "//*[@id='username']");
        this.nextButton = new Element('Button "Next"', "//*[@type='submit']");
        this.login = 'sysrq08884@mail.ru';
        this.passwordField = new Element('Password field', "//*[@id='password']");
        this.signInButton = new Element('Button "Sign In"', "//*[@type='submit']");
        this.password = 'Testbooking';
    };

    typeLogin(login){
        return this.emailField.typeText(this.login);
    };

    clickNextButton(){
        return this.nextButton.click();
    };

    typePassword(password){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.passwordField.element), 5000);
        return this.passwordField.typeText(this.password);
    };

    clickSignInButton(){
        return this.signInButton.click();
    }
};

module.exports = SignInPage;

