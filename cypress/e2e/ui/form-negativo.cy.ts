describe('Automation Practice Form - Casos Negativos', () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form');
    });

    it('Não deve submeter formulário vazio', () => {
        cy.get('#submit').click({ force: true });

        cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('Não deve aceitar email inválido', () => {
        cy.get('#firstName').type('Teste');
        cy.get('#lastName').type('QA');
        cy.get('#userEmail').type('email_invalido');

        cy.get('#submit').click({ force: true });

        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
});