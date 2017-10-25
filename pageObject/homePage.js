var HomePage = function HomePage(){

    this.URL = 'http://automationpractice.com/index.php';

       
    this.pageTitle = element(By.css('head title:nth-child(2))'));

    this.cartLabel = element(By.css(".shopping_cart"));
    this.contactUsLink = element(By.css("#contact-link"));
    this.womenTabLink = element(By.css("#block_top_menu > ul > li:nth-child(1) > a"));
}

// HomePage.prototype.isLoaded = fuction(browser) {
//     return new Promise(function(resolve){
//         var isCorrect;
//         browser.getTitle().then(function(title){
//             isCorrect = 
//         })
//         resolve(this.pageTitle.getTe)

//     })
// };

module.exports = HomePage;
