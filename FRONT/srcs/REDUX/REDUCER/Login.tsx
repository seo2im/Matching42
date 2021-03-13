export const SAVE = 'LOGIN/SAVE' as const

export const loginSave = (login: string) => ({
    type: SAVE,
    payload: login,
})

type LoginAction = ReturnType<typeof loginSave>
type LoginState = string

const initialState: LoginState = ''

const reducer = (state: LoginState = initialState, action: LoginAction) => {
    switch (action.type) {
        case SAVE:
            return action.payload
        default:
            return state
    }
}

export default reducer
