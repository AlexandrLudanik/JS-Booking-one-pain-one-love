const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');

describe('Login with incorrectEmail', function () {

    const incorrectLogin = 'sysrq0884@mail.ru';

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it('Should show Error email message when we type incorrect email', async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSignInButton();
        await PageFactory.getPage('SignIn').typeLogin(incorrectLogin);
        await PageFactory.getPage('SignIn').clickNextButton();
        const isErrorLoginMessageExist = await PageFactory.getPage('SignIn').isLoginErrorExist();
        expect(isErrorLoginMessageExist).to.be.equal(true);
    });

});