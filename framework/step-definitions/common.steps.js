//import { Given, When, Then } from '@wdio/cucumber-framework';
import { Given, When, Then } from '/@cucumber/cucumber';

import homePage from '../components/homepage';
import homepageobj from '../pageobjects/homepageobj';
import faker from "faker";

/**
 * Navigate to home page
 */
Given(/^I am on the home page$/, async() => {
    await homePage.openHomePage(); 
    await expect(homepageobj.btnRegActontinue).toBePresent();
    console.log("Navigate to Home Page");
});
/**
 * Navigate to Account Login page
 */
When(/^Navigate to Signup page$/, async() => {
    await homepageobj.navigateToAccountLoginPg();
    await expect(homepageobj.lblnewCustomer).toBePresent();
    console.log("Navigate to Account Login Page");
});
/**
 * Create an new account with required data
 */
Then(/^Create an account$/, async() => {
    console.log("Account Creation");
    //generate random unique email each tiem
    const randomStr = Math.random().toString(36).substring(2, 5);
    const emailID = `myemail_${randomStr}@gmail.com`;
    //Create address
    const addrObj =  {
        firstName: faker.name.firstName(),
        lastname: faker.name.lastname(),
        address1: faker.address.address(),

    };
    //Global variable declaration
    global.SharedVariable.email=emailID;
    global.SharedVariable.address=addrObj;
    await homepageobj.accountCreation(emailID,addrObj);


});
 

