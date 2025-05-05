Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19');
  cy.get('#pass').click({ force: true }).type('Andina222!', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {
    cy.get('button[data-test=ml-compose-btn]').should('be.visible').click();
    cy.get('input[id=suggest-to]').click().type('sarmulise@gmail.com');
    cy.get('input[id=subject]').click().type('bilde'); 

    
    cy.get('input[name="attachments[]"]').scrollIntoView().selectFile('cypress/fixtures/myImage.jpg', { force: true });
  });
  
  
});
