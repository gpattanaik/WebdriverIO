import homePage from '../components/homepage';
class homepageobj {

    // Webelements locators

    /**
     * Login/Register link on home page
     */
    get lnkloginReg() {
        return $('//*[@id="customer_menu_top"]/li/a');
    }
     /**
     * Register account continue button on home page
     */
      get btnRegActontinue() {
        return $('//button[@title="Continue"]');
    }
     /**
     * 'I am a new customer' title on account login page
     */
      get lblnewCustomer() {
        return $('//h2[text()="I am a new customer."]');
    }
     /**
     * Account first name input field on Create account page
     */
      get txtfName() {
        return $('//input[@id="AccountFrm_firstname"]');
    }
     /**
     * Account Last name input field on Create account page
     */
      get txtlName() {
        return $('//input[@id="AccountFrm_lastname"]');
    }
     /**
     * Email field on Create account page
     */
      get txteMail() {
        return $('//input[@id="AccountFrm_email"]');
    }
      /**
     * Address field on Create account page
     */
       get txtaddress() {
        return $('//input[@id="AccountFrm_address_1"]');
    }
      /**
     * City field on Create account page
     */
       get txtcity() {
        return $('//input[@id="AccountFrm_city"]');
    }
      /**
     * City field on Create account page
     */
       get txtcity() {
        return $('//input[@id="AccountFrm_city"]');
    }
     /**
     * Region/ State field on Create account page
     */
      get ddlregState() {
        return $('//select[@id="AccountFrm_zone_id"]');
    }
     /**
     * Region/ State field on Create account page
     */
      get ddlregState() {
        return $('//select[@id="AccountFrm_zone_id"]');
    }
    /**
     * zip code field on Create account page
     */
     get txtzipCode() {
        return $('//input[@id="AccountFrm_postcode"]');
    }
    /**
     * Country field on Create account page
     */
     get ddlcountry() {
        return $('//select[@id="AccountFrm_country_id"]');
    }
    /**
     * Login field on Create account page
     */
     get txtloginName() {
        return $('//input[@id="AccountFrm_loginname"]');
    }     
    /**
     * Password field on Create account page
     */
     get txtpassword() {
        return $('//input[@id="AccountFrm_password"]');
    }       
     /**
     * Password Confirm field on Create account page
     */
      get txtpasswordConfrm() {
        return $('//input[@id="AccountFrm_confirm"]');
    }
    /**
     * Password Confirm field on Create account page
     */
     get chkpvcPolicy() {
        return $('//input[@id="AccountFrm_agree"]');
    }
     /**
     * Account has been created successful message 
     */
      get ActCreationSuccessMessage() {
        return $('//span[text()=" Your Account Has Been Created!"]');
    }                    

  

    //Actions

    /**
     * click on Login/Register to navigate to Account login page
     */
    async navigateToAccountLoginPg() {
        await this.btnRegActontinue.click();
        await (await this.txtfName).waitForExist({ timeout: 2000});
        console.log("Continue button is clicked")
    }
    /**
     * New account creation
     */
    async accountCreation(email, address) {
      await this.navigateToAccountLoginPg();

      //Enter Your Personal Details
      await (await this.txtfName).setValue(address.firstName);
      await (await this.txtlName).setValue(address.lastName);
      await (await this.emailID).setValue(email);

      //Enter Your Address
      await this.txtaddress.setValue(address.address1);
      await (await this.txtcity).setValue("Aberdeen");
      await (await this.ddlregState).selectByAttribute("value","Aberdeen");
      await (await this.txtzipCode).setValue("AB10");

      //Enter Login Details
      await (await this.txtloginName).setValue("gkp123");
      await (await this.txtpassword).setValue("12345");
      await (await this.txtpasswordConfrm).setValue("12345");
      await (await this.chkpvcPolicy).click();

      //Click on Continue button
      await this.btnRegActontinue.click();
      await (await this.ActCreationSuccessMessage).waitForExist({ timeout: 5000});
      console.log("Congratulations! Your new account has been successfully created!")
    }
    
}
export default new homepageobj();