import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    phiteURL: null,
    errorMessage: null
}

const initialState: AuthState = {
    displayName: null, email: null, errorMessage: null, phiteURL: null, status: "not-authenticated", uid: null

};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {

        },
        logout: () => {

        },
        checkingCredentials: () => {

        }
    }
})


export const {login, logout, checkingCredentials} = authSlice.actions;