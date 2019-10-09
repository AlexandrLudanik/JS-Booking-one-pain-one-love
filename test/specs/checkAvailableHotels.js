const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');
const testData = require('../testData');

describe('Try to find available hotels in the city for two persons on nearest weekend', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it(`should find more than ${testData.expectNumberOfHotels} hotels in "${testData.city} for two persons on nearest weekend"`, async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").typeDestinationPlace(testData.city);
        await PageFactory.getPage("Home").clickDateField();
        await PageFactory.getPage("Home").chooseNearestWeekend();
        await PageFactory.getPage("Home").clickSearchButton();
        const availableHotels = await PageFactory.getPage("Search").getCountOfAvailableHotels();
        expect(availableHotels).to.be.above(testData.expectNumberOfHotels);
    });
});