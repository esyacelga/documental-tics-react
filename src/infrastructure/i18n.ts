import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';


i18n.use(initReactI18next).init({
    resources: {
        "es": {
            "hello": "¡Hola!ssd",
            "welcome": "Bienvenido a mi aplicación.asas"
        }
    },
    lng: 'es', // idioma por defecto
    interpolation: {
        escapeValue: false, // no necesitas escapar los valores
    },

});

export default i18n;