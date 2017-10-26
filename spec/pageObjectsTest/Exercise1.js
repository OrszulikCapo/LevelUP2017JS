var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var WomenTopsPage = require(pageObjectDir + "/womenTopsPage.js");
var ProductPage = require(pageObjectDir + "/ProductPage.js");
var AddedProductPopUp = require(pageObjectDir + "/addedProductPopUp.js");
var CartPage = require(pageObjectDir + "/cartPage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var womenTopsPage = new WomenTopsPage();
var productPage = new ProductPage();
var addedProductPopUp = new AddedProductPopUp();
var cartPage = new CartPage();

var popUpDescription;
var popUpPrice;
describe('Adding product to Cart flow.', function () {

    it('Should Home Page be loaded', function () {
        browser.get(homePage.URL);
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
        productPage.isDescriptionLongerThan(8).then(function (isLonger) {
            expect(isLonger).toBeTruthy();
        })
    })

    it('Should Condition be new', function () {
        expect(productPage.isConditionNew()).toBeTruthy();
    })

    it('Should add item and go to Cart', function () {
        productPage.clickSizeDropDown().then(function () {
            productPage.clickMsize();
        })
        productPage.clickAddToCartButton();
        
        browser.wait(function () {
            return productPage.popUpImage.isPresent()
        }).then(function () {
            addedProductPopUp.getProductDescription().then(function (text) {
                popUpDescription = text;
            })
            addedProductPopUp.getProductPrice().then(function (text) {
                popUpPrice = text;
            })
        })
    })

    it('Should close the pop up and go to Cart', function () {
        addedProductPopUp.clickcloseButtonPopUp().then(function(){
             var EC = protractor.ExpectedConditions;
            browser.wait(EC.elementToBeClickable(productPage.cartButton), 5000);
            productPage.clickCartButton();
            expect(browser.getTitle()).toEqual('Order - My Store');          
        })
    })
    
    it('Should Correct Item be added - checking description', function () {
        cartPage.getProductDescription().then(function (text) {
            expect(text).toEqual(popUpDescription);
        })
    })

    it('Should Correct Item be added - checking price', function () {
        cartPage.getPrice().then(function (text) {
            expect(text).toEqual(popUpPrice)
        })
    })
});