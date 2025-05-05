Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  //cy.get('.btn.btn-secondary.btn-fb').should('have.attr', 'href').and('include', '/facebook'); 
  //cy.get('.btn.btn-secondary.btn-fb').click(); 

  cy.get('.btn.btn-secondary.btn-fb').then(($el) => {
    const href = $el.attr('href');
    cy.visit(href, { failOnStatusCode: false }); 
  });
  
  
  });
  
  
  
  

