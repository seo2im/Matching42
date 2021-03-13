import { combineReducers } from 'redux'
import Login from './Login'

const rootReducer = combineReducers({
    Login,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
