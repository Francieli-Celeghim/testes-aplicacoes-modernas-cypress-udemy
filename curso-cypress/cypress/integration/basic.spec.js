/// <reference types="cypress" />

describe('Cypress basics', () => {
  it('Should visit a page and assert title', () => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')

      cy.pause()

      cy.title().should('be.equal', 'Campo de Treinamento')
      cy.title().should('contain', 'Campo').debug()

      //outra forma de fazer
      cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
  })

  it('Should find and interact with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!')
  })
})