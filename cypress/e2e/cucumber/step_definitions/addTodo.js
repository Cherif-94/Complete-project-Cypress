import { When,Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import AuthApi from "../../../Api/Auth-Api";
import TodoCompletedApi from "../../../Api/todoApi";
import UserApi from "../../../Api/userApi";
import TodoPage from "../../../POM/todoPage";

var  token ; 

const Auth = new UserApi() 

const addTodo = new TodoCompletedApi() ; 

const checkText = new TodoPage() ; 


beforeEach(() => {
 
    UserApi.register().then((response) => {

        token = response.body.access_token ;

        console.log(token) ; 
    
    })  

})

Given("I open the app", () => {
  cy.visit("/");
});

When("click on add button && i type the new todo and && i click on submit button", () => {
     

  addTodo.todoCompleted(token) ; 
     
});

Then('I should see the new todo contain Learn Cypress io using JavaScript' , () => {

         cy.visit('/todo')

          checkText.firstTodoShouldHaveText('Learn Cypress io using JavaScript') ;

          cy.log('hello cypress')   ;

          cy.reload() ; 

})