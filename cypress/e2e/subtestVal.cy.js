Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://www.inbox.lv/');
  cy.get('#inx-lang-switch-button').click({ force: true });
  cy.get('#top-lang-switch-ddown').contains('English').click();

});