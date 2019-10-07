import { UserActionTypes } from './username.types'

export const setUserName = updatedUserName => ({
    type: UserActionTypes.SET_USERNAME,
    payload: updatedUserName
})


export const setUserAge = updatedUserAge => ({
    type: UserActionTypes.SET_USERAGE,
    payload: updatedUserAge
})