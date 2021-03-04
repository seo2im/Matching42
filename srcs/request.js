import axios from  'axios'


export const request = async (url, token) => {
	

	const { data } = await axios({
		url : url,
		method : "get",
		headers : {
			Authorization : `Bearer ${token.token}`
		}
	})
	return (data);
}
