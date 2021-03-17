import axios from  'axios'
import { getToken } from './getToken';

export const request = async (url, params, token) => {
	if (!token)
		token = await getToken()
	const { data } = await axios({
		url : url,
		method : "get",
		headers : {
			Authorization : `Bearer ${token.token}`
		},
		params : params
	})
	return (data);
}
