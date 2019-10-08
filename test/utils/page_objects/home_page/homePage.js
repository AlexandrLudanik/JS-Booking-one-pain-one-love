const BasePage = require('../base_page/basePage');
const Element = require('../actions/element');

class HomePage extends BasePage {
    constructor() {
        super();
        this.searchCityField = new Element('Search destination field', "//*[@id='ss']");
        this.searchButton = new Element('Button "Search"', "//*[text()='Search']/..");
        this.yourAccountLogo = new Element('Logo "Your account"', "//*[@id='current_account']");
        this.url = "https://www.booking.com";
        this.dateField = new Element('Date field', "//*[@class='xp__dates-inner']");
        this.nearestSaturday = new Element('Nearest Saturday', "(//td[6][@class='bui-calendar__date'])[1]");
        this.nearestSunday = new Element('Nearest Sunday', "(//td[7][@class='bui-calendar__date'])[1]");
    };

    open(url) {
        return super.open(this.url);
    };

    async typeDestinationPlace(city) {
        await this.searchCityField.typeText(city);
    };

    async clickSearchButton() {
        await this.searchButton.wait();
        await this.searchButton.click();
    };

    async clickDateField() {
        await this.dateField.wait();
        await this.dateField.click();
    };

    async chooseNearestWeekend() {
        await this.nearestSaturday.wait();
        await this.nearestSaturday.click();
        await this.nearestSunday.wait();
        await this.nearestSunday.click();
    };

    async isYourLogoAccountExist() {
        await this.yourAccountLogo.wait();
        return await this.yourAccountLogo.isDisplayed();
    };
};

module.exports = HomePage;