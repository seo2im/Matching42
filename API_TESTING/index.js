import { getToken } from './srcs/getToken'
import { request } from './srcs/request'
import fs from 'fs'

const main = async () => {
	const token = await getToken();
	const data = await request("https://api.intra.42.fr/v2/campus_users?filter[campus_id]=29&page=40", undefined , token)
	//const data = await request("https://api.intra.42.fr/v2/users/68865", undefined , token)

	fs.writeFileSync("test.json", JSON.stringify(data, undefined, 4));
}

main();