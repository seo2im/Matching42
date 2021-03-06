import React from 'react'
import { useQuery } from '@apollo/client'
import { TEST_QUERY } from '../srcs/QUERY/query'

const HomePgae = () => {
    const { loading, error, data } = useQuery(TEST_QUERY)

    if (error) return <div>ERROR</div>
    if (loading) return <div>LOADING</div>
    console.log(data.getUser.id)

    return <div>DATA</div>
}

export default HomePgae
