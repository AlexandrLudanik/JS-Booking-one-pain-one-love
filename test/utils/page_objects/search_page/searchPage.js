const Element = require('../actions/element');
const Collection = require('../actions/collection');

class SearchPage {
    constructor() {
        this.listOfHotels = new Collection('List of available hotels', "//*[@class='hotel_name_link url']//span[1]");
    };

    async getCountOfAvailableHotels(){
        await this.listOfHotels.wait();
        return await this.listOfHotels.getCount();
    };

    async chooseHotelByHotelName(hotelName){
        await this.listOfHotels.wait();
        await this.listOfHotels.clickElementByText(hotelName);
        await new Element().switchTab();
    };
};

module.exports = SearchPage;