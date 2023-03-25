import { useState } from 'react';
import {
    Box,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
    Grid,
    Alert
} from '@mui/material';
import { Layout as AuthLayout} from '../layout/auth/Layout';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { getRegisterFormik } from '../utils/formik-config';
import nProgress from 'nprogress';
import Api from '../axios/account';

const Register = () => {

    const navigate = useNavigate();

    const alertdef = {
        'show' : false,
        'type' : 'success',
        'message' : ''
    };

    const [alert, setAlert] = useState(alertdef);

    const onSubmit = async (values, helpers) => {
        nProgress.start();
        setAlert(alertdef);
        Api.register(values).then(res => {
            const data = res.data;
            if (data.success === false) {
                nProgress.done();
                setAlert({
                    'show' : true,
                    'type' : 'error',
                    'message' : data.message
                });
            } else {
                setAlert({
                    'show' : true,
                    'type' : 'success',
                    'message' : 'Successfully Registered, Redirecting to Signin..'
                });
                setTimeout(()=> {
                    nProgress.done();
                    navigate('/');
                }, 1000);
            }
        });
    }

    const formik = useFormik(getRegisterFormik(onSubmit));

    return (
        <Box
            sx={{ backgroundColor: 'background.paper', flex: '1 1 auto', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ maxWidth: 550, px: 3, py: '100px', width: '100%' }}
            >
            <div>
                <Stack spacing={1} sx={{ mb: 3 }} >
                <Typography variant="h4">
                    Register
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    Already Have an Account? &nbsp;
                    <Link component={ReactLink} to="/" underline="hover" variant="subtitle2">
                            Sign In Here
                    </Link>
                </Typography>
                </Stack>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth label="User Name" name="userName" type="text" 
                                error={!!(formik.touched.userName && formik.errors.userName)}
                                helperText={formik.touched.userName && formik.errors.userName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.userName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="First Name" name="firstName" type="text"
                                error={!!(formik.touched.firstName && formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="Last Name" name="lastName" type="text"
                            error={!!(formik.touched.lastName && formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Password" name="password" type="password"
                                error={!!(formik.touched.password && formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Confirm Password" name="cPassword" type="password"
                                error={!!(formik.touched.cPassword && formik.errors.cPassword)}
                                helperText={formik.touched.cPassword && formik.errors.cPassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.cPassword}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth size="large" type="submit" variant="contained" >
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            {alert.show && <Alert mt={3}  variant="outlined" severity={alert.type}>{alert.message}</Alert> }
                        </Grid>
                    </Grid>
                    
                </form>
            </div>
            </Box>
        </Box>
    );
}

Register.getLayout = (page) => (
    <AuthLayout>
        {page}
    </AuthLayout>
);

export default Register;
