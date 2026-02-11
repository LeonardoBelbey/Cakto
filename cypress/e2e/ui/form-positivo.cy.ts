describe('Automation Practice Form', () => {

  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('Deve preencher e enviar o formulário com sucesso', () => {
    cy.fixture('user').then(user => {

      cy.get('#firstName').type(user.firstName);
      cy.get('#lastName').type(user.lastName);
      cy.get('#userEmail').type(user.email);

      cy.contains('.custom-control-label', user.gender)
        .click({ force: true });

      cy.get('#userNumber').type(user.mobile);

      cy.get('#subjectsInput')
        .type(`${user.subject}{enter}`);

      cy.contains('.custom-control-label', user.hobby)
        .click({ force: true });

      cy.get('#currentAddress')
        .scrollIntoView()
        .type(user.address, { force: true });

      cy.get('#react-select-3-input')
        .type('NCR{enter}', { force: true });

      cy.get('#react-select-4-input')
        .type('Delhi{enter}', { force: true });

      cy.wait(300);

      cy.get('#submit')
        .scrollIntoView()
        .click({ force: true });

      cy.get('.modal-content').should('be.visible');
      cy.contains('Thanks for submitting the form');

      cy.get('table').should('contain', user.firstName);
      cy.get('table').should('contain', user.lastName);
      cy.get('table').should('contain', user.email);
      cy.get('table').should('contain', user.mobile);

    });
  });

});