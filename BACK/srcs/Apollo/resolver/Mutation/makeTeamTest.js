import { Team } from '../../../Model/Schema'
import { makeTeam } from '../../schedule'

const makeTeamTest = async (_, arg) => {
    await makeTeam()

    return await Team.find()
}

export default makeTeamTest
