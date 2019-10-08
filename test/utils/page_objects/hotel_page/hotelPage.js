const Element = require('../actions/element');
const Collection = require('../actions/collection');

class HotelPage {
    constructor() {
        this.reserveButton = new Element('Button Reserve', "//*[@id='hp_book_now_button']")
        this.listOfAvailableRooms = new Collection('List of available rooms', "//*[@class='hprt-roomtype-link']")
    };

    async clickReserveButton() {
        await this.reserveButton.wait();
        return await this.reserveButton.click();
    };

    async getCountOfAvailableRooms() {
        await this.listOfAvailableRooms.wait();
        return await this.listOfAvailableRooms.getCount()
    };
};

module.exports = HotelPage;