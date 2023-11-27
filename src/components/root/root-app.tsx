import {router} from "../../adapters/router-app.tsx";
import {RouterProvider} from "react-router-dom";
import {AppTheme} from "../theme-manager";
import i18n from "../../infrastructure/i18n.ts";
import {I18nextProvider} from "react-i18next";

export const RootApp = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <AppTheme>
                <RouterProvider router={router}></RouterProvider>
            </AppTheme>
        </I18nextProvider>
    )
}