export type myProject = {
    projectId: number
    name: string
    autoMatching: string
    teamId: number
    state: string
}

export type PersonalState = {
    login: string
    myProject: myProject[]
}

export const SAVE = 'PERSONAL/SAVE' as const

export const personalSave = (login: string, myProject: myProject[]) => ({
    type: SAVE,
    payload: {
        login: login,
        myProject: myProject,
    },
})

type personalAction = ReturnType<typeof personalSave>

const initialState: PersonalState = {
    login: '',
    myProject: [],
}

const reducer = (state: PersonalState = initialState, action: personalAction) => {
    switch (action.type) {
        case SAVE:
            return action.payload
        default:
            return state
    }
}

export default reducer
