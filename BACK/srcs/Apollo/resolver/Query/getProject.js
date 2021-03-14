import { Project } from '../../../Model/Schema'

const getProject = async (_, { id }) => {
    try {
        const projects = await Project.find()
        return projects.find(project => project.projectId === id)
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default getProject