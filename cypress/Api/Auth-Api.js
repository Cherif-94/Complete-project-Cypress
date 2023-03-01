class AuthApi {

  tryAuth (email,password) {
   return cy.request({
        method:'POST' , 
        url: 'https://qacart-todo.herokuapp.com/api/v1/users/login' ,
        body: {
            email: email , 
            password : password
        } , 
        failOnStatusCode: false,

     })
  }
}
export default AuthApi ; 