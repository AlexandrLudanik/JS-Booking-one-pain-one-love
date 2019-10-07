const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, xpath) {
        this.element = element(By.xpath(xpath));
        this.elementName = elementName;
    };

    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };

    async getText() {
        const elementText = await this.element.getText();
        logger.info(`${this.element} element text is ${elementText}`);
        return elementText;
    };

    async typeText(text) {
        logger.info(`Type "${text}" to ${this.elementName}`);
        return await this.element.sendKeys(text);
    };

    async isDisplayed() {
        logger.info(`"${this.elementName}" text is displayed`);
        return await this.element.isDisplayed();
    };

    async wait(){
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.element), 5000);
    };
};

module.exports = Element;