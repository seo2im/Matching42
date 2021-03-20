import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Check from './Check'
import { getUser } from 'srcs/42API'
import { useApollo } from 'srcs/HOOK'
import { aGetUser } from 'srcs/QUERY/query'
import { loginSave } from 'srcs/REDUX/REDUCER/Login'

const Container = () => {
    const router = useRouter()
    const apolloClient = useApollo()
    const dispatch = useDispatch()

    const link = (url: string) => {
        router.push(url)
    }

    const check42 = async () => {
        try {
            return await getUser(router.query.login as string) /* TODO : custom resigining */
        } catch (err) {
            console.log('42 check error')
            console.log(err)
            return null
        }
    }

    const checkDB = async user => {
        dispatch(loginSave(user.login))
        try {
            const { data } = await apolloClient.query({
                query: aGetUser,
                variables: { login: user.login },
            })
            if (data.getUser) link('/signIn')
            else link('/signUp')
        } catch (err) {
            console.log(err)
            dispatch(loginSave(''))
            link('/error')
        }
    }

    useEffect(() => {
        const check = async () => {
            const user = await check42()
            if (user) await checkDB(user)
            else link('/error')
        }
        check()
    }, [])

    return <Check />
}

export default Container
