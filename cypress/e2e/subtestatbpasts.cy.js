Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Andina222!', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {
    cy.get('.ml-list__link', { timeout: 10000 }).first().click();
    cy.get('button[data-test=toolbar-reply]').should('be.visible').click();

    cy.get('iframe.cke_wysiwyg_frame').then($iframe => {
      const body = $iframe.contents().find('body');
    
      cy.wrap(body).should('be.visible').then(body => {
        body.prepend('Nav un viss!');
      })
      
    });
    cy.get('button[data-test=toolbar-send]').should('be.visible').click();

  });


});
