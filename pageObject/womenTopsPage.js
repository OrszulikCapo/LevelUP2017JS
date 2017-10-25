var WomenTopsPage = function WomenTopsPage(){  
        this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
       
        this.clickFadedShorSleeveTshirts = function(){
            fadedShorSleeveLink = element(By.css("#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > h5 > a"));
            fadedShorSleeveLink.click();
        };
    }

    // WomenPage.prototype.clickTopsButton = function (){
    //     topsLink.click();
    // }

    module.exports = WomenTopsPage;