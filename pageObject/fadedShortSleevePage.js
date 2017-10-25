var FadedShortSleevePage = function FadedShortSleevePage() {
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.addToCartButton = element(By.css('#add_to_cart > button > span'));
    this.popUpImage = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.product-image-container.layer_cart_img > img'));
    this.cartButton = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'));
    this.dropdownSize = element(By.css('#group_1'));
    this.mSize = element(By.css('#group_1 > option:nth-child(2)'));
    this.price = element(By.css('#our_price_display'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.closeButtonPopUp = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));

    // this.changeSizeToM = function(){
    //     dropdownSize = element(By.css('#group_1'));
    //     mSize = element(By.css('#group_1 > option:nth-child(2)'));
    //     dropdownSize.click();
    //     mSize.click();
    // }

    // this.getPriceFromProductPage = function(){
    //     price = element(By.css('#our_price_display'));
    //     return price.getText();
    // }
}

module.exports = FadedShortSleevePage;



FadedShortSleevePage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description = element(By.css('h1'));
        description.getText().then(function (text) {
            resolve(text.length > number);
        })
    })
}

FadedShortSleevePage.prototype.isConditionNew = function () {
    return new Promise(function (resolve) {
        condition = element(By.css('#product_condition > span'));
        condition.getText().then(function (text) {
            console.log(text);
            resolve(text == 'New');
        })
    })
}

FadedShortSleevePage.prototype.waitForImage = function(){
    var that = this;
    that.popUpImage.isPresent();
}

FadedShortSleevePage.prototype.clickCartButton = function(){
    var that = this;
    that.cartButton.click();
}

FadedShortSleevePage.prototype.clickAddToCartButton = function(){
    var that = this;
    // return new Promise(function (resolve){
        that.addToCartButton.click();
    //     resolve();
    // });
}

FadedShortSleevePage.prototype.clickSizeDropDown = function(){
    var that = this;
    return new Promise(function(resolve){
        that.dropdownSize.click();
        resolve();
    })

}

FadedShortSleevePage.prototype.clickMsize = function(){
    var that = this;
    // return new Promise (function(resolve){
        that.mSize.click();
    //     resolve();
    // })
    
}