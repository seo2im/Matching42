import React from 'react'
import Main from './Main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'
import { useApollo } from '../../HOOK'
import { aChangeAutoMatching } from '../../QUERY/query'
import { useRouter } from 'next/router'
import { personalSave } from '../../REDUX/REDUCER/Personal'

const Container = () => {
    const personal = useSelector((state: RootState) => state.Personal)
    const router = useRouter()
    const apolloClient = useApollo()
    const dispatch = useDispatch()

    const link = (url: string) => {
        router.push(url)
    }

    const autoMathingUpdate = async (login: string, projectId: number, flag: boolean) => {
        try {
            const { data } = await apolloClient.mutate({
                mutation: aChangeAutoMatching,
                variables: { login: login, projectId: projectId, flag: flag },
            })
            if (data.changeAutoMatching)
                dispatch(
                    personalSave(data.changeAutoMatching.login, data.changeAutoMatching.myProject),
                )
        } catch (err) {
            console.log(err)
            link('/error')
        }
    }

    return <Main personal={personal} autoMatchingUpdate={autoMathingUpdate} />
}

export default Container
