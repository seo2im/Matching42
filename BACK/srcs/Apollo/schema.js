import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        _id: ID
        login: String
        password: String # TODO : change crypto */
        myProject: [MyProject]
    }
    type MyProject {
        _id: ID
        projectId: Int
        autoMatching: Boolean
        #teamId: Int
        state: String
    }
    type Project {
        _id: ID
        name: String
        waitUserList: [Int] # user id
        teamList: [Int] # team id
    }
    type Team {
        _id: ID
        projectId: ID
        users: [Int] # user id*/
    }

    # Query
    type Query {
        getUser(login: String!): User
    }


    # Mutation
    type Mutation {
        addUser(login: String!, password: String!): User
    }
`