/// <reference types='cypress' />

describe('Check if all visual elements in Delete Modal show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if Delete Modal show up (with overlay) when click on DeleteIcon', () => {
    cy.get('[data-cy=delete-icon]').first().click()
    cy.get('[data-cy=modal-overylay]').should('be.visible')
    cy.get('[data-cy=delete-modal]').should('be.visible')
  })

  it('Check if Delete Modal title show correctly', () => {
    cy.get('[data-cy=delete-modal-title]').contains('This will delete the user !', { matchCase: false }).should('be.visible')
  })

  it('Check if Save Button show correctly', () => {
    cy.get('[data-cy=delete-save-button]')
      .contains('Yes, Delete', { matchCase: false })
      .should('be.visible')
  })

  it('Check if Cancel Button show/function correctly', () => {
    cy.get('[data-cy=delete-cancel-button]').contains('Cancel', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=delete-cancel-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=delete-modal]').should('not.exist')
  })

})
