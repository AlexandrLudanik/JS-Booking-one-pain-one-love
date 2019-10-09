const Element = require('../elements/element');
const Collection = require('../elements/collection');

class Header {
    constructor() {
        this.navigateButtons = new Collection("Navigate Buttons", "div#cross-product-bar");
        this.signInButton = new Element("'Sign in' button", "(//div[@class='sign_in_wrapper'])[2]");
    };

    async clickSignInButton() {
        await this.signInButton.wait();
        return this.signInButton.click();
    };
};

module.exports = Header;