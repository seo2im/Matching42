import request from './request'
import getToken from './getToken'

const getUser = async (userId: string) => {
    const token = await getToken()
    const data = await request(token, `users/${userId}`)

    return data
}

export default getUser
