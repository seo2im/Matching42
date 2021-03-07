import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        id: String
        password: String # TODO : change crypto */
        myProjects: [MyProject]
    }
    type MyProject {
        projectId: Int
        autoMatching: Boolean
        teamId: Int
        state: String
    }
    type Project {
        id: Int
        name: String
        waitUserList: [Int] # user id
        teamList: [Int] # team id
    }
    type Team {
        id: Int
        projectId: Int
        users: [Int] # user id*/
    }

    # Query
    type Query {
        getUser(id: String!): User
    }


    # Mutation
    type Mutation {
        addUser(id: String!, password: String!): [User]
    }
`