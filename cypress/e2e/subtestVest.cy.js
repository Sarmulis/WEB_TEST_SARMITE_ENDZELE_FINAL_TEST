import 'cypress-iframe';


Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19', { force: true });
  cy.get('#pass').click({ force: true }).type('Putraims111#', { force: true });
  cy.get('#btn_sign-in').click({ force: true });

  cy.origin('https://email.inbox.lv', () => {
    cy.get('button[data-test=ml-compose-btn]').should('be.visible').click();
    cy.get('input[id=suggest-to]').click().type('sarmulise@gmail.com');
    cy.get('input[id=subject]').click().type('bilde'); 

    //cy.get('#attach-button').click();
    //selectFile('"C:\skola\WEB_TEST_SARMITE_ENDZELE_FINAL_TEST-1\cypress\fixtures\myImage.JPG"');
    //cy.get('.compose-attachs__toolbar').selectFile('cypress/fixtures/myImage.JPG');
    //cy.contains('Pievienot failus').click({ force: true });

    cy.get('iframe.cke_wysiwyg_frame').then($iframe => {
      const body = $iframe.contents().find('body');
    
      cy.wrap(body).should('be.visible').click().type('Šis ir tests!');
    });

    cy.get('button[data-test=toolbar-send]').should('be.visible').click();

      
});
    
});
