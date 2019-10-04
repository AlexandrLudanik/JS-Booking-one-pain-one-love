const BasePage = require('./base_page/basePage');
const HomePage = require('./home_page/homePage');
const SignInPage = require('./sign_in_page/signInPage');

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "SignIn":
                return new SignInPage();
            default:
                return new BasePage();
        }
    };
};

module.exports = PageFactory;