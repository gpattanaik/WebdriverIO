//import { Given, When, Then } from '@wdio/cucumber-framework';
import { Given, When, Then } from '@cucumber/cucumber';

import homePage from '../components/homepage';
import homepageobj from '../pageobjects/homepageobj';
import { faker } from '@faker-js/faker';

/**
 * Navigate to home page
 */
Given(/^I am on the home page$/, async() => {
    await homePage.openHomePage(); 
    await (await homepageobj.lnkloginReg).waitForDisplayed({ timeout: 5000});
    console.log("Navigate to Home Page");
});
/**
 * Navigate to Account Login page
 */
When(/^Navigate to Signup page$/, async() => {
    await homepageobj.clickOnLoginRegLnk();
    await (await homepageobj.btnRegAccountContinue).waitForDisplayed({ timeout: 5000});
    console.log("Navigate to Account Login Page");
    await browser.pause(5000);
});
/**
 * Create an new account with required data
 */
Then(/^Create an account by entering following details$/, async (DataTable) => {
    console.log("......Account Creation........");
    var data = DataTable.raw();
    await homepageobj.accountCreation(data);
});

/**
 * Login with credential
 */
When(/^Login using (\w+) and (.+)$/, async (username, password) => {
    await homepageobj.login(username, password)
});
/**
 * Verify the My account page
 */
Then(/^Verify the title of the page$/, async() => {
    await homepageobj.lblMyAccount.waitForDisplayed({ timeout: 10000});
      console.log("Login Successfuls")
});