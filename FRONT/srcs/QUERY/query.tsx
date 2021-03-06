import { gql } from '@apollo/client'

export const TEST_QUERY = gql`
    query User {
        getUser(id: 1) {
            id
            password
        }
    }
`
