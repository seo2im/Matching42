import { Users } from './TEST_DB/Users'

export const resolvers = {
    Query: {
        getUser: (_, { id }) => {
            return Users.find(user => user.id === id)
        }
    },

    Mutation: {
        addUser: (_, newUser) => {
            return [...Users, newUser]
        }
    }
}