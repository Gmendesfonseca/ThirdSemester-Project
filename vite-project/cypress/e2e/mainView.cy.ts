describe('template spec', () => {
  it('Test the register form ', () => {
    cy.visit('http://localhost:5173');
    cy.get('#register-institution').should('be.visible').click();
    cy.get('#institution-name')
      .should('be.visible')
      .type('Universidade Exemplo');
    cy.get('#institution-email')
      .should('be.visible')
      .type('universidade@exemplo.com');
    cy.get('#institution-password').should('be.visible').type('12345678');
    cy.get('#institution-register-next-step-1')
      .should('be.visible')
      .click({ delay: 0 });
    cy.get('#institution-domain').should('be.visible').type('exemplo.com');
    cy.get('#institution-cnpj').should('be.visible').type('12345678901234');
    cy.get('#institution-register-next-step-2')
      .should('be.visible')
      .click({ delay: 0 });
    cy.get('#verification-code').should('be.visible').type('123456');
    cy.get('#register-submit').click();
  });
  it.skip('Test the login form ', () => {
    cy.visit('http://localhost:5173');
    cy.get('#type-login-selector').click();
    cy.get('#institution').click();
    cy.get('#email').should('be.visible').type('universidade@exemplo.com');
    cy.get('#password').should('be.visible').type('12345678');
    cy.get('#login-submit').click();
  });
});
