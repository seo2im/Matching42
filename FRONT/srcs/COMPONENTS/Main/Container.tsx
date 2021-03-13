import React from 'react'
import Main from './Main'
import { useSelector } from 'react-redux'
import { RootState } from '../../REDUX/REDUCER'

const Container = () => {
    const personal = useSelector((state: RootState) => state.Personal)

    console.log(personal)

    return <Main personal={personal} />
}

export default Container
