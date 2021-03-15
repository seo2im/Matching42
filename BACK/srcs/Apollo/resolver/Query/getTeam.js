import { Team } from '../../../Model/Schema'

const getTeam = async (_, { _id }) => {
    try {
        const team = await Team.find({ _id: _id})
        return team[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getTeam
