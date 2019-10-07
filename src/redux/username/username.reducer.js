import { UserActionTypes } from './username.types'
const INITIAL_STATE = {
    username: 'John Doe',
    userage: 10
}

const usernameReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case UserActionTypes.SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case UserActionTypes.SET_USERAGE:
            return {
                ...state,
                userage: action.payload
            }
        default:
            return state
    }

}

export default usernameReducer