Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('span[title="Izlaist reklāmu"]', { timeout: 10000 }).should('be.visible').click();
  cy.get('.btn.btn-secondary.btn-fb', { timeout: 10000 }).should('be.visible').click(); 

    
  
  });
  
  
  
  

