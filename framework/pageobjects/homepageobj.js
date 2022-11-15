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
      get btnRegAccountContinue() {
        return $('//*[@id="accountFrm"]/fieldset/button');
    }
     /** 
     * 'I am a new customer' title on account login page
     */
      get lblnewCustomer() {
        return $('//*[@id="maincontainer"]/div/div/div/div/div[1]/h2');
    }
     /**
     * Account first name input field on Create account page
     */
      get txtfName() {
        return $('//*[@id="AccountFrm_firstname"]');
    }
     /**
     * Account Last name input field on Create account page
     */
      get txtlName() {
        return $('//*[@id="AccountFrm_lastname"]');
    }
     /**
     * Email field on Create account page
     */
      get txteMail() {
        return $('//*[@id="AccountFrm_email"]');
    }
      /**
     * Address field on Create account page
     */
       get txtaddress() {
        return $('//*[@id="AccountFrm_address_1"]');
    }
      /**
     * City field on Create account page
     */
       get txtcity() {
        return $('//*[@id="AccountFrm_city"]');
    }
     
     /**
     * Region/ State field on Create account page
     */
      get ddlregState() {
        return $('//*[@id="AccountFrm_zone_id"]');
    }
    
    /**
     * zip code field on Create account page
     */
     get txtzipCode() {
        return $('//*[@id="AccountFrm_postcode"]');
    }
    /**
     * Country field on Create account page
     */
     get ddlcountry() {
        return $('//*[@id="AccountFrm_country_id"]');
    }
    /**
     * Login field on Create account page
     */
     get txtloginName() {
        return $('//*[@id="AccountFrm_loginname"]');
    }     
    /**
     * Password field on Create account page
     */
     get txtpassword() {
        return $('//*[@id="AccountFrm_password"]');
    }       
     /**
     * Password Confirm field on Create account page
     */
      get txtpasswordConfrm() {
        return $('//*[@id="AccountFrm_confirm"]');
    }
    /**
     * Password Confirm field on Create account page
     */
     get chkpvcPolicy() {
        return $('//*[@id="AccountFrm_agree"]');
    }
    /**
     * Continue button on Create account page
     */
    get btnCreateAccountContinue() {
      return $('//*[@id="AccountFrm"]/div[5]/div/div/button');
    }    
     /**
     * Account has been created successful message 
     */
      get ActCreationSuccessMessage() {
        return $('//span[text()=" Your Account Has Been Created!"]');
    }
     /**
     * Logoff
     */
      get linkLogoff() {
        return $('//*[@id="maincontainer"]/div/div[2]/div[1]/div/ul/li[10]/a');
    }                     
    /**
     * Logoff
     */
    get lblAccountLogout() {
    return $('//*[@id="maincontainer"]/div/div/div/h1/span[1]/text()');
    }         
    /**
     * login text field
     */  
    get txtLoginName() {
      return $('//*[@id="loginFrm_loginname"]');
    }
    /**
     * Password text field
     */  
     get txtPassword() {
      return $('//*[@id="loginFrm_password"]');
    }
    /**
     * Login button
     */
     get btnSubmit() {
      return $('//*[@id="loginFrm"]/fieldset/button');
  }
  /**
   * title myAccount
   */
   get lblMyAccount() {
    return $('.maintext');
   }

    
    
  

    //Actions

    /**
     * click on Login/Register to navigate to Account login page
     */
    async clickOnLoginRegLnk() {
        await this.lnkloginReg.click();
    }
    /**
     * click on Continue button on Account login page
     */
     async clickOnContinueBtn() {
      await (await this.btnRegAccountContinue).waitForClickable({ timeout: 5000});
      await this.btnRegAccountContinue.click();
    }
    /**
     * New account creation
     */
    async accountCreation(data) {
      await this.clickOnContinueBtn();
      await (await this.txtfName).waitForDisplayed({ timeout: 5000});
      var fname ="";
      var lname ="";
      var addr="";
      var city="";
      var state="";
      var zipcode="";
      var username="";
      var password="";
      var confpwd="";
    data.forEach(function(element) {
        console.log("Element:......" + element[0]);
        console.log("Element:......" + element[1]);
        fname = element[0];
        lname = element[1];
        addr= element[2];
        city= element[3];
        state=element[4];
        zipcode=element[5];
        username=element[6];
        password=element[7];
        confpwd=element[8];
        console.log("Element:......" + fname);
    }); 
    //generate random unique email each tiem
    const randomStr = Math.random().toString(36).substring(2, 5);
    const emailID = `myemail_${randomStr}@gmail.com`;
    const userid = `tom_${randomStr}`;
    console.log(emailID);
    console.log("fname......: " + fname);

    //Enter Your Personal Details
      await this.txtfName.setValue(fname);
      await this.txtlName.setValue(lname);
      await this.txteMail.setValue(emailID);

      //Enter Your Address
      await this.txtaddress.setValue(addr);
      await (await this.txtcity).setValue(city);
      await (await this.ddlregState).selectByVisibleText(state);
      //await browser.pause(10000);
      await (await this.txtzipCode).setValue(zipcode);

      //Enter Login Details
      await (await this.txtloginName).setValue(userid);
      await (await this.txtpassword).setValue(password);
      await (await this.txtpasswordConfrm).setValue(confpwd);
      await (await this.chkpvcPolicy).click();

      //Click on Continue button
      await this.btnCreateAccountContinue.click();
      await (await this.ActCreationSuccessMessage).waitForDisplayed({ timeout: 10000});
      console.log("Congratulations! Your new account has been successfully created!")

      //Logoff from application
      //await browser.pause(10000);
      await this.clickOnLogoffLnk();
      //await (await this.lblAccountLogout).waitForDisplayed({ timeout: 5000});
      await browser.closeWindow();
      
    }

  /**
     * click on Logoff link 
     */
   async clickOnLogoffLnk() {
    await (await this.linkLogoff).waitForClickable({timeout: 3000})
    await this.linkLogoff.click();
}  
/**
 * Login into application
 */
async login(username, password) {
  await this.clickOnLoginRegLnk();
  await (await this.txtLoginName).waitForDisplayed({timeout: 5000});
  await (await this.txtLoginName).setValue(username);
  await (await this.txtPassword).setValue(password);
  await this.btnSubmit.click();

}

    
}
export default new homepageobj();