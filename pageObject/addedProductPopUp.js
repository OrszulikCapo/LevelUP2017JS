var AddedProductPopUp = function AddedProductPopUp() {
    this.closeButtonPopUp = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.productDescription = element(By.css('#layer_cart_product_title'));
    this.productPrice = element(By.css('#layer_cart_product_price'));

}
module.exports = AddedProductPopUp;

AddedProductPopUp.prototype.clickcloseButtonPopUp = function(){
    var that = this;
    return new Promise(function(resolve){
        that.closeButtonPopUp.click();
        resolve();
    })

}

AddedProductPopUp.prototype.getProductDescription = function(){
    var that = this;
    return that.productDescription.getText();
}


AddedProductPopUp.prototype.getProductPrice = function(){
    var that = this;
    return that.productPrice.getText();
}