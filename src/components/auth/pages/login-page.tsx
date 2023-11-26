import {Button, Container, TextField} from '@mui/material'
import {AuthLayout} from "../layout/auth-layout.tsx";

export const LoginPage = () => {
    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();

        // Lógica para el envío del formulario (autenticación, etc.)
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
                        label="Usuario"
                        name="username"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
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
                        Iniciar sesión
                    </Button>
                </form>
            </Container>
        </AuthLayout>
    )
}