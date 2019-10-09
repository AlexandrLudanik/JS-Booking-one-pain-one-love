const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');
const testData = require('../testData');

describe('Find available rooms in hotel in city on nearest weekend for two persons', async function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it(`should find more than ${testData.expectNumberOfRooms} rooms in hotel "${testData.hotel} in city "${testData.city}" for two persons on nearest weekend"`, async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").typeDestinationPlace(testData.city);
        await PageFactory.getPage("Home").clickDateField();
        await PageFactory.getPage("Home").chooseNearestWeekend();
        await PageFactory.getPage("Home").clickSearchButton();
        await PageFactory.getPage("Search").chooseHotelByHotelName(testData.hotel);
        await PageFactory.getPage("Hotel").clickReserveButton();
        const availableRooms = await PageFactory.getPage("Hotel").getCountOfAvailableRooms();
        expect(availableRooms).to.be.above(testData.expectNumberOfRooms);
    });
});