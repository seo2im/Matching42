import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolver'
import { typeDefs } from './schema'

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})
