import { User } from '../../../Model/Schema'

const userToProject = async (_, { projectId }) => {
    try {
        const users = await User.find()
        return users.filter(
            user => user.myProject.some(
                    project => project.projectId === projectId && project.state === 'in_progress'
                )
            )
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default userToProject