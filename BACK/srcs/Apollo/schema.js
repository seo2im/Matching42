import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        _id: ID
        login: String
        password: String # TODO : change crypto */
        salt: String
        myProject: [MyProject]
    }
    type MyProject {
        projectId: Int
        name: String
        autoMatching: Boolean
        teamId: Int
        state: String
    }
    type Project {
        _id: ID
        projectId: Int
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
        login(login: String!, password: String!): User
        getProjects: [Project]
        getProject(id: Int!): Project
    }

    # Mutation
    type Mutation {
        addUser(login: String!, password: String!): User
    }
`