import { combineReducers} from 'redux'

import usernameReducer from './username/username.reducer'

export default combineReducers({
    currentUserName: usernameReducer
})