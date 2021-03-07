import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Check from './Check'
import { getUser } from '../../42API'
import { useApollo } from '../../HOOK'
import { aGetUser } from '../../QUERY/query'

const Container = () => {
    const router = useRouter()
    const apolloClient = useApollo()
    const [data, setData] = useState<any>(null)

    const check42 = async () => {
        try {
            return await getUser(router.query.id) /* TODO : custom resigining */
        } catch (err) {
            console.log(err)
            return null
        }
    }
    const checkDB = async user => {
        try {
            const { data } = await apolloClient.query({
                query: aGetUser,
                variables: { id: user.login },
            })
            if (data) {
                setData(data)
                link('/signIn')
            }
        } catch (err) {
            console.log(err)
            link('/signUp')
        }
    }
    const link = (url: string) => {
        router.push(url)
    }

    useEffect(() => {
        const check = async () => {
            const user = await check42()
            await checkDB(user)
        }
        check()
    }, [])

    return <Check />
}

export default Container
