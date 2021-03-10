import { ApolloServer } from 'apollo-server'
import { resolvers } from './Apollo/resolver'
import { typeDefs } from './Apollo/schema'
import dbConnect from './Model'


const server = new ApolloServer({ typeDefs, resolvers })
dbConnect();

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`)
})
