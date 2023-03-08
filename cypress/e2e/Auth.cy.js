import AuthApi from "../Api/Auth-Api"
import LoginPage from "../POM/loginPage";

describe('Authentification test suite' ,() => {
   
    const auth = new AuthApi() ;  

 it('Success case ' , ()=> {
      
     auth.tryAuth('hatem@example.com' ,'123456').then((response) => {
            
         expect(response.status).to.eql(200) ; 

         expect(response.body).to.have.property('access_token') ; 

    })
    
 })

 it('Failed case bad request expect 400 error ' , ()=> {

      
   cy.intercept('/api/v1/users/login').as('login') ; 
   
   const auth = new LoginPage() ; 
   
   auth.visit() ; 
   
   auth.login('test@test.com','123123') ; 

   cy.wait('@login').then((data) => {
    
         console.log('This is a Response comming from API ',data) ; 
         
         expect(data.response.statusCode).to.eql(400) ;

         expect(data.response.statusMessage).to.eql('Bad Request') ; 

         expect(data.response.body.message).to.eql('We could not find the email in the database') ;      
   })         
}) 

  it('Failed case Inauthorized expect 401 error ' , () => {
       
    auth.tryAuth('hatem@example.com' , '1234567').then((data) => {

        console.log('data' , data) ; 

        expect(data.status).to.eql(401) ;

        expect(data.body).to.have.property('message' , 'The email and password combination is not correct, please fill a correct email and password' ) ; 
  
    })   ; 

  } ) 

})


 