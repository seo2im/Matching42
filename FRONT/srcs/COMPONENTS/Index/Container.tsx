import React from 'react'
import { useRouter } from 'next/router'
import Index from './Index'

const Contaienr = () => {
    const router = useRouter()
    const link = (id: string) => {
        router.push({
            pathname: '/check',
            query: { id: id },
        })
    }

    return <Index link={link} />
}

export default Contaienr
