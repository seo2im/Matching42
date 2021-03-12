import React from 'react'
import { useRouter } from 'next/router'
import Index from './Index'

const Contaienr = () => {
    const router = useRouter()
    const link = (login: string) => {
        router.push({
            pathname: '/check',
            query: { login: login },
        })
    }

    return <Index link={link} />
}

export default Contaienr
