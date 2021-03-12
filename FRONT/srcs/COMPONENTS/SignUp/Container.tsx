import React from 'react'
import SignUp from './SignUp'
import { useApollo } from '../../HOOK'
import { aAddUser } from '../../QUERY/query'
import { useRouter } from 'next/router'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()

    const link = (url: string) => {
        router.push(url)
    }

    const signUp = async (login: string, password: string) => {
        try {
            const { data } = await apolloClient.mutate({
                mutation: aAddUser,
                variables: { login: login, password: password },
            })
            console.log(data)
            if (data.addUser) link('/signIn')
            else link('/error')
        } catch (err) {
            console.log(err)
            link('/error')
        }
    }

    return <SignUp signUp={signUp} />
}

export default Container
