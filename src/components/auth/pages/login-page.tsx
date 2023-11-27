import {Button, Container, TextField} from '@mui/material'
import {AuthLayout} from "../layout/auth-layout.tsx";
import {useTranslation} from "react-i18next";

export const LoginPage = () => {
    const {t} = useTranslation();


    const handleSubmit = (eveto: React.FormEvent<HTMLFormElement>) => {
        eveto.preventDefault();
        console.log(eveto)
    };
    return (
        <AuthLayout title="Login">
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label={t('common.user.name')}
                        name="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t('common.user.password')}
                        type="password"
                        id="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt: 3, mb: 2}}
                    >
                        {t('common.session.initiate')}
                    </Button>
                </form>
            </Container>
        </AuthLayout>
    )
}