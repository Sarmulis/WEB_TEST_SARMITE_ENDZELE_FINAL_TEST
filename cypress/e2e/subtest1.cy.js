Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('.btn.btn-secondary.btn-gg').then(($el) => {
    const href = $el.attr('href');
    cy.visit(href, { failOnStatusCode: false }); 
  });
  cy.origin('https://accounts.google.com', () => {
    cy.get('input#identifierId', { timeout: 10000 }).type('vandaanda245@gmail.com', { log: false });
    cy.get('#identifierNext').click();
  });
});