import React from 'react'
import SignIn from './SignIn'
import { useApollo } from '../../HOOK'
import { aLogin } from '../../QUERY/query'
import { useRouter } from 'next/router'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()

    const link = (url: string) => {
        router.push(url)
    }

    const signIn = async (login: string, password: string) => {
        try {
            const { data } = await apolloClient.query({
                query: aLogin,
                variables: { login: login, password: password },
            })
            if (data.login) link('/main')
            else link('/error')
        } catch (err) {
            console.log(err)
        }
    }

    return <SignIn signIn={signIn} />
}

export default Container
