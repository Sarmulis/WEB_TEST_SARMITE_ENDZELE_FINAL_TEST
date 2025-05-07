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
    
    cy.get('a.a-menu__link[href="/prefs/vacation"]', { timeout: 10000 }).should('be.visible').click();
    cy.get('.btn.btn-primary').click();
    cy.get('input[id=subject]').clear().type('Uz epastiem nevarēšu atbildēt līdz 01.09.2029.');
    cy.get('textarea[id=reason]').clear().type('Līdz 01.05.2029. nebūšu sasniedzama, sazinieties ar citiem!');
    cy.get('input#startDate').invoke('val', '2025-05-15').trigger('change');
    cy.get('input#endDate').invoke('val', '2025-08-01').trigger('change');
    cy.get('input[id=days]').clear().type('15');
    cy.get('.btn.btn-primary[type="submit"').click();
    
  });
});  