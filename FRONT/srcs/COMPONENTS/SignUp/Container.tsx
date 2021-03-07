import React from 'react'
import SignUp from './SignUp'
import { useApollo } from '../../HOOK'
import { aAddUser } from '../../QUERY/query'

const Container = () => {
    const apolloClient = useApollo()

    const signUp = async () => {
        try {
            const data = await apolloClient.mutate({
                mutation: aAddUser,
                variables: { id: 'seo4em', password: '456' },
            })
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return <SignUp signUp={signUp} />
}

export default Container
