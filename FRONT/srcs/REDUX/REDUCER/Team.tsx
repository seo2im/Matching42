export type teamState = {
    projectId: number
    projectName: string
    users: string[]
}

const initialState: teamState = {
    projectId: 0,
    projectName: '',
    users: [],
}

export const INIT = 'TEAM/SAVE' as const
export const SAVE = 'TEAM/SAVE' as const

export const teamInit = () => ({
    type: INIT,
    payload: initialState,
})

export const teamSave = (team: teamState) => ({
    type: SAVE,
    payload: team,
})

type teamAction = ReturnType<typeof teamSave> | ReturnType<typeof teamInit>

const reducer = (state: teamState = initialState, action: teamAction) => {
    switch (action.type) {
        case INIT:
            return action.payload
        case SAVE:
            return action.payload
        default:
            return state
    }
}

export default reducer
