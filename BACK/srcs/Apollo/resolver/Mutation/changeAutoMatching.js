import { User, Project } from '../../../Model/Schema'

const update = async (login, projectId, flag) => {
    if (flag) {
        await Project.update({ projectId: projectId }, { $push: { waitUserList: login }})
    } else {
        await Project.update({ projectId: projectId }, { $pull: { waitUserList: login }})
    }
}

const changeAutoMatching = async (_, { login, projectId, flag }) => {
    const user = (await User.find({ login: login }))[0]
    const newMyProject = user.myProject.map(project => {
        if (project.projectId === projectId) {
            project.autoMatching = flag;
        }
        return project
    })
    await User.update({ login: login }, { $set: { myProject: newMyProject }})
    await update(login, projectId, flag)
    return (await User.find({ login: login }))[0]
}

export default changeAutoMatching
