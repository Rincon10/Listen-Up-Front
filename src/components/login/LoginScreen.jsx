import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useLoginScreen from 'components/hooks/useLoginScreen';
import Form from 'components/ui/Form';

const theme = createTheme();

const LoginScreen = () => {
    const { fields } = useLoginScreen();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Form
                    fields={fields}
                    title={'Log In'}
                    aLink={"Don't have an account? Sign Up"}
                    href={'#'}
                />
            </Container>
        </ThemeProvider>
    );
};

export default LoginScreen;
