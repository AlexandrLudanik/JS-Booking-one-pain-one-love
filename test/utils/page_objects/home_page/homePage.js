const BasePage = require('../base_page/basePage');
const Element = require('../actions/element');
const logger = require('../../../config/logger.config');

class HomePage extends BasePage{
    constructor(){
        super();
        this.searchField = new Element('Search destination field', "//*[@id='ss']");
        this.destinationCity = 'Minsk';
        this.searchButton = new Element('Button "Search"', "//*[text()='Search']/..");
        this.yourAccountLogo = new Element('Logo "Your account"', "//*[@id='current_account']");

    };

    open(url) {
        return super.open(url);
    };

    typeDestinationPlace(){
        logger.logger.info(`Type place destination "${this.destinationCity}"`);
        this.searchField.typeText(this.destinationCity);
    };

    clickSearchButton(){
        logger.logger.info(`Clicking ${this.searchButton}`);
        this.searchButton.click();
    };

    async isYourLogoAccountExist(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(this.yourAccountLogo.element), 5000);
        const isYourAccountVisible = await this.yourAccountLogo.isDisplayed();
        return isYourAccountVisible;
    }
};

module.exports = HomePage;