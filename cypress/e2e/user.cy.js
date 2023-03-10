/// <reference types="cypress" />

import LoginPage from "../POM/loginPage";
import TodoPage from "../POM/todoPage";

describe('Login Test Suite  ', () => {

  it('Should be able to Login using the email and password', () => {

   const loginPage = new LoginPage()  ;

   const welcomeMessage = new TodoPage() ; 

   loginPage.visit() ; 

   loginPage.login('cherif@gmail.com' , '123456789') ;

   welcomeMessage.welcomeMessageShouldBeVisible().should('be.visible') ; 

  })

})  