Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Andina222!', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {

    cy.get('input[type=checkbox]').eq(3).should('exist').wait(500).check({ force: true }).should('be.checked');

    //cy.get('input[type=checkbox]').eq(3).should('be.visible').check({ force: true });
    cy.get('#test-mbab__btn_remove').click({ force: true });
    
  });
  

});