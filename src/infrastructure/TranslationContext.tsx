import {createContext, useContext} from "react";
import i18n from "./i18n.ts";

const TranslationContext = createContext();

export const TranslationProvider = ({children}: any) => {
    return (
        <TranslationContext.Provider value={i18n}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);