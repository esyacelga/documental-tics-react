import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./auth/auth-slice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer

    }
});