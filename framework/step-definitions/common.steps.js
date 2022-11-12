//import { Given, When, Then } from '@wdio/cucumber-framework';
import { Given, When, Then } from '/@cucumber/cucumber';

import homePage from '../components/homepage';
import homepageobj from '../pageobjects/homepageobj';


/**
 * Navigate to home page
 */
Given(/^I am on the home page$/, async() => {
    homePage.openHomePage(); 
    // await expect(homepageobj.btnRegActontinue).toBePresent();

    // homepageobj.navigateToAccountLoginPg();
    
});
