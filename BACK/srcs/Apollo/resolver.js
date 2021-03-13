import { User, Team, Project } from '../Model/Schema'
import { request } from '../42API/request'
import crypto from 'crypto'

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
        login: async (_, { login, password }) => {
            try {
                const user = await User.find({ login: login })
                const hash = crypto.createHash('sha512').update(password + (user[0].salt + "")).digest('hex')
                if (hash === user[0].password)
                    return user[0]
                else
                    return null
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
        },
    },

    Mutation: {
        addUser: async (_, { login, password }) => {
            console.log(login, password)
            try {
                const data_from_42 = await request(`https://api.intra.42.fr/v2/users/${login}`, undefined)
                const salt = Math.round((new Date().valueOf() * Math.random())) + ""
                console.log(salt)
                const user = new User({ 
                    login: login, 
                    password: crypto.createHash('sha512').update(password + salt).digest('hex'),
                    salt: salt,
                    myProject: data_from_42.projects_users.map(e => ({
                        projectId: e.project.id,
                        name: e.project.name,
                        autoMatching: false,
                        teamId: -1,
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