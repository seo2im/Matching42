import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'
import { useRouter } from 'next/router'

const Container = () => {
    const personal = useSelector((state: RootState) => state.Personal)
    const router = useRouter()

    const link = (url: string) => {
        router.push(url)
    }

    return <Main personal={personal} link={link} />
}

export default Container
