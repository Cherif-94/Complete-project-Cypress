
class TodoCompletedApi {
    
      todoCompleted = (token) => {

     return cy.request({
            url: '/api/v1/tasks',
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}` ,
            },
            body: {
                isCompleted: true,
                item: 'Learn Cypress io using JavaScript',
            },
        })
      }   
}
export default TodoCompletedApi 