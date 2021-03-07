import { gql } from '@apollo/client'

export const aGetUser = gql`
    query User($id: String!) {
        getUser(id: $id) {
            id
            password
        }
    }
`

export const aAddUser = gql`
    mutation User($id: String!, $password: String!) {
        addUser(id: $id, password: $password) {
            id
            password
        }
    }
`
