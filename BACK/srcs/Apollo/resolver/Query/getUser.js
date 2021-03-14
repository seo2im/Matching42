import { User } from '../../../Model/Schema'

const getUser = async (_, { login }) => {
    try {
        const users = await User.find()
        return users.find(user => user.login === login)
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getUser
