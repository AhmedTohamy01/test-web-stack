/// <reference types='cypress' />

describe('Check if all visual elements in Edit Modal show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if Edit Modal show up (with overlay) when click on EditIcon', () => {
    cy.get('[data-cy=edit-icon]').first().click()
    cy.get('[data-cy=modal-overylay]').should('be.visible')
    cy.get('[data-cy=edit-modal]').should('be.visible')
  })


  it('Check if Edit Modal title show correctly', () => {
    cy.get('[data-cy=edit-modal-title]').contains('Edit User', { matchCase: false }).should('be.visible')
  })

  it('Check if Map Part show correctly', () => {
    cy.get('[data-cy=edit-map-image]').should('be.visible')
    cy.get('[data-cy=edit-map-box]').contains('Map With Address', { matchCase: false }).should('be.visible')
  })

  it('Check if Name Field show correctly', () => {
    cy.get('[data-cy=edit-name-label]').contains('Name', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=edit-name-input]').should('be.visible').and('have.attr', 'value')
  })

  it('Check if Address Field show correctly', () => {
    cy.get('[data-cy=edit-address-label]').contains('address', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=edit-address-input]').should('be.visible').and('have.attr', 'value')
  })

  it('Check if Description Field show correctly', () => {
    cy.get('[data-cy=edit-desc-label]').contains('Description', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=edit-desc-input]').should('be.visible').and('have.attr', 'value')
  })

  it('Check if Save Button show correctly', () => {
    cy.get('[data-cy=edit-save-button]')
      .contains('Save', { matchCase: false })
      .should('be.visible')
  })

  it('Check if Cancel Button show/function correctly', () => {
    cy.get('[data-cy=edit-cancel-button]').contains('Cancel', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=edit-cancel-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=edit-modal]').should('not.exist')
  })

})