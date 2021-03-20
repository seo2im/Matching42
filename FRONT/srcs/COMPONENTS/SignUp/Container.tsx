import React from 'react'
import SignUp from './SignUp'
import { useApollo } from 'srcs/HOOK'
import { aAddUser } from 'srcs/QUERY/query'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from 'srcs/REDUX/REDUCER'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()
    const login = useSelector((state: RootState) => state.Login)

    const link = (url: string) => {
        router.push(url)
    }

    const signUp = async (password: string) => {
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
