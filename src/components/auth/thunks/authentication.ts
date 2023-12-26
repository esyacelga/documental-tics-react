import {checkingCredentials} from "../../../infrastructure";

// @ts-ignore
export const checkingAuthentication = (email, password) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
    }
}

// @ts-ignore
export const startGoogleSignIn = (email, password) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
    }
}