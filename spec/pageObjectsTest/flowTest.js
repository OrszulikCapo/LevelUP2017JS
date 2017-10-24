var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUs.js");

var homePage = new HomePage();
var contactUs = new ContactUs();

describe('Automation Web flow', function () {
    it('Click ContactUs button', function () {
        browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
        //expect(homePage.cartLabel.getText()).toEqual("Cart (empty)");
    });
    it('Check if 3 elements are present?', function(){

        expect(contactUs.)

    })

});