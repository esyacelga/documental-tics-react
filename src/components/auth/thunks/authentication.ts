import {checkingCredentials, login, logout} from "../../../infrastructure";
import {singInWithGoogle} from "../../../adapters/authentication/providers.ts";

// @ts-ignore
export const checkingAuthentication = (email, password) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
    }
}

// @ts-ignore
export const startGoogleSignIn = (email, password) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}