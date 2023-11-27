import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(LanguageDetector) // Agregar el complemento LanguageDetector
    .use(initReactI18next)
    .init({
        // Configuración de traducción
        resources: {
            en: {
                translation:{
                    "hello": "¡Hola!",
                    "welcome": "Bienvenido a mi aplicación."
                }
            },
            es: {
                translation: {
                    "hello": "¡Hola!",
                    "welcome": "Bienvenido a mi aplicación."
                }
            }
        },
        fallbackLng: 'es', // Idioma predeterminado si no se encuentra una traducción
        debug: true, // Habilitar mensajes de depuración en la consola
        interpolation: {
            escapeValue: false // No escapar valores HTML en las traducciones
        }
    });

export default i18n;