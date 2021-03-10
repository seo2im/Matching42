import { User, Team, Project } from '../Model/Schema'
import { request } from '../42API/request'

export const resolvers = {
    Query: {
        getUser: async (_, { login }) => {
            try {
                const users = await User.find()
                return users.find(user => user.login === login)
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        getProjects: async (_, args) => {
            try {
                const projects = await Project.find()
                return projects
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        getProject: async (_, { id }) => {
            try {
                const projects = await Project.find()
                return projects.find(project => project.projectId === id)
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },

    Mutation: {
        addUser: async (_, { login, password }) => {
            try {
                const data_from_42 = await request(`https://api.intra.42.fr/v2/users/${login}`, undefined)
                const user = new User({ 
                    login: login, 
                    password: password,
                    myProject: data_from_42.projects_users.map(e => ({
                        projectId: e.project.id,
                        autoMatching: false,
                        state: e.status,
                    }))
                 })
                const result = await user.save();
                return result
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    }
}