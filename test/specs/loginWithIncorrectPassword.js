const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');

describe('Login with incorrect password', async function () {

    const login = 'sysrq08884@mail.ru';
    const incorrectPassword = 'Testboking';

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it('Should show Error Password message when we type incorrect password', async function () {
        await PageFactory.getPage('Home').open();
        await PageFactory.getPage('Home').Header.clickSignInButton();
        await PageFactory.getPage('SignIn').typeLogin(login);
        await PageFactory.getPage("SignIn").clickNextButton();
        await PageFactory.getPage('SignIn').typePassword(incorrectPassword);
        await PageFactory.getPage('SignIn').clickNextButton();
        const isErrorPasswordMessageExist = await PageFactory.getPage('SignIn').isPasswordErrorExist();
        expect(isErrorPasswordMessageExist).to.be.equal(true);
    });
});