import { User, Project } from '../../../Model/Schema'

const flushProject = async (_, arg) => {
    await Project.updateMany({}, { $set: { waitUserList: [] }})
    return await Project.find()
}

export default flushProject
