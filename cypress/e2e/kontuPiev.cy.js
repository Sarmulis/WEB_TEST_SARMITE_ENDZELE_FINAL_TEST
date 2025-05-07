Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Putraims111#', { force: true });
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
    cy.get('a#menus-profile_a_linked-account', { timeout: 10000 }).should('be.visible').click();
    cy.get('#linked-account-add').click();
    cy.get('input[id=userName').type('vandaanda245@gmail.com');
    cy.get('#username_submit').click();
    cy.get('input[id=password').type('Vanda245!');
    cy.get('#implogin__btn_sign-in').click();
  });

});