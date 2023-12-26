import {Button, Container, Grid, TextField, Typography} from '@mui/material'
import {AuthLayout} from "../layout/auth-layout.tsx";
import {useTranslation} from "react-i18next";
import {useForm} from "../../../infrastructure";
import React, {useMemo} from "react";
import {Google} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {checkingAuthentication, startGoogleSignIn} from "../thunks";

export const LoginPage = () => {
    const {t} = useTranslation();

    const dispatch = useDispatch();

    // @ts-ignore
    const {status} = useSelector(state => state.auth)


    // @ts-ignore
    const {email, password, onInputChange} = useForm({
        email: 'gesyacelga@gmail.com',
        password: '123456'
    })


    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        console.log(email, password);
        // @ts-ignore
        dispatch(checkingAuthentication())
    };
    const onGoogleSubmit = (evento: any) => {
        evento.preventDefault();
        // @ts-ignore
        dispatch(startGoogleSignIn())
    };
    const isAuthentication = useMemo(() => {
        return status === 'checking';
    }, [status]);
    console.log(isAuthentication)
    return (
        <AuthLayout title="Login">
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={t('common.user.name')}
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t('common.user.password')}
                        type="password"
                        value={password}
                        id="password"
                        onChange={onInputChange}
                    />
                    {/*     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt: 3, mb: 2}}
                    >
                        {t('common.session.initiate')}
                    </Button>*/}
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit"
                                    disabled={isAuthentication}
                                    variant='contained' fullWidth>
                                <Typography sx={{ml: 1}}>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant='contained'
                                fullWidth
                                disabled={isAuthentication}
                                onClick={onGoogleSubmit}
                            >
                                <Google>
                                </Google>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </AuthLayout>
    )
}