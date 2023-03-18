import {
    Box,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Layout as AuthLayout } from '../layout/auth/Layout';
import { Link as ReactLink } from 'react-router-dom';

const Login = () => {

    return (
        <AuthLayout>
            <Box
                sx={{ backgroundColor: 'background.paper', flex: '1 1 auto', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                <Box sx={{ maxWidth: 550, px: 3, py: '100px', width: '100%' }}
                >
                <div>
                    <Stack spacing={1} sx={{ mb: 3 }} >
                    <Typography variant="h4">
                        Login
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        Don&apos;t have an account?
                        &nbsp;
                        <Link component={ReactLink} to="/register" underline="hover" variant="subtitle2">
                            Register 
                        </Link>
                    </Typography>
                    </Stack>
                    <form onSubmit={(event) => submitHandler(event)}>
                        <Stack spacing={3}>
                        <TextField fullWidth label="User Name" name="user-name" type="email" />
                        <TextField fullWidth label="Password" name="password" type="password"/>
                        </Stack>
                        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained" >
                            Continue
                        </Button>
                    </form>
                </div>
                </Box>
            </Box>
        </AuthLayout>
    );
}

export default Login;
