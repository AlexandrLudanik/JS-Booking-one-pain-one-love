const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");

describe("Login with correct credentials", function () {

    const url = "https://www.booking.com";
    const login ='sysrq08884@mail.ru';
    const password = 'Testbooking';

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();
    });

    // afterEach(function () {
    //     browser.close();
    // });

    it('should login with correct credentials', async function () {
        await PageFactory.getPage("Home").open(url);
        await PageFactory.getPage("Home").Header.clickSignInButton();
        await PageFactory.getPage('SignIn').typeLogin(login);
        await PageFactory.getPage('SignIn').clickNextButton();
        await PageFactory.getPage('SignIn').typePassword(password);
        await PageFactory.getPage('SignIn').clickSignInButton();
        const isLogoExist = await PageFactory.getPage("Home").isYourLogoAccountExist();
        expect(isLogoExist).to.be.equal(true);
    });
});