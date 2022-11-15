import homepageobj from '../pageobjects/homepageobj';

class homePage{
    
    async openHomePage() {
        browser.url("https://automationteststore.com");
        await (await homepageobj.lnkloginReg).waitForDisplayed({timeout: 5000})
        console.log("Navigate to Url 'https://automationteststore.com'")
    }
}
export default new homePage();
