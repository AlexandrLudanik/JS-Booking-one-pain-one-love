
const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, selector){
        this.element = element(By.xpath(selector));
        this.elementName = elementName;
    }
    click(){
        logger.logger.info(`Cliking "${this.elementName}"`);
        return this.element.click();
    };

    async getText(){
        const elementText = await this.element.getText();
        logger.logger.info(`${this.element} element text is ${elementText}`);
        return elementText;
    };

    async typeText(text){
        logger.logger.info(`Type ${text} to ${this.elementName}`)
        return await this.element.sendKeys(text);
    };

    async isDisplayed(){
        const isDisplayed = await this.element.isDisplayed();
        logger.logger.info(`${this.elementName} element is displayed ${isDisplayed.toString()}`);
        return isDisplayed;
    }
};

module.exports = Element;