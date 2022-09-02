/// <reference types="cypress"/>

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.contains('div', 'Hello!!!').should('be.visible');
  })
})