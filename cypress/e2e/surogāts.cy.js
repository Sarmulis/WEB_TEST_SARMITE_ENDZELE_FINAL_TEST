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
    cy.get('.btn.btn-brand-dark.text-start.py-2[title="E-pasta iestatījumi"]').invoke('attr', 'href').then((href) => {
      const fullUrl = href.startsWith('https') ? href : `https:${href}`;
      Cypress.env('prefsLink', fullUrl);
      
    });
  });
  cy.then(() => {
    const url = Cypress.env('prefsLink');    
    cy.visit(url); 
  });
  cy.wait(2000);
  cy.origin('https://email.inbox.lv', () => {
    
    cy.get('a.a-menu__link[href="/prefs/spam"]', { timeout: 10000 }).should('be.visible').click();
    cy.get('select#options_interface_remote_images').select('0');
    cy.get('select#options_interface_spam_policy').select('0');
    cy.get('.btn.btn-primary').click();
   
  
  });

});  