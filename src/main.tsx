import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {RootApp} from "./components/root-component/root-app.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RootApp/>
    </React.StrictMode>,
)

