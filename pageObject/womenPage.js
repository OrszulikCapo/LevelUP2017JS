var WomenPage = function WomenPage(){
    
        this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
        this.clickTopsButton = function (){
            topsLink = element(By.css("#categories_block_left > div > ul > li:nth-child(1) > a"));
            topsLink.click();
        };
    }

    module.exports = WomenPage;