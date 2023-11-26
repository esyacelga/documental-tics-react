import {CssBaseline, ThemeProvider} from "@mui/material";
import DarkTheme from "./dark-theme.ts";

export const AppTheme = ({children}: any) => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}