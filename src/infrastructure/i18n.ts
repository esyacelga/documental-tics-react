import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es_translations from '../application/translations/es/es_translations.json'

i18n
    .use(LanguageDetector) // Agregar el complemento LanguageDetector
    .use(initReactI18next)
    .init({
        // Configuración de traducción
        resources: {
            en: {
                translation: {
                    "hello": "¡Hola!",
                    "welcome": "Bienvenido a mi aplicación."
                }
            },
            es: es_translations

        },
        fallbackLng: 'es', // Idioma predeterminado si no se encuentra una traducción
        debug: true, // Habilitar mensajes de depuración en la consola
        interpolation: {
            escapeValue: false // No escapar valores HTML en las traducciones
        }
    });

export default i18n;