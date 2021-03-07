import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Check from './Check'
import { getUser } from '../../42API'
import { useQuery } from '@apollo/client'
import { aGetUser } from '../../QUERY/query'

const Container = () => {
    const { query } = useRouter()
    const { loading, error, data } = useQuery(aGetUser, {
        variables: { id: 'seolim' },
    })

    const check = async () => {
        try {
            const isUser = await getUser(query.id) /* TODO : custom resigining */
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        check()
    }, [])

    return <Check />
}

export default Container
