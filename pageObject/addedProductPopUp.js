var AddedProductPopUp = function AddedProductPopUp() {
    this.closeButtonPopUp = element(By.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'));
    this.productDescription = element(By.css('#layer_cart_product_title'));

}
module.exports = AddedProductPopUp;

AddedProductPopUp.prototype.clickcloseButtonPopUp = function(){
    var that = this;
    that.closeButtonPopUp.click();
}

AddedProductPopUp.prototype.getProductDescription = function(){
    var that = this;
    return that.productDescription.getText();
}