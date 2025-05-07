describe('Profile Image Upload', () => {
  it('should upload a profile image successfully', () => {
    // Apmeklējiet sākumlapu
    cy.visit('https://www.inbox.lv/');

    // Piesakieties, ja nepieciešams
    cy.get('input[id=imapuser]').type('andina19', { force: true });
    cy.get('#pass').click({ force: true }).type('Putraims111#', { force: true });
    cy.get('#btn_sign-in').click({ force: true });

    // Pārejiet uz attēla augšupielādes sadaļu
    cy.origin('https://email.inbox.lv', () => {
      // Pārliecinieties, ka izvēlētais elements ir pieejams un redzams
      cy.get('input[type="file"]#inx-img-upload')
        .should('be.visible')
        .as('fileInput');

      // Izvēlaties failu no fixtures mapes un augšupielādējiet
      cy.get('@fileInput').selectFile('cypress/fixtures/myImage.JPG', { force: true }).then((input) => {
        // Pārbaude, vai faila izvēle notika veiksmīgi
        expect(input[0].files[0].name).to.eq('myImage.JPG');
      });

      // Pārbaudiet, vai attēls ir pievienots un parādīts
      cy.get('#profile-image')
        .should('have.attr', 'src')
        .and('include', 'myImage.JPG');
    });
  });
});
