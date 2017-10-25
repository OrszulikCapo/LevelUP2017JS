var HomePage = function HomePage() {
    this.productDescription = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.productPrice = element(By.css('#product_price_1_3_0 > span'));
}

module.exports = HomePage;

HomePage.prototype.getProductDescription = function(){
    var that = this;
    return that.productDescription.getText();
}

HomePage.prototype.getPrice = function(){
    var that = this;
    return that.productPrice.getText();
}