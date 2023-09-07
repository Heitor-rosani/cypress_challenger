/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('baseUrlWeb'))
  cy.get('.login_logo').should('have.text', 'Swag Labs')
  cy.get('[data-test="username"]').type(Cypress.env('userWeb'))
  cy.get('[data-test="password"]').type(Cypress.env('passwordWeb'))
  cy.get('[data-test="login-button"]').click()
})
