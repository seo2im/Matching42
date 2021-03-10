import Users from '../Model/schema'

export const resolvers = {
    Query: {
        getUser: async (_, { login }) => {
            try {
                const users = await Users.find()
                return users.find(user => user.login === login)
            } catch (err) {
                console.log(err);
                throw err;
            }   
        },
    },

    Mutation: {
        addUser: async (_, { login, password }) => {
            try {
                const user = new Users({ login, password })
                const result = await user.save();
                console.log(result);
                return result
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}