import {
    Box,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
    Alert
} from '@mui/material';
import { Layout as AuthLayout } from '../layout/auth/Layout';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import nProgress from 'nprogress';
import Auth from '../api/auth';
import { useState } from 'react';
import { updateLogin } from '../../stores/admin-store';
import { useDispatch } from 'react-redux';

const Login = () => {

    const alertdef = {
        'show' : false,
        'type' : 'success',
        'message' : ''
    };

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [alert, setAlert] = useState(alertdef);

    const formik = useFormik({
        initialValues : {
            username : '',
            password : ''
        },
        validationSchema : Yup.object({
            username : Yup.string()
            .required('Username is Required'),
            password : Yup.string()
            .required('Password is Required')
        }),
        onSubmit : async (values, helpers) => {
            nProgress.start();
            setAlert(alertdef);
            Auth.post('/login', values).then(res => {
                console.log(res.data);
                !res.data.success && (setAlert({
                    'show' : true,
                    'type' : 'error',
                    'message' : res.data.message
                }));
                res.data.success && (() => {
                    dispatch(updateLogin(true));
                    navigate('/overview');
                })()
            });
        }
    })

    return (
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
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                    <TextField fullWidth label="User Name" name="username" type="text"
                        error={!!(formik.touched.username && formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    <TextField fullWidth label="Password" name="password" type="password"
                        error={!!(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained" >
                        Sign In
                    </Button>

                    {alert.show && <Alert mt={3} variant="outlined" severity={alert.type}>{alert.message}</Alert> }
                    </Stack>
                </form>
            </div>
            </Box>
        </Box>
    );
}

Login.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);


export default Login;
