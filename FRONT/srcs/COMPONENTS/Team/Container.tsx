import React from 'react'
import Team from './Team'
import { useRouter } from 'next/router'

const Container = () => {
    const router = useRouter()

    return <Team />
}

export default Container
