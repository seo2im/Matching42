import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import merge from 'deepmerge'

let apolloClient: ApolloClient<NormalizedCacheObject> = null

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:4000/',
        }),
        cache: new InMemoryCache(),
    })
}

export const initializeApollo = (initialState = null) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract()
        const data = merge(initialState, existingCache)

        _apolloClient.cache.restore(data)
    }

    if (typeof window === 'undefined') return _apolloClient

    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export const useApollo = (initialState: any) => {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}
