import { User, Project } from '../../../Model/Schema'
import { request } from '../../../42API/request'
import crypto from 'crypto'

const userUpdate = async (user) => {
    const data_from_42 = await request(`https://api.intra.42.fr/v2/users/${user.login}`, undefined)
    const projects = await Project.find()

    await User.update({ login: user.login }, { $set: {
        myProject: data_from_42.projects_users.map(e => ({
            projectId: e.project.id,
            name: e.project.name,
            autoMatching: user.myProject.find(project => project.projectId === e.project.id).autoMatching,
            teamId: user.myProject.find(project => project.projectId === e.project.id).teamId,
            state: e.status,
        })),
        update: new Date().toString()
    }})

    /*
    If you wanna update automatically use this

    const newUser = await User.find({ login: user.login });
    newUser[0].myProject(async e => {
        if ((e.state === 'in_progress' || e.state === 'waiting_for_correction'))
        {
            const wProject = projects.find(project => project.projectId === e.project.id)
            if (wProject)
                if(!wProject.waitUserList.includes(user.login))
                    await Project.update({ projectId: e.project.id }, { $push: { waitUserList: user.login }})
        }
    })
    */
    user.myProject.forEach(async e => {
        if (e.state === 'finished') {
            const mProject = projects.find(project => project.projectId === e.projectId)
            if (mProject)
                if (mProject.waitUserList.includes(user.login))
                    await Project.update({ projectId: e.projectId }, { $pull: { waitUserList: user.login } })
        }
    })
}

const login = async (_, { login, password }) => {
    try {
        const user = await User.find({ login: login })
        const hash = crypto.createHash('sha512').update(password + (user[0].salt + "")).digest('hex')
        if (hash === user[0].password) {
            await userUpdate(user[0])
            return user[0]
        }
        else
            return null
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default login
