var HomePage = function HomePage(){

    this.URL = 'http://automationpractice.com/index.php';

    this.cartLabel = element(By.css(".shopping_cart"));
    this.contactUsLink = element(By.css("#contact-link"));

    
}



module.exports = HomePage;
