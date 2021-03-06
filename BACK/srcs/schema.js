import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        id: Int
        password: Int # TODO : change crypto */
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
        getUser(id: Int!): User
    }


    # Mutation
    type Mutation {
        addUser(id: Int!, password: Int!): [User]
    }
`