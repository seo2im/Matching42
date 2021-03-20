import React, { useEffect } from 'react'
import Main from './Main'
import { useApollo } from 'srcs/HOOK'
import { aGetUser } from 'srcs/QUERY/query'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'srcs/REDUX/REDUCER'
import { useRouter } from 'next/router'
import { personalSave } from 'srcs/REDUX/REDUCER/Personal'

const Container = () => {
    const apolloClient = useApollo()
    const router = useRouter()
    const personal = useSelector((state: RootState) => state.Personal)
    const dispatch = useDispatch()

    const link = (url: string) => {
        router.push(url)
    }
    const getProjectData = async () => {
        try {
            const { data } = await apolloClient.query({
                query: aGetUser,
                variables: { login: localStorage.getItem('login') },
            })
            if (data.getUser) {
                dispatch(personalSave(data.getUser.login, data.getUser.myProject))
            } else link('/error')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProjectData()
    }, [])

    return <Main personal={personal} link={link} />
}

export default Container
