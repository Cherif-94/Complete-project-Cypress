class UserApi {
      
       static register() {
          
            return cy.request({
                url: '/api/v1/users/register',
                method: 'POST',
                body: {
                    firstName: 'Cheriiif',
                    lastName: 'Ayachiii',
                    // Generate a random email => Email is unique in the app 
                    email: `${Date.now()}@test.com`,
                    password: '123456' , 
                   
                },
    
            })
       }
}
export default UserApi ; 