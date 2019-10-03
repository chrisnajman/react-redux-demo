import { UserActionTypes } from './username.types'

export const setUserName = changedUserName => ({
    type: UserActionTypes.SET_USERNAME,
    payload: changedUserName
})