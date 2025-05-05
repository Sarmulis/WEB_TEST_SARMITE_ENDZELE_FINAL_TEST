Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');
  cy.get('.btn.btn-secondary.btn-tw').then(($el) => {
    const href = $el.attr('href');
    cy.visit(href, { failOnStatusCode: false }); 
    
  });
  cy.origin('https://api.x.com', () => {
    cy.get('#allow', { timeout: 10000 }).click();
  });
  cy.origin('https://x.com', () => {
    cy.get('input[name="text"]').type('AndaVanda128306');
    cy.contains('span', 'Next').click();
  });
  cy.origin('https://x.com', () => {
    cy.get('input[name="password"]').type('Andulis54#');
    cy.contains('span', 'Log in').click();
  });

});