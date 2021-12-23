/// <reference types='cypress' />
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_ALL_USERS } from '../../src/GraphQLQueries/GraphQLQueries'

describe('Check if All visual elements in MainPage show correctly', () => {

  before(() => {
    cy.visit('/')
  })

  it('Check if MainPage title show correctly', () => {
    cy.get('[data-cy=main-title]').contains('Users list', { matchCase: false }).should('be.visible')
  })

  it('Check if AddIcon show correctly', () => {
    cy.get('[data-cy=add-icon]').should('be.visible')
  })

  it('Check if SearchBox show correctly', () => {
    cy.get('[data-cy=search-box]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Search ...')
  })

  it('Check if Card show/hide correctly', async () => {
    const apolloClient = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache(),
    })

    const limit = 6

    const { data } = await apolloClient.query({
      query: GET_ALL_USERS,
      variables: { filter: '', limit }
    })

    if (data.users.length === limit || (data.users.length < limit && data.users.length > 0)) {
      cy.get('[data-cy=card-item]').should('be.visible')
      cy.get('[data-cy=edit-icon]').should('be.visible')
      cy.get('[data-cy=delete-icon]').should('be.visible')
      cy.get('[data-cy=card-avatar]').should('be.visible')
      cy.get('[data-cy=card-name]').should('be.visible')
      cy.get('[data-cy=card-desc]').should('be.visible')
    } else if (data.users.length === 0) {
      cy.get('[data-cy=card-item]').should('not.exist')
    }
  })

  it('Check if LoadMore button show/hide correctly', async () => {
    const apolloClient = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache(),
    })

    const limit = 6
    const { data } = await apolloClient.query({
      query: GET_ALL_USERS,
      variables: { filter: '', limit }
    })

    if (data.users.length === limit) {
      cy.get('[data-cy=loadmore-button]')
        .contains('Load More', { matchCase: false })
        .should('be.visible')
    } else if (data && data.users.length < limit) {
      cy.get('[data-cy=loadmore-button]').should('not.exist')
    } else if (data && data.users.length === 0) {
      cy.get('[data-cy=loadmore-button]').should('not.exist')
      cy.get('[data-cy=no-data-title]')
        .contains('Sorry, We did not find any data', { matchCase: false })
        .should('be.visible')
      cy.get('[data-cy=no-data-image]')
        .should('be.visible')
    }
  })


  it('Check if limit changes when click LoadMore button (if exist)', async () => {
    const apolloClient = new ApolloClient({
      uri: 'http://localhost:5000/graphql',
      cache: new InMemoryCache(),
    })

    const limit = 6
    const { data } = await apolloClient.query({
      query: GET_ALL_USERS,
      variables: { filter: '', limit }
    })

    if (data.users.length === limit) {
      cy.get('[data-cy=loadmore-button]').click()
      cy.url().should('include', '/limit=12')
      console.log(cy.url())
    } else {
      cy.get('[data-cy=loadmore-button]').should('not.exist')
    }
  })

})
