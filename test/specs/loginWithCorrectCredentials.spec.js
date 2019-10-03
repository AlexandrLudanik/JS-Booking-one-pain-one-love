const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");

describe("Home page header", function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();
    });

    it('should login with correct credentials', async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSignInButton();
        await PageFactory.getPage('SignIn').typeLogin();
        await PageFactory.getPage('SignIn').clickNextButton();
        await PageFactory.getPage('SignIn').typePassword();
        await PageFactory.getPage('SignIn').clickSignInButton();
        const isLogoExist = await PageFactory.getPage("Home").isYourLogoAccountExist();
        expect(isLogoExist).to.be.equal(true);
    })
});