import { combineReducers } from 'redux'
import Login from './Login'
import Personal from './Personal'
import Team from './Team'

const rootReducer = combineReducers({
    Login,
    Personal,
    Team,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
