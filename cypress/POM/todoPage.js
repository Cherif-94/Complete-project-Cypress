class TodoPage {

    welcomeMessageShouldBeVisible = () =>  {
        return cy.get('[data-testid="welcome"]')         
}

        get addButton() {
             return cy.get('[data-testid="add"]') ;
        }

        get newTodo () { 
            return cy.get('[data-testid="new-todo"]') ;
        }

        get submitButton () {
            return  cy.get('[data-testid="submit-newTask"]') ; 
        }

        get firstTodo () {
            return cy.get('[data-testid="todo-item"]').eq(0) ; 
        }

        get completeItemIcon () {
            return cy.get('[data-testid="complete-task"]').eq(0) ; 
        }

   clickOnAddButton () {
      this.addButton.click() ; 
   }

   addNewTodo (data) {
       this.newTodo.type(data) ; 
      } 

    clickOnSubmitButton () {
       this.submitButton.click() ;
    } 
    
    firstTodoShouldHaveText(text) {
        this.firstTodo.should('have.text' , text) ; 
    }

    iconCompleteItem() {
        this.completeItemIcon.click() ; 
    }
  
}
export default TodoPage ; 