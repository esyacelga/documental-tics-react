import {createTheme} from "@mui/material";

export const ChatGptTheme = createTheme({
    palette: {
        primary: {
            main: '#2196f3', // Azul primario
        },
        secondary: {
            main: '#f50057', // Rosa como secundario
        },
        background: {
            default: '#f4f6f9', // Fondo gris claro
            paper: '#fff', // Fondo blanco del papel
        },
        text: {
            primary: '#333', // Texto principal
            secondary: '#666', // Texto secundario
        },
        // Otros colores o configuraciones de la paleta según sea necesario
    },
});
