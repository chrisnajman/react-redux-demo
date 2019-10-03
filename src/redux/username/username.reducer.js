import { UserActionTypes } from './username.types'
const INITIAL_STATE = {
    username: 'John Doe'
}

const usernameReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case UserActionTypes.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }

}

export default usernameReducer