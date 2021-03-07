import { gql } from '@apollo/client'

export const aGetUser = gql`
    query User {
        getUser($id: Sring!) {
            id
            password
        }
    }
`
