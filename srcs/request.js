import axios from  'axios'

export const request = async (url, params, token) => {
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
