import {router} from "../../adapters/router-app.tsx";
import {RouterProvider} from "react-router-dom";
import {AppTheme} from "../theme-manager";

export const RootApp = () => {
    return (
        <AppTheme>
            <RouterProvider router={router}></RouterProvider>
        </AppTheme>
    )
}