const logger = require('../../../config/logger.config');

class Collection {
    constructor(elementName, xpath) {
        this.collection = element.all(By.xpath(xpath));
        this.elementName = elementName;
    };

    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of ${this.elementName} is ${collectionCount}`);
        return collectionCount;
    };

    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Text of "${this.collection}" are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };

    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found`);
        }
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        return this.collection.get(elementToClickIndex).click();
    };

    async wait(){
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.collection), 5000);
    };
};

module.exports = Collection;