Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');

  cy.get('input[id=imapuser]').type('andina19');
  cy.get('input[id=pass]').type('Putraims111#');
  cy.get('#btn_sign-in').click();

});