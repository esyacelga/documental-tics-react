import {CssBaseline, ThemeProvider} from "@mui/material";
import {PurpleTheme} from "./purpleTheme.ts";

export const AppTheme = ({children}: any) => {
    return (
        <ThemeProvider theme={PurpleTheme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    )
}