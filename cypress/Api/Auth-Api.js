class AuthApi {

  tryAuth (email,password) {
   return cy.request({
        method:'POST' , 
        url: '/api/v1/users/login' ,
        body: {
            email: email , 
            password : password
        } , 
       failOnStatusCode: false,

     })
  }
}
export default AuthApi ; 