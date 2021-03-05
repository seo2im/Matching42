import React from 'react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}
App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)

    return { pageProps }
}

export default App
