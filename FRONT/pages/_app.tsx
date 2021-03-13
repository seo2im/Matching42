import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../srcs/HOOK'
import { ThemeProvider } from 'styled-components'
import { theme } from '../srcs/STYLES/Theme'
import reduxWrapper from '../srcs/REDUX/Store'

const App = ({ Component, pageProps }: AppProps) => {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default reduxWrapper.withRedux(App)
