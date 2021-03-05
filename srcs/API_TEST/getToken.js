import axios from 'axios'
import { UID, SECRET } from '../../Secret'

export const getToken = async () => {
	const response =  await axios({
		url : "https://api.intra.42.fr/oauth/token",
		method : "post",
		data : {
			grant_type : "client_credentials",
			client_id : UID,
			client_secret : SECRET
		}
	})
	return {
		token	: response.data.access_token,
		expire	: Date.now() + response.data.expires_in * 1000
	}
}
