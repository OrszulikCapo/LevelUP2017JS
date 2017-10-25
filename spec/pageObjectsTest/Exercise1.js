var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var WomenTopsPage = require(pageObjectDir + "/womenTopsPage.js");
var FadedShortSleevePage = require(pageObjectDir + "/fadedShortSleevePage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var womenTopsPage = new WomenTopsPage();
var fadedShortSleevePage = new FadedShortSleevePage();

beforeAll(function () {

    browser.get(homePage.URL);
});

describe('Adding product to Cart flow.', function () {
    var pirce;
    it('Should Home Page be loaded', function () {
        // browser.getTitle().then(function(text){
        //     console.log(text+1);
        //     expect(text).toEqual('My Store');
        // });
        expect(browser.getTitle()).toEqual('My Store');
    });

    it('Should Women page be loaded', function () {
        homePage.womenTabLink.click();
        expect(browser.getTitle()).toEqual('Women - My Store');
    })

    it('Should Women Tops page be loaded', function () {
        womenPage.clickTopsButton();
        expect(browser.getTitle()).toEqual('Tops - My Store');
    })

    it('Should Faded Short Sleeve page be loaded', function () {
        womenTopsPage.clickFadedShorSleeveTshirts();
        expect(browser.getTitle()).toEqual('Faded Short Sleeve T-shirts - My Store');
    })

    it('Should description of product be longer than', function () {
        fadedShortSleevePage.isDescriptionLongerThan(8).then(function (isLonger) {
            expect(isLonger).toBeTruthy();
        })
    })

    it('Should Condition be new', function () {
        expect(fadedShortSleevePage.isConditionNew()).toBeTruthy();
    })

    it('Should chosen product be added to cart', function () {
        fadedShortSleevePage.clickSizeDropDown().then(function () {
            fadedShortSleevePage.clickMsize();
        })
        fadedShortSleevePage.clickAddToCartButton();
        browser.wait(function () {
            return fadedShortSleevePage.popUpImage.isPresent()
        }).then(function () {
            fadedShortSleevePage.closeButtonPopUp.click();
        })


        //fadedShortSleevePage.clickCartButton();

        browser.sleep(5000);
        // fadedShortSleevePage.clickAddToCartButton().then(function(){
        //     fadedShortSleevePage.clickCartButton()
        // });

        //fadedShortSleevePage.clickCartButton();

        // fadedShortSleevePage.getPriceFromProductPage().then(function(text){
        //     price=text;
        // });
        //console.log(price);

    })

});