import { Project } from '../../../Model/Schema'

const getProjects = async (_, args) => {
    try {
        const projects = await Project.find()
        return projects
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getProjects
