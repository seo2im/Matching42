import { gql } from '@apollo/client'

export const aGetUser = gql`
    query User($login: String!) {
        getUser(login: $login) {
            login
            password
        }
    }
`

export const aLogin = gql`
    query User($login: String!, $password: String!) {
        login(login: $login, password: $password) {
            login
            myProject {
                projectId
                name
                autoMatching
                teamId
                state
            }
        }
    }
`

export const aAddUser = gql`
    mutation User($login: String!, $password: String!) {
        addUser(login: $login, password: $password) {
            login
        }
    }
`
