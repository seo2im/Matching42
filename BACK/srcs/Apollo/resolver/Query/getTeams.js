import { Team } from '../../../Model/Schema'

const getTeams = async (_, arg) => {
    try {
        const team = await Team.find()
        return team
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getTeams
