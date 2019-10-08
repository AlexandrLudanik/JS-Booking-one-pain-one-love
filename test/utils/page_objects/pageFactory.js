const BasePage = require('./base_page/basePage');
const HomePage = require('./home_page/homePage');
const SignInPage = require('./sign_in_page/signInPage');
const SearchPage = require('./search_page/searchPage');
const HotelPage = require('./hotel_page/hotelPage');

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "SignIn":
                return new SignInPage();
            case "Search":
                return new SearchPage();
            case "Hotel":
                return new HotelPage();
            default:
                return new BasePage();
        }
    };
};

module.exports = PageFactory;