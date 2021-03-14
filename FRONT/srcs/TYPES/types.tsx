export type Users = {
    users: User[]
}
export type User = {
    login: string
    password: number /* TODO : change crypto */
    myProjects: MyProject[]
}
export type MyProject = {
    projectId: number
    autoMatching: boolean
    teamId: number
    state: 'ING' | 'EVAL' | 'FINISH'
}
export type Projects = {
    projects: Project[]
}
export type Project = {
    id: number
    name: string
    waitUserList: string[] /* user id*/
    teamList: number[] /* team id*/
}
export type Teams = {
    teams: Team[]
}
export type Team = {
    id: number
    projectId: number
    users: number[] /* user id*/
}
