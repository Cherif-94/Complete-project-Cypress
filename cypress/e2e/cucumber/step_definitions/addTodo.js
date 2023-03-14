import { When,Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import AuthApi from "../../../Api/Auth-Api";
import TodoCompletedApi from "../../../Api/todoApi";
import UserApi from "../../../Api/userApi";
import TodoPage from "../../../POM/todoPage";

var  token ; 


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
  addTodo.todoCompleted(token) ;
  addTodo.todoCompleted(token) ;

     
});

Then('I should see the new todo contain Learn Cypress io using JavaScript && count the number of tasks' , () => {
    
    let counter = 0 ; 

         cy.visit('/todo')

          checkText.firstTodoShouldHaveText('Learn Cypress io using JavaScript') ;

          cy.log('hello cypress')   ;

          cy.reload() ; 

        // here we count the number of existance tasks  

          TodoCompletedApi.countTasks(token).then((response) => {
                        
           counter = response.body.tasks.length

           cy.log('this is a nummbers of tasks' , counter)
      })





})