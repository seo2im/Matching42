import { getToken } from './srcs/getToken'
import { request } from './srcs/request'
import fs from 'fs'

const main = async () => {
	const token = await getToken();
	const data = await request("https://api.intra.42.fr/v2/projects/1340/projects_users", null, token)

	fs.writeFileSync("test.json", JSON.stringify(data, undefined, 4));
}

main();