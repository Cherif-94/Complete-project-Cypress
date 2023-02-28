
class LoginPage {

     // POM Concept is : first step => getting elements // Second step => Methods 
      get inputEmail () {
             return cy.get('[data-testid="email"]') ; 
      }

      get inputPassword () {
             return cy.get('[data-testid="password"]') ; 
      }

      get inputSubmit () {
            return cy.get('[data-testid="submit"]') ; 
      }


     visit = () =>  {
        cy.visit('/') ;  
     }

     login = (email , password) => {
           this.inputEmail.type(email) ; 
           this.inputPassword.type(password) ; 
           this.inputSubmit.click() ; 
     }

}
  export default LoginPage ; 