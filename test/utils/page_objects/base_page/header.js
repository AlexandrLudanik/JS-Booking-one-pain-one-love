const Element = require('../actions/element');
const Collection = require('../actions/collection');

class Header {
    constructor() {
        this.navigateButtons = new Collection("Navigate Buttons", "div#cross-product-bar");
        this.signInButton = new Element("'Sign in' button", "(//div[@class='sign_in_wrapper'])[2]");
    };

    async clickSignInButton() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.signInButton.element), 5000);
        return this.signInButton.click();
    }
};

module.exports = Header;