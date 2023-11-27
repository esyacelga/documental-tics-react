import {Box} from '@mui/system'
import {Toolbar} from '@mui/material';
import {NavBar} from "./nav-bar.tsx";
import {SideBar} from "./side-bar.tsx";

const drawerWidth = 280;
export const    RootLayout = ({children}: any) => {
    return (
        <Box sx={{display: 'flex'}}>

            <NavBar drawerWidth={drawerWidth}/>

            <SideBar drawerWidth={drawerWidth}/>

            <Box
                component='main'
                sx={{flexGrow: 1, p: 3}}
            >
                <Toolbar/>

                {children}

            </Box>
        </Box>
    )
}