import { combineReducers } from 'redux'
import Login from './Login'
import Personal from './Personal'

const rootReducer = combineReducers({
    Login,
    Personal,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
