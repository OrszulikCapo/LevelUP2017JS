var HomePage = require(pageObjectDir+"/homePage.js");
var ContactUs = require(pageObjectDir+"/contactUs.js");

var homePage = new HomePage();
var contactUs = new ContactUs();

describe('Automation Web flow', function () {
    it('Click ContactUs button', function () {
        browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
    });
    it('Check if Customer Service Label is present?', function(){
        contactUs.customerServiceLabel.isPresent().then(function(text){
            console.log(text);
        })
        expect(contactUs.customerServiceLabel.isPresent()).toBe(true);
            })
    it('Check if Subject Heading Dropdown is present?', function(){
        expect(contactUs.subjectHeadingDropdown.isPresent()).toBe(true);
    })
    it('Check if Submit Button is present?', function(){
        expect(contactUs.submitButton.isPresent()).toBe(true);
    })

});