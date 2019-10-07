const BasePage = require('../base_page/basePage');
const Element = require('../actions/element');
const logger = require('../../../config/logger.config');

class HomePage extends BasePage {
    constructor() {
        super();
        this.searchField = new Element('Search destination field', "//*[@id='ss']");
        this.searchButton = new Element('Button "Search"', "//*[text()='Search']/..");
        this.yourAccountLogo = new Element('Logo "Your account"', "//*[@id='current_account']");
        this.url = "https://www.booking.com";
    };

    open(url) {
        return super.open(this.url);
    };

    typeDestinationPlace(city) {
        logger.info(`Type place destination "${city}"`);
        this.searchField.typeText(this.destinationCity);
    };

    clickSearchButton() {
        logger.info(`Clicking ${this.searchButton}`);
        this.searchButton.click();
    };

    async isYourLogoAccountExist() {
        await this.yourAccountLogo.wait();
        return await this.yourAccountLogo.isDisplayed();
    };
};

module.exports = HomePage;