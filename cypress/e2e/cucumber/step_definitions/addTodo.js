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

     
});

Then('I should see the new todo contain Learn Cypress io using JavaScript && count the number of tasks' , () => {
    
    let counter = 0 ; 

    let tabCounter =  []  ; 

          cy.visit('/todo')  ;

          checkText.firstTodoShouldHaveText('Learn Cypress io using JavaScript') ;

          cy.log('hello cypress') ;

          cy.reload() ; 

        // here we count the number of existance tasks  as we like ( task by task or getting the length of tab )

          TodoCompletedApi.countTasks(token).then((response) => {
                        
           counter = response.body.tasks.length  ; 

           tabCounter = response.body.tasks ; 

           tabCounter.forEach((task) => {
                
               cy.log('this is a task contains all details' , task)  
    
           });

           cy.log('this is a Nummber of tasks' , counter) ; 
         
           
      })


})