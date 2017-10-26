var ProductPage = function ProductPage() {
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.addToCartButton = element(By.css('#add_to_cart > button > span'));
    this.popUpImage = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.product-image-container.layer_cart_img > img'));
    this.cartButton = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'));
    this.dropdownSize = element(By.css('#group_1'));
    this.mSize = element(By.css('#group_1 > option:nth-child(2)'));
    this.price = element(By.css('#our_price_display'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.closeButtonPopUp = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.productDescriptionPopUp = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.selectorProductDescription = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
}

module.exports = ProductPage;

ProductPage.prototype.isDescriptionLongerThan = function (number) {
    return new Promise(function (resolve) {
        description = element(By.css('h1'));
        description.getText().then(function (text) {
            resolve(text.length > number);
        })
    })
}

ProductPage.prototype.isConditionNew = function () {
    return new Promise(function (resolve) {
        condition = element(By.css('#product_condition > span'));
        condition.getText().then(function (text) {
            resolve(text == 'New');
        })
    })
}

ProductPage.prototype.waitForImage = function () {
    var that = this;
    that.popUpImage.isPresent();
}

ProductPage.prototype.clickCartButton = function () {
    var that = this;
    that.cartButton.click();
}

ProductPage.prototype.clickAddToCartButton = function () {
    var that = this;
    that.addToCartButton.click();
}

ProductPage.prototype.clickSizeDropDown = function () {
    var that = this;
    return new Promise(function (resolve) {
        that.dropdownSize.click();
        resolve();
    })
}

ProductPage.prototype.clickMsize = function () {
    var that = this;
    that.mSize.click();
}

