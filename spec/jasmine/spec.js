// beforeAll(function(){
// });

// beforeEach(function(){
// });

// afterEach(function(){
// });

// afterlAll(function(){
// });


describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        expect(browser.findElement(By.css('.shopping_cart >a >b')).getText()).toEqual('Cart');
    
    });
});