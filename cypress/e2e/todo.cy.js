/// <reference types="cypress" />

import UserApi from "../Api/userApi";
import TodoCompletedApi from "../Api/todoApi";
import TodoPage from "../POM/todoPage";

describe('Todo Test Suite  ', () => {

    var  token ; 

    const  todo = new TodoPage() ; 

    beforeEach(() => {

        UserApi.register().then((response) => {

            token = response.body.access_token;
 
        })
    })

    it('Should be able to add a Todo ', () => {

        cy.visit('/todo') ;
    
        todo.clickOnAddButton() ;
      
        todo.addNewTodo('Learn Cypress') ;

        todo.clickOnSubmitButton() ; 
        
        todo.firstTodoShouldHaveText('Learn Cypress') ; 

    })

    it('Should be able to Mark a Todo as completed  ', () => { 

       let TDC = new TodoCompletedApi() ; 
       
        TDC.todoCompleted(token) ;

        cy.visit('/') ;

        todo.iconCompleteItem() ; 

        cy.get('[data-testid="todo-item"]').eq(0).should('have.css', 'background-color', 'rgb(33, 76, 97)');

        cy.reload();
    })



})









