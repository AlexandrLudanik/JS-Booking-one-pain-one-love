const logger = require('../../../config/logger.config');
const Header = require('./header');

class BasePage {
    constructor() {
        this.Header = new Header();
    };

    wait(waitInMilliSeconds) {
        logger.logger.info(`Waiting "${waitInMilliSeconds}" milliseconds`);
        return browser.sleep(waitInMilliSeconds);
    };

    async getCurrentUrl() {
        const currentUrl = browser.getCurrentUrl();
        logger.logger.debug(`Current url is "${currentUrl}"`);
        return currentUrl;
    };

    open(url) {
        logger.logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
};

module.exports = BasePage;