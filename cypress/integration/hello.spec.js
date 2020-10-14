/// <reference types="cypress" />

context('Hello', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Default page', () => {
    it('should contain mytext', () => {
      // https://on.cypress.io/should
      cy.get('.c-myclass')
        .first()
        // checking the text of the <td> element in various ways
        .should('have.text', 'mytext')
      })
  })

})
