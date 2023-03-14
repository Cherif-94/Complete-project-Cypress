import { When,Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import UserApi from "../../../Api/userApi";


Given("I open the website", () => {
  cy.visit("");
});

When("I type my credantials correctly", () => {
  
     
  UserApi.register() ; 

  cy.visit('/todo') ; 
  
});

Then('I should be redirected to the todos page' , () => {

          cy.log('hello cypress')  
})

