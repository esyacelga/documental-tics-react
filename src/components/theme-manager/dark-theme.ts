import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Configura el tema en modo oscuro
        primary: {
            main: '#90caf9', // Azul primario
        },
        secondary: {
            main: '#f48fb1', // Rosa como secundario
        },
        background: {
            default: '#424242', // Fondo gris oscuro
            paper: '#616161', // Fondo gris un poco más claro
        },
        text: {
            primary: '#ffffff', // Texto principal en blanco
            secondary: '#bbbbbb', // Texto secundario más claro
        },
        // Otros colores o configuraciones de la paleta según sea necesario
    },
});

export default darkTheme;
