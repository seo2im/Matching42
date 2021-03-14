import Query from './resolver/Query'
import Mutation from './resolver/Mutation'
import { request } from '../42API/request'
import crypto from 'crypto'

export const resolvers = {
    Query,
    Mutation,
}