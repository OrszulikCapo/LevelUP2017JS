var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var dressesPage = new DressesPage();
var ProductPage = require(pageObjectDir + "/ProductPage.js");
var ProductPage = new ProductPage();

var data = {
    "Dress 1": {
        "dressLinkSelector": "dressOneLinkSelector",
        "price": "$26.00",
        "description": "Printed Dress"
    },
    "Dress 2": {
        "dressLinkSelector": "dressTwoLinkSelector",
        "price": "$50.99",
        "description": "Printed Dress"
    },    
    "Dress 3": {
        "dressLinkSelector": "dressThreeLinkSelector",
        "price": "$28.98",
        "description": "Printed Summer Dress"
    },
    "Dress 4": {
        "dressLinkSelector": "dressFourLinkSelector",
        "price": "$30.50",
        "description": "Printed Summer Dress"
    },
    "Dress 5": {
        "dressLinkSelector": "dressFiveLinkSelector",
        "price": "$16.40",
        "description": "Printed Chiffon Dress"
    },
}

describe('Checking if all dresses opens and looks correctly', function () {

    it('Should Home Page be loaded', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle()).toEqual('My Store');
    });
    
    it('Should Dresses Page be loaded', function () {
        homePage.clickDressesTabLink();
        expect(browser.getTitle()).toEqual('Dresses - My Store');
    });

    using(data, function (element) {
        it('Check if correct Dress is Loaded - checking Price', function () {
            dressesPage[element.dressLinkSelector].click();
            ProductPage.price.getText().then(function(text){
                expect(element.price).toEqual(text);
            })
        })
        it('Check if correct Dress is Loaded - checking Description', function () {
            ProductPage.selectorProductDescription.getText().then(function(text){
                expect(element.description).toEqual(text);
            })
        })    
        it('Navigate Back', function () {
            browser.navigate().back();
            expect(browser.getTitle()).toEqual('Dresses - My Store');
        });
    })

});