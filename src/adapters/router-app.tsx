import {createBrowserRouter, Navigate} from "react-router-dom";
import {LoginPage, RegisterPage} from "../components/auth";
import {RootPage} from "../components/root/pages/root-page.tsx";

export const router = createBrowserRouter([


    {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
    },
    {
        path: "/auth/register",
        element: <RegisterPage></RegisterPage>,
    },
    {
        path: "/*",
        element: <Navigate to={'/auth/login'}></Navigate>

    },
    {
        path: "/",
        element: <RootPage></RootPage>

    },
]);