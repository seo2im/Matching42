import { User, Team, Project } from '../Model/Schema'

/*
    1. make team and save
    2. Project wait User list slice
    3. Project update team id
    3. User add team
*/
export const makeTeam = async () => {
    console.log("make Team schedule start")
    const projects = await Project.find()

    projects.forEach(async project => {
        if (project.waitUserList.length >= 4) {
            const newTeam = new Team({
                projectId: project.projectId,
                projectName: project.name,
                users: project.waitUserList.slice(0, 4),
            })
            await newTeam.save()
            await Project.update(
                { projectId: project.projectId },
                { $set: { waitUserList: project.waitUserList.slice(4) }}
            )
            await Project.update(
                { projectId: project.projectId },
                { $push: { teamList: newTeam._id }}
            )

            const users = await User.find()
            project.waitUserList.slice(0, 4).forEach(async login => {            
                const newMyProject = users.find(e => e.login === login).myProject.map(pr => {
                    if (pr.projectId === project.projectId) {
                        pr.teamId = newTeam._id
                    }
                    return pr
                })
                await User.update({ login: login }, { $set: { myProject: newMyProject }})
            })
            console.log("Team made in ", projectId)
        }
    })
}

