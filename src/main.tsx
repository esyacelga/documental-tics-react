import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {RootApp} from "./components/root/root-app.tsx";
import {Provider} from 'react-redux';
import {store} from "./infrastructure";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RootApp/>
        </Provider>
    </React.StrictMode>,
)

