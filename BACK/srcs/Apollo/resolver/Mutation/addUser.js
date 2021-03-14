import { User } from '../../../Model/Schema'
import { request } from '../../../42API/request'
import crypto from 'crypto'

const addUser = async (_, { login, password }) => {
    try {
        const data_from_42 = await request(`https://api.intra.42.fr/v2/users/${login}`, undefined)
        const salt = Math.round((new Date().valueOf() * Math.random())) + ""
        console.log(salt)
        const user = new User({ 
            login: login, 
            password: crypto.createHash('sha512').update(password + salt).digest('hex'),
            salt: salt,
            myProject: data_from_42.projects_users.map(e => ({
                projectId: e.project.id,
                name: e.project.name,
                autoMatching: false,
                state: e.status,
            })),
            update: new Date().toString(),
        })                
        const result = await user.save();
        return result
    } catch (err) {
        console.log(err);
        throw err
    }
}

export default addUser
