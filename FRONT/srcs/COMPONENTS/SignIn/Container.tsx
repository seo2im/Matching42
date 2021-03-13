import React from 'react'
import SignIn from './SignIn'
import { useApollo } from '../../HOOK'
import { aLogin } from '../../QUERY/query'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'
import { personalSave } from '../../REDUX/REDUCER/Personal'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()
    const login = useSelector((state: RootState) => state.Login)
    const dispatch = useDispatch()

    console.log(login)
    const link = (url: string) => {
        router.push(url)
    }

    const signIn = async (password: string) => {
        try {
            const { data } = await apolloClient.query({
                query: aLogin,
                variables: { login: login, password: password },
            })
            if (data.login) {
                dispatch(personalSave(data.login.login, data.login.myProject))
                link('/main')
            } else link('/error')
        } catch (err) {
            console.log(err)
        }
    }

    return <SignIn signIn={signIn} />
}

export default Container
