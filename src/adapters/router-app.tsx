import {createBrowserRouter, Navigate} from "react-router-dom";
import {LoginPage, RegisterPage} from "../components/auth";

export const router = createBrowserRouter([

    {
        path: "/",
        element: '<NavBarExample/>',
        children: [
            {
                path: "/marvel",
                element: '<PrivateRoute><MarvelPage/></PrivateRoute>',
            },


            {
                path: "/search",
                element: "<SearchPage/>",

            },

        ]
    },
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
]);