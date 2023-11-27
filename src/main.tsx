import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {RootApp} from "./components/root/root-app.tsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./infrastructure/i18n.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <RootApp/>
        </I18nextProvider>
    </React.StrictMode>,
)

