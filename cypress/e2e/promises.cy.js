

it('test with promise', () => {

    cy.visit('') ; 
       
    cy.get('button').then(($button) => {

        return new Promise((resolve, reject) => {

           cy.wrap($button).should('be.visible') ?  resolve($button) && $button.trigger('click') : reject(new Error('Button is not visible'));
  
        });
      })
  })