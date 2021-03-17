import React from 'react'
import SignIn from './SignIn'
import { useApollo } from '../../HOOK'
import { aLogin } from '../../QUERY/query'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()
    const login = useSelector((state: RootState) => state.Login)

    console.log(login)
    const link = (url: string) => {
        router.push(url)
    }

    const signIn = async (password: string) => {
        try {
            const { data } = await apolloClient.mutate({
                mutation: aLogin,
                variables: { login: login, password: password },
            })
            if (data.login) {
                localStorage.setItem('login', data.login.login)
                link('/main')
            } else link('/error')
        } catch (err) {
            console.log(err)
        }
    }

    return <SignIn signIn={signIn} />
}

export default Container
