const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');

describe('Find available rooms in hotel in city on nearest weekend for two persons', async function () {

    const city = 'Minsk';
    const hotelName = 'Hotel Minsk';

    const expectNumberOfRooms = 3;

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it(`should find more than ${expectNumberOfRooms} rooms in hotel "${hotelName} in city "${city}" for two persons on nearest weekend"`, async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").typeDestinationPlace(city);
        await PageFactory.getPage("Home").clickDateField();
        await PageFactory.getPage("Home").chooseNearestWeekend();
        await PageFactory.getPage("Home").clickSearchButton();
        await PageFactory.getPage("Search").chooseHotelByHotelName(hotelName);
        await PageFactory.getPage("Hotel").clickReserveButton();
        const availableRooms = await PageFactory.getPage("Hotel").getCountOfAvailableRooms();
        expect(availableRooms > expectNumberOfRooms).to.be.equal(true);
    });
});