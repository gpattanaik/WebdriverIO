class homePage{
    
    async openHomePage() {
        browser.url("https://automationteststore.com");
        console.log("Navigate to Url 'https://automationteststore.com'")
    }
}
export default new homePage();
