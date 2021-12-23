/// <reference types='cypress' />

describe('Check if all visual elements in Add Modal show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if Add Modal show up (with overlay) when click on AddIcon', () => {
    cy.get('[data-cy=add-icon]').click()
    cy.get('[data-cy=modal-overylay]').should('be.visible')
    cy.get('[data-cy=add-modal]').should('be.visible')
  })


  it('Check if Add Modal title show correctly', () => {
    cy.get('[data-cy=add-modal-title]').contains('Add User', { matchCase: false }).should('be.visible')
  })

  it('Check if Map Part show correctly', () => {
    cy.get('[data-cy=add-map-image]').should('be.visible')
    cy.get('[data-cy=add-map-box]').contains('Map With Address', { matchCase: false }).should('be.visible')
  })

  it('Check if Name Field show correctly', () => {
    cy.get('[data-cy=add-name-label]').contains('Name', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=add-name-input]')
      .should('be.empty')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Address Field show correctly', () => {
    cy.get('[data-cy=add-address-label]').contains('address', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=add-address-input]')
      .should('be.empty')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Description Field show correctly', () => {
    cy.get('[data-cy=add-desc-label]').contains('Description', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=add-desc-input]')
      .should('be.empty')
      .and('be.visible')
      .and('not.have.attr', 'value')
  })

  it('Check if Save Button show correctly', () => {
    cy.get('[data-cy=add-save-button]')
      .contains('Save', { matchCase: false })
      .should('be.visible')
      .and('have.attr', 'disabled')
  })

  it('Check if Cancel Button show/function correctly', () => {
    cy.get('[data-cy=add-cancel-button]').contains('Cancel', { matchCase: false }).should('be.visible')
    cy.get('[data-cy=add-cancel-button]').click()
    cy.get('[data-cy=modal-overylay]').should('not.exist')
    cy.get('[data-cy=add-modal]').should('not.exist')
  })

})
