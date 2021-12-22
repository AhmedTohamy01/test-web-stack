import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query ($filter: String!, $limit: ID!) {
    users(filter: $filter, limit: $limit) {
      id
      name
      address
      description
    }
  }
`

export const GET_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      name
      address
      description
    }
  }
`

export const ADD_USER = gql`
  mutation ($name: String!, $address: String!, $description: String!) {
    addUser(name: $name, address: $address, description: $description) {
      id
      name
      address
      description
    }
  }
`

export const UPDATE_USER = gql`
  mutation (
    $id: ID!
    $name: String!
    $address: String!
    $description: String!
  ) {
    updateUser(
      id: $id
      name: $name
      address: $address
      description: $description
    ) {
      id
      name
      address
      description
    }
  }
`

export const DELETE_USER = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      address
      description
    }
  }
`
