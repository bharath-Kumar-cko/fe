/// <reference types="cypress"/>

describe('empty spec', () => {
  it('passes', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://localhost:3000');
    cy.once('uncaught:exception', () => false);
    cy.contains('div', 'Hello!!!').should('be.visible');
  })
})