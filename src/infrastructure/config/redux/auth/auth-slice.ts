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
        login: (state, {payload}) => {
            // @ts-ignore
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;

        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;

        },
        checkingCredentials: (state) => {
            // @ts-ignore
            state.status = 'checking'

        }
    }
})


export const {login, logout, checkingCredentials} = authSlice.actions;