import { getToken } from './getToken'
import { request } from './request'
import fs from 'fs'

const main = async () => {
	const token = await getToken();
	const data = await request("https://api.intra.42.fr/v2/certificates_users/seolim", null, token)

	fs.writeFileSync("test.json", JSON.stringify(data, undefined, 4));
}

main();