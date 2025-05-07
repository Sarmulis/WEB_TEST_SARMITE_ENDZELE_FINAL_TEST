Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Andina222!', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {
    cy.get('#side-trigger').click();
    cy.get('.btn.btn-brand-dark.text-start.py-2').invoke('attr', 'href').then((href) => {
      const fullUrl = `https:${href}`;
      cy.visit(fullUrl);
        
      cy.get('#profile-img__wrap a', { timeout: 10000 }).should('be.visible').click();
    });
  });
  /*cy.origin('https://email.inbox.lv', () => {
    cy.get('.span[id=profile-image]', { timeout: 10000 }).should('be.visible').click();
  });*/
});
