var DressesPage = function DressesPage() {
    
        this.dressOneLinkSelector = element(By.css('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a'));
        this.dressTwoLinkSelector = element(By.css('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a'));
        this.dressThreeLinkSelector = element(By.css('#center_column > ul > li:nth-child(3) > div > div.right-block > h5 > a'));
        this.dressFourLinkSelector = element(By.css('#center_column > ul > li:nth-child(4) > div > div.right-block > h5 > a'));
        this.dressFiveLinkSelector = element(By.css('#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a'));
}

module.exports = DressesPage;