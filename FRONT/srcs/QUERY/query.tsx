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
    mutation User($login: String!, $password: String!) {
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

export const aChangeAutoMatching = gql`
    mutation User($login: String!, $projectId: Int!, $flag: Boolean!) {
        changeAutoMatching(login: $login, projectId: $projectId, flag: $flag) {
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

export const aGetTeam = gql`
    query Team($_id: ID!) {
        getTeam(_id: $_id) {
            projectId
            projectName
            users
        }
    }
`
