const {expect} = require('chai');
const PageFactory = require('../utils/page_objects/pageFactory');

describe('Try to find available hotels in the city for two persons on nearest weekend', function () {

    const city = 'Minsk';
    const expectNumberOfHotels = 3;

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    });

    it(`should find more than ${expectNumberOfHotels} hotels in "${city} for two persons on nearest weekend"`, async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").typeDestinationPlace(city);
        await PageFactory.getPage("Home").clickDateField();
        await PageFactory.getPage("Home").chooseNearestWeekend();
        await PageFactory.getPage("Home").clickSearchButton();
        const availableHotels = await PageFactory.getPage("Search").getCountOfAvailableHotels();
        expect(availableHotels > expectNumberOfHotels).to.be.equal(true);
    });
});