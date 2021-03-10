import { getToken } from './srcs/getToken'
import { request } from './srcs/request'
import fs from 'fs'

const main = async () => {
	const token = await getToken();
	const data = await request("https://api.intra.42.fr/v2/cursus/21/projects?page[number]=8", undefined , token)

	fs.writeFileSync("test.json", JSON.stringify(data, undefined, 4));
}

main();