import { ApolloServer } from 'apollo-server'
import { resolvers } from './Apollo/resolver'
import { typeDefs } from './Apollo/schema'
import dbConnect from './Model'
import { makeTeam } from './Apollo/schedule'


const server = new ApolloServer({ typeDefs, resolvers })
dbConnect();

server.listen().then(({ url }) => {
    setInterval(() => makeTeam(), 10000)  
    console.log(`server ready at ${url}`)
})
