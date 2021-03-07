import axios from 'axios'

const request = async (token: any, url: string, params?: any) => {
    const { data } = await axios({
        url: `https://api.intra.42.fr/v2/${url}`,
        method: 'get',
        headers: {
            Authorization: `Bearer ${token.token}`,
        },
        params: params,
    })
    return data
}

export default request
