import { getToken } from './srcs/getToken'
import { request } from './srcs/request'
import fs from 'fs'

const main = async () => {
	const token = await getToken();
	const data = await request("", null, token)

	fs.writeFileSync("test.json", JSON.stringify(data, undefined, 4));
}

main();