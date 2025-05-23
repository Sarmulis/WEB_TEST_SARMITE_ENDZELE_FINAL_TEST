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
      Cypress.env('profileLink', `https:${href}`);
      
    });
  });
  cy.then(() => {
    const url = Cypress.env('profileLink');    
    cy.visit(url); 
  });
  cy.origin('https://login.inbox.lv', () => {
    cy.get('a#menus-profile_a_change-pwd', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[id=newPass]').type('Putraims111#');
    cy.get('input[id=newPassConfirm]').type('Putraims111#');
    cy.get('#btn_save-password').click();
  });
});