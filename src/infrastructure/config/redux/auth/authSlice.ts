import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        phiteURL: null,
        errorMessage: null

    },
    reducers: {
        login: () => {

        }
    }
})

//export const