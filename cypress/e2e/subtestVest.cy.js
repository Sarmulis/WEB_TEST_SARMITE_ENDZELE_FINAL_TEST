import 'cypress-iframe';


Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Andina222!', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {
    cy.get('button[data-test=ml-compose-btn]').should('be.visible').click();
    cy.get('input[id=suggest-to]').click().type('sarmulise@gmail.com');
    cy.get('input[id=subject]').click().type('bilde'); 

    cy.get('iframe').its('0.contentDocument.body').should('not.be.empty'); 

    cy.get('iframe').then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find('body.cke_editable_themed').should('be.visible').type('Šis ir tests!', {timeout: 10000});
  });
});
  
  
});
