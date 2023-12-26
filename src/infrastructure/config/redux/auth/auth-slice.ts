import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

const initialState: AuthState = {
    displayName: null, email: null, errorMessage: null, photoURL: null, status: "not-authenticated", uid: null

};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {

        },
        logout: () => {

        },
        checkingCredentials: (state) => {
            // @ts-ignore
            state.status='checking'

        }
    }
})


export const {login, logout, checkingCredentials} = authSlice.actions;