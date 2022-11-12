
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
     get txtlogin() {
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
    

    //Actions

    /**
     * click on Login/Register to navigate to Account login page
     */
    async navigateToAccountLoginPg() {
        await this.btnRegActontinue.click();
        console.log("Signin button is clicked")
    }
     

    
}
export default new homepageobj();