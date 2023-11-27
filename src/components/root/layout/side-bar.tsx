import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material'
import {TurnedInNot} from '@mui/icons-material';
import {useTranslation} from 'react-i18next';
import i18n from "../../../infrastructure/i18n.ts";


export const SideBar = ({drawerWidth = 240}) => {
    const {t} = useTranslation();
    //i18n.changeLanguage('es');
    const changeLanguageToSpanish = () => {
        i18n.changeLanguage('es');
    };
    return (
        <Box
            component='nav'
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
            <div>
                <button onClick={changeLanguageToSpanish}>....{t('Switch to Spanish')}</button>
                {/* Agrega más botones o lógica para cambiar a otros idiomas si lo necesitas */}
            </div>
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Fernando Herrera...
                        <h1>{t('hello')}</h1>
                    </Typography>
                    <button onClick={changeLanguageToSpanish}>Hola</button>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Exercitation cillum irure elit consectetur.'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
